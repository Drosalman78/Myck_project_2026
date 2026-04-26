const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const crypto = require('crypto');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Роздача статичних файлів з поточної директорії
app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;

// WayForPay Utils
const wfpMerchantAccount = process.env.WAYFORPAY_MERCHANT_ACCOUNT;
const wfpMerchantSecretKey = process.env.WAYFORPAY_MERCHANT_SECRET_KEY;
const wfpMerchantDomainName = process.env.WAYFORPAY_MERCHANT_DOMAIN_NAME;

// POST /api/create-payment
app.post('/api/create-payment', async (req, res) => {
    const { name, phone, amount, productName, gateway } = req.body;

    if (!name || !phone || !amount || !gateway) {
        return res.status(400).json({ error: 'Не всі поля заповнені' });
    }

    const orderReference = `ORDER_${Date.now()}`;
    const amountInCents = parseInt(amount) * 100;

    if (gateway === 'monopay') {
        try {
            const monoResponse = await axios.post(
                'https://api.monobank.ua/api/merchant/invoice/create',
                {
                    amount: amountInCents,
                    ccy: 980, // UAH
                    reference: orderReference,
                    destination: `Оплата замовлення: ${productName || 'Товар'}`,
                    webHookUrl: `${wfpMerchantDomainName}/api/webhooks/mono`,
                    redirectUrl: `${wfpMerchantDomainName}/thank-you.html`
                },
                {
                    headers: {
                        'X-Token': process.env.MONOBANK_TOKEN
                    }
                }
            );

            return res.json({ paymentUrl: monoResponse.data.pageUrl });
        } catch (error) {
            console.error('Monobank Error:', error.response?.data || error.message);
            return res.status(500).json({ error: 'Помилка при створенні платежу Monobank' });
        }
    } else if (gateway === 'wayforpay') {
        try {
            const orderDate = Math.floor(Date.now() / 1000);
            const currency = 'UAH';
            const productNameArr = [productName || 'Casanova PRO'];
            const productCountArr = [1];
            const productPriceArr = [parseInt(amount)];

            // String for signature: merchantAccount;merchantDomainName;orderReference;orderDate;amount;currency;productName;productCount;productPrice
            const signatureString = [
                wfpMerchantAccount,
                wfpMerchantDomainName,
                orderReference,
                orderDate,
                amount,
                currency,
                productNameArr.join(';'),
                productCountArr.join(';'),
                productPriceArr.join(';')
            ].join(';');

            const signature = crypto.createHmac('md5', wfpMerchantSecretKey).update(signatureString).digest('hex');

            // Form data to be auto-submitted to WayForPay
            const htmlForm = `
                <!DOCTYPE html>
                <html>
                <head><title>Redirecting to payment...</title></head>
                <body>
                    <p>Перенаправлення на сторінку оплати...</p>
                    <form id="wfp-form" action="https://secure.wayforpay.com/pay" method="POST" style="display:none;">
                        <input type="hidden" name="merchantAccount" value="${wfpMerchantAccount}">
                        <input type="hidden" name="merchantDomainName" value="${wfpMerchantDomainName}">
                        <input type="hidden" name="merchantSignature" value="${signature}">
                        <input type="hidden" name="orderReference" value="${orderReference}">
                        <input type="hidden" name="orderDate" value="${orderDate}">
                        <input type="hidden" name="amount" value="${amount}">
                        <input type="hidden" name="currency" value="${currency}">
                        <input type="hidden" name="productName[]" value="${productNameArr[0]}">
                        <input type="hidden" name="productPrice[]" value="${productPriceArr[0]}">
                        <input type="hidden" name="productCount[]" value="${productCountArr[0]}">
                        <input type="hidden" name="clientFirstName" value="${name}">
                        <input type="hidden" name="clientPhone" value="${phone}">
                        <input type="hidden" name="language" value="UA">
                        <input type="hidden" name="returnUrl" value="${wfpMerchantDomainName}/thank-you.html">
                        <input type="hidden" name="serviceUrl" value="${wfpMerchantDomainName}/api/webhooks/wayforpay">
                    </form>
                    <script>document.getElementById('wfp-form').submit();</script>
                </body>
                </html>
            `;

            return res.json({ 
                paymentUrl: `/pay-wayforpay?data=${encodeURIComponent(Buffer.from(htmlForm).toString('base64'))}`
            });
        } catch (error) {
            console.error('WayForPay Error:', error);
            return res.status(500).json({ error: 'Помилка при створенні платежу WayForPay' });
        }
    } else {
        return res.status(400).json({ error: 'Невідома платіжна система' });
    }
});

app.get('/pay-wayforpay', (req, res) => {
    const data = req.query.data;
    if (data) {
        const html = Buffer.from(data, 'base64').toString('utf-8');
        res.send(html);
    } else {
        res.status(400).send('No data provided');
    }
});

// Webhooks
app.post('/api/webhooks/mono', (req, res) => {
    console.log('Monobank Webhook:', req.body);
    // Логіка підтвердження замовлення (збереження в БД, CRM тощо)
    res.status(200).send('OK');
});

app.post('/api/webhooks/wayforpay', (req, res) => {
    console.log('WayForPay Webhook:', req.body);
    const { orderReference, status, time } = req.body;
    
    // Перевірка підпису від WayForPay
    const signatureString = [
        orderReference,
        status,
        time
    ].join(';');
    const expectedSignature = crypto.createHmac('md5', wfpMerchantSecretKey).update(signatureString).digest('hex');

    if (req.body.merchantSignature && req.body.merchantSignature !== expectedSignature) {
        console.error('Invalid WayForPay signature');
        return res.status(403).send('Invalid signature');
    }

    // Логіка підтвердження замовлення (збереження в БД, CRM тощо)

    // Відповідь для WayForPay
    const responseSignature = crypto.createHmac('md5', wfpMerchantSecretKey).update([orderReference, status, time].join(';')).digest('hex');
    
    res.json({
        orderReference,
        status: "accept",
        time,
        signature: responseSignature
    });
});

// Catch-all route for frontend
app.use((req, res) => {
    if (req.path.endsWith('.html') || req.path === '/') {
       res.sendFile(path.join(__dirname, 'index.html'));
    } else {
       res.status(404).send('Not found');
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT} (Network: http://192.168.178.62:${PORT})`);
});
