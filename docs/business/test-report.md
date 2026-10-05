# Test Report — "Fortuna in Chiaro"

> Pronto per l'UAT manuale su `app/index.html`. Colonna "Esito" da compilare durante l'esecuzione (Pass / Fail / Bloccato). I TC già coperti da `app/tests/motore.test.js` (eseguiti via `tests.html`) sono segnalati: vanno comunque riverificati in UI, ma il calcolo sottostante è già garantito da un test automatico.

| TC | BR | Copertura test automatico (`app/tests/motore.test.js`) | Esito | Evidenze | Data |
|---|---|---|---|---|---|
| TC-01 | BR-01 | — (solo UI/testo) | | | |
| TC-02 | BR-02 | "quiz: le risposte corrette coincidono con il motore"; "verificaQuiz e confrontaQuiz: 1/3 prima, 3/3 dopo" — coperti da test automatico | | | |
| TC-03 | BR-02 | "10 €/giorno -> 3.650 €/anno" (spesaAnnuaDaGiornaliera) — coperto da test automatico | | | |
| TC-04 | BR-03 | "10 €/giorno -> 3.650 €/anno" (M.spesa su abitudine Salvatore: giorno 10, anno 3650, mese ≈304,17) — coperto da test automatico | | | |
| TC-05 | BR-03 | "spesa settimanale: 7 volte a settimana = 1 al giorno" (pattern analogo, 5€/giorno → 1.825€/anno) — coperto da test automatico | | | |
| TC-06 | BR-03, BR-09 | — (solo UI/testo: dichiarazione "stima, non ufficiale" per eventuale biglietto da 10€) | | | |
| TC-07 | BR-04 | "perdita attesa Salvatore: 3.650 € × 28,79% ≈ 1.050,83 €/anno" — coperto da test automatico | | | |
| TC-08 | BR-04 | "anni attesi per il premio massimo: Salvatore ≈ 17.096 anni" — coperto da test automatico | | | |
| TC-09 | BR-04, BR-10 | "PRNG: stesso seme -> stessa sequenza..."; "simulaAnno riproducibile con lo stesso seme (seme demo)" — coperti da test automatico (ripetibilità garantita); durata/UI demo da verificare a mano | | | |
| TC-10 | BR-05 | "premio massimo modello A: 500.000 € con 1 su 12.480.000"; "payout = valori dichiarati" — coperti da test automatico (numeri); rappresentazione visiva da verificare a mano | | | |
| TC-11 | BR-05 | "ritardatari: frequenza dopo un ritardo = frequenza generale = 5/90"; "ritardatari riproducibile con lo stesso seme" — coperti da test automatico | | | |
| TC-12 | BR-06 | "quiz: le risposte corrette coincidono con il motore" (q4, trasferimento 2€/70%/100 → 60€); "trasferimento: 2 € × 100 giocate, payout 70% -> 60 €" — coperti da test automatico | | | |
| TC-13 | BR-07 | "verificaQuiz e confrontaQuiz: 1/3 prima, 3/3 dopo" — coperto da test automatico (confronto punteggi); riepilogo numerico in UI da verificare a mano | | | |
| TC-14 | BR-08 | — (solo UI: presenza disclaimer e numero verde in ogni schermata) | | | |
| TC-15 | BR-09 | "ogni gioco ha fonte con sezione di ricerca-azzardo.md"; "probabilita' calcolate = probabilita' dichiarate..."; "payout = valori dichiarati" — coperti da test automatico | | | |
| TC-16 | BR-11 | — (solo UI/testo: assenza di consigli/giudizi) | | | |
| TC-17 | BR-12 | — (da verificare manualmente con DevTools → Network) | | | |
| TC-18 | BR-12 | — (da verificare manualmente ispezionando il codice sorgente) | | | |
| TC-19 | BR-13 | — (da verificare manualmente: messaggio rimborso e riepilogo vincite in UI) | | | |
| TC-20 | BR-14 | — (da verificare manualmente: vista 10.000 persone e scala Italia in UI) | | | |
| TC-21 | BR-15 | — (da verificare manualmente: testi "208 stadi" e "17.096 anni" in UI) | | | |
| TC-22 | BR-11 (L4) | — (da verificare: hook PreToolUse su caso positivo/negativo; test automatico sui testi dell'app) | | | |
| TC-23 | BR-16 | — (da verificare manualmente: pannello soglia, link tel/WhatsApp/mailto, DevTools Network/Storage) | | | |
| TC-24 | BR-17 | — (condizionato al go/no-go delle 14:05; da verificare manualmente se "go") | | | |

**Nota**: i test automatici in `app/tests/motore.test.js` coprono la correttezza dei calcoli (motore) ma non sostituiscono la verifica dell'interfaccia utente (presenza a schermo, testi, tono, visibilità). L'UAT su app/index.html resta necessaria per tutti i TC prima del verdetto QA.
