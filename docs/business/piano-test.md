# Piano di test — "Fortuna in Chiaro"

> Esecuzione manuale su `app/index.html` (nessuna build). Tempo stimato totale: ~10 minuti. Ogni TC è collegato a uno o più BR.

| TC | BR | Descrizione / passi | Risultato atteso |
|---|---|---|---|
| TC-01 | BR-01 | Aprire `app/index.html`. Leggere la schermata di benvenuto. | Titolo/sottotitolo tema "quanto costa sperare"; nessun marchio commerciale; tono non giudicante. |
| TC-02 | BR-02 | Rispondere al quiz iniziale (3 domande), annotare le risposte date e il punteggio mostrato. | 3 domande a scelta multipla presenti; punteggio 0-3 calcolato e conservato per il confronto finale. |
| TC-03 | BR-02 | Alla domanda sulla spesa annua con 10€/giorno, verificare l'opzione corretta indicata come tale dopo la risposta. | Risposta corretta = 3.650 €/anno. |
| TC-04 | BR-03 | Nella schermata "La mia abitudine", selezionare "lotteria istantanea da 5€" con frequenza 2 volte/giorno. | Spesa giornaliera 10 €, mensile ≈ 304,17 €, annuale 3.650 €. |
| TC-05 | BR-03 | Cambiare la selezione a 1 biglietto da 5€/giorno. | Spesa annuale ricalcolata a 1.825 €. |
| TC-06 | BR-03, BR-09 | Selezionare (se presente) il biglietto da 10€. | Testo dichiara esplicitamente "stima, non tabella ufficiale completa" (nessun dato da fonte non verificata presentato come certo). |
| TC-07 | BR-04 | Avviare "Un anno in 10 secondi" con modello A (payout 71,2%) e spesa 10€/giorno. Osservare contatori e valore atteso. | Valore atteso esatto mostrato ≈ perdita 1.051,80 €/anno (3.650 × 28,8%), indipendente dall'esito casuale della simulazione. |
| TC-08 | BR-04 | Nella stessa simulazione, leggere il messaggio "N anni per il premio massimo". | N ≈ 34.192 anni (1/12.480.000 ÷ 365/anno), etichettato come stima/calcolo derivato. |
| TC-09 | BR-04, BR-10 | Eseguire la simulazione due volte in modalità demo. | Risultato finale dei contatori identico nelle due esecuzioni (seme fisso); durata ≈ 10 secondi. |
| TC-10 | BR-05 | Aprire la scheda "probabilità" e la scheda "valore atteso". | Probabilità "1 su 12.480.000" rappresentata visivamente; esempio "su 100€ ne tornano 71,2€, persi 28,8€" presente. |
| TC-11 | BR-05 | Aprire il simulatore dei "ritardatari": impostare un numero "in ritardo da 100 estrazioni" e uno "appena uscito", lanciare l'estrazione simulata. | Probabilità di uscita mostrata identica per entrambi i numeri (indipendenza statistica). |
| TC-12 | BR-06 | Completare il quiz finale (stesse 3 domande + 1 di trasferimento su biglietto nuovo). | Le 3 domande iniziali sono riproposte; la domanda di trasferimento valuta correttamente il calcolo (100 × prezzo × (1-payout%)). |
| TC-13 | BR-07 | Arrivare al cruscotto finale. | Punteggio prima e dopo affiancati (es. "prima 1/3 — dopo 3/3"); esito trasferimento visibile; numeri simulazione coerenti con BR-04. |
| TC-14 | BR-08 | Scorrere tutte le schermate dell'app. | Disclaimer "Strumento educativo: non dà consigli" e numero verde 800 55 88 22 sempre visibili, non in menu nascosti. |
| TC-15 | BR-09 | Confrontare 3 numeri a scelta mostrati in app (es. payout 71,2%, probabilità premio massimo, numero verde) con `docs/idea/ricerca-azzardo.md`. | Valori coincidenti con la fonte, nessuna alterazione. |
| TC-16 | BR-11 | Rileggere tutti i testi dell'app cercando imperativi/consigli. | Nessuna frase tipo "dovresti smettere", "gioca meno", "non conviene", "ti consiglio". |
| TC-17 | BR-12 | Aprire DevTools → tab Network, compilare quiz e abitudine, osservare le richieste di rete. | Nessuna richiesta HTTP in uscita contenente risposte/scelte dell'utente; nessuna chiamata a servizi esterni con dati personali. |
| TC-18 | BR-12 | Ispezionare il codice sorgente dell'app (view-source o file). | Nessuna chiave API presente nel codice client. |

**Copertura Must**: BR-01, BR-02, BR-03, BR-04, BR-06, BR-07, BR-08, BR-09, BR-11, BR-12 coperti rispettivamente da almeno un TC (vedi tabella sopra). BR-05 (Must) coperto da TC-10/TC-11. BR-10 (Should) coperto da TC-09.
