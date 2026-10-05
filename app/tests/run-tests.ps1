# Esegue app/tests/tests.html in Edge headless e restituisce exit code 1 se almeno un test fallisce.
$edge = "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) { $edge = "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe" }
$page = "file:///" + ((Join-Path $PSScriptRoot "tests.html") -replace '\\', '/')
$edgeData = Join-Path $env:TEMP "hagenthon-edge-tests"
$dom = & $edge --headless=new --disable-gpu --no-first-run --user-data-dir="$edgeData" --virtual-time-budget=5000 --dump-dom $page 2>$null | Out-String
$m = [regex]::Match($dom, '(?s)<pre id="result">(.*?)</pre>')
if (-not $m.Success) { Write-Output "Impossibile leggere i risultati dei test (Edge headless)."; exit 1 }
$result = [System.Net.WebUtility]::HtmlDecode($m.Groups[1].Value)
Write-Output $result
if ($result -match 'RISULTATO: \d+ passati, 0 falliti') { exit 0 } else { exit 1 }
