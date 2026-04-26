$ip = (Test-Connection -ComputerName (hostname) -Count 1).IPV4Address.IPAddressToString
$port = 8888
$prefix = "http://*:$port/"
$root = $PSScriptRoot

Write-Host "Starting server on $ip : $port..."
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
$listener.Start()

Write-Host "Server is running! Open on phone: http://${ip}:${port}/"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $path = $request.Url.LocalPath
    if ($path -eq "/") { $path = "/index.html" }
    
    $filePath = Join-Path $root $path
    
    if (Test-Path $filePath -PathType Leaf) {
        $content = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $content.Length
        
        $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
        switch ($ext) {
            '.html' { $response.ContentType = 'text/html; charset=utf-8' }
            '.css'  { $response.ContentType = 'text/css' }
            '.js'   { $response.ContentType = 'application/javascript' }
            '.png'  { $response.ContentType = 'image/png' }
            '.jpg'  { $response.ContentType = 'image/jpeg' }
            '.jpeg' { $response.ContentType = 'image/jpeg' }
            '.svg'  { $response.ContentType = 'image/svg+xml' }
        }

        $response.OutputStream.Write($content, 0, $content.Length)
    } else {
        $response.StatusCode = 404
    }
    
    $response.Close()
}
