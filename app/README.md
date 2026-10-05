# Fortuna in Chiaro — l'app

Simulatore educativo sul gioco d'azzardo: in 7 schermate mostra quanto costa un'abitudine di gioco, cosa succede in un anno simulato (in 10 secondi), il valore atteso esatto calcolato dalle tabelle premi ufficiali ADM e quanto cambia la comprensione con un quiz prima e dopo. Non dà consigli: mostra numeri e significati.

## Prerequisiti
- Un browser moderno (Microsoft Edge o Chrome). Nient'altro: niente Node, Python, server, build o connessione di rete.

## Come si apre
1. Doppio click su `app/index.html`.
2. Modalità demo (seme fisso, animazione di circa 3 secondi): aprire `app/index.html?demo=1`, oppure attivare il toggle "Modalità demo" nella schermata di benvenuto.

Da PowerShell, nella cartella del repository:
```powershell
Start-Process msedge ("file:///" + ((Resolve-Path app\index.html).Path -replace '\\','/') + "?demo=1")
```

## Percorso
1. Benvenuto → 2. Quiz prima (3 domande) → 3. La mia abitudine (default: Salvatore, 2 biglietti da 5 € al giorno = 10 €/giorno) → 4. Un anno in 10 secondi → 5. Capire i numeri (3 schede con mini-esperimento) → 6. Quiz dopo + domanda di trasferimento → 7. Cruscotto prima/dopo.

Disclaimer e Telefono Verde Nazionale ISS (800 55 88 22) sono sempre visibili in testata e a piè di pagina.

## Test
```powershell
powershell -ExecutionPolicy Bypass -File app\tests\run-tests.ps1
```
Esegue `app/tests/tests.html` (test della logica di `src/motore.js`) in Edge headless; exit code diverso da 0 se un test fallisce. In alternativa si apre `app/tests/tests.html` nel browser.

## Configurazione e segreti
Nessuna API key, nessuna variabile d'ambiente, nessun servizio esterno: tutti i calcoli sono deterministici e locali (zero token a runtime). I dati inseriti restano in memoria nella pagina e si perdono alla chiusura.

## Struttura
Vedi `ARCHITETTURA.md` (componenti e contratto API) e `tracciabilita.md` (BR → file → stato).
