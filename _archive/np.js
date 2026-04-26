const NP_API_KEY = "5388036b3e711faa6fe50a5438f555fb";
const NP_API_URL = "https://api.novaposhta.ua/v2.0/json/";

const cityInput = document.getElementById('buyer-city');
const cityDropdown = document.getElementById('city-dropdown');
const branchInput = document.getElementById('buyer-branch');
const branchDropdown = document.getElementById('branch-dropdown');

let selectedCityRef = null;
let currentBranches = [];

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

async function fetchCities(query) {
    if (!query) return { success: false, data: [], error: '' };
    try {
        const response = await fetch(NP_API_URL, {
            method: 'POST',
            body: JSON.stringify({
                apiKey: NP_API_KEY,
                modelName: "Address",
                calledMethod: "getCities",
                methodProperties: {
                    FindByString: query,
                    Limit: 50
                }
            })
        });
        const data = await response.json();
        if (data.success) {
            return { success: true, data: data.data };
        } else {
            const err = data.errors && data.errors.length > 0 ? data.errors[0] : 'Невідома помилка API';
            return { success: false, data: [], error: err };
        }
    } catch(e) { 
        // Помилка мережі або CORS
        return { success: false, data: [], error: 'Помилка мережі (CORS або офлайн)' };
    }
}

async function fetchBranches(cityRef, query) {
    try {
        const response = await fetch(NP_API_URL, {
            method: 'POST',
            body: JSON.stringify({
                apiKey: NP_API_KEY,
                modelName: "Address",
                calledMethod: "getWarehouses",
                methodProperties: {
                    CityRef: cityRef,
                    Limit: 1000
                }
            })
        });
        const data = await response.json();
        return data.success ? data.data : [];
    } catch(e) { return []; }
}

const onCityInput = debounce(async (e) => {
    const val = e.target.value.trim();
    if(val.length < 2) {
        cityDropdown.classList.remove('show');
        return;
    }
    
    cityDropdown.innerHTML = '<li class="loading">Шукаємо...</li>';
    cityDropdown.classList.add('show');
    
    const result = await fetchCities(val);
    cityDropdown.innerHTML = '';
    
    if(!result.success) {
        cityDropdown.innerHTML = `<li class="loading" style="color:#e3010f; font-size:0.8rem; white-space: normal;">Помилка: ${result.error}</li>`;
        return;
    }
    
    const cities = result.data;
    
    if(cities.length === 0) {
        cityDropdown.innerHTML = '<li class="loading">Місто не знайдено</li>';
        return;
    }
    
    cities.forEach(city => {
        const li = document.createElement('li');
        const area = city.AreaDescription ? `, ${city.AreaDescription} обл.` : '';
        li.textContent = `${city.Description}${area}`;
        li.dataset.ref = city.Ref;
        li.addEventListener('click', () => {
            cityInput.value = city.Description;
            selectedCityRef = city.Ref;
            cityDropdown.classList.remove('show');
            branchInput.disabled = false;
            branchInput.value = '';
            branchInput.placeholder = 'Завантаження відділень...';
            currentBranches = []; // reset branches
            
            // Preload branches
            fetchBranches(selectedCityRef).then(branches => {
                currentBranches = branches;
                branchInput.placeholder = '№ Відділення або Поштомат';
                branchInput.focus();
            });
        });
        cityDropdown.appendChild(li);
    });
});

const onBranchInput = debounce((e) => {
    const val = e.target.value.trim().toLowerCase();
    
    if(!selectedCityRef || currentBranches.length === 0) return;
    
    branchDropdown.innerHTML = '';
    
    const filtered = currentBranches.filter(b => b.Description.toLowerCase().includes(val));
    
    if(filtered.length === 0) {
        branchDropdown.innerHTML = '<li class="loading">Відділення не знайдено</li>';
    } else {
        const limited = filtered.slice(0, 50); // don't overwhelm DOM
        limited.forEach(b => {
             const li = document.createElement('li');
             li.textContent = b.Description;
             li.dataset.ref = b.Ref;
             li.addEventListener('click', () => {
                 branchInput.value = b.Description;
                 branchDropdown.classList.remove('show');
             });
             branchDropdown.appendChild(li);
        });
    }
    branchDropdown.classList.add('show');
}, 100);

if(cityInput && branchInput) {
    cityInput.addEventListener('input', onCityInput);
    branchInput.addEventListener('input', onBranchInput);
    
    branchInput.addEventListener('focus', () => {
        if(selectedCityRef) {
            onBranchInput({target: {value: branchInput.value}});
        }
    });
    
    // reset selection if city changed but not selected
    cityInput.addEventListener('change', () => {
        if(cityInput.value === '') {
            selectedCityRef = null;
            branchInput.value = '';
            branchInput.disabled = true;
            currentBranches = [];
        }
    });
    
    document.addEventListener('click', (e) => {
        if(!cityInput.contains(e.target) && !cityDropdown.contains(e.target)) {
            cityDropdown.classList.remove('show');
        }
        if(!branchInput.contains(e.target) && !branchDropdown.contains(e.target)) {
            branchDropdown.classList.remove('show');
        }
    });
}
