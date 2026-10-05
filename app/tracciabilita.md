# Tracciabilità BR → componenti → stato

Verifica: flusso completo percorso in Edge headless con i default di Salvatore (10 €/giorno), nessun errore JS; `tests/run-tests.ps1` 27/27 verdi.

| BR | Cosa | File | Stato | Note |
|---|---|---|---|---|
| BR-01 | Benvenuto e tono | `index.html` (schermata 1), `src/ui.js` | Fatto | Titolo "Quanto ti costa sperare?", nessun marchio |
| BR-02 | Quiz prima (3 domande) | `data/quiz.js`, `src/ui.js` (`renderQuiz`), `src/motore.js` (`verificaQuiz`) | Fatto | Testi da `quiz.js` (fonte unica); "Avanti" attivo solo con 3 risposte; punteggio in memoria |
| BR-03 | Abitudine → spesa giorno/mese/anno | `src/ui.js` (`renderAbitudine`, `aggiornaSpesa`), `src/motore.js` (`spesa`), `data/giochi.js` | Parziale | 10 €/giorno → 10 € / 304,17 € / 3.650 €; giorno o settimana; posta del Lotto scelta dall'utente. Biglietto da 10 € escluso per decisione (nessuna tabella ufficiale) |
| BR-04 | Un anno in 10 secondi | `src/ui.js` (`avviaSimulazione`, requestAnimationFrame), `src/motore.js` (`simulaAnno`, `perditaAttesa`, `anniAttesiPremioMax`) | Fatto | Valore atteso esatto accanto ai contatori (perdita 1.050,83 € con payout calcolato 71,21%); 17.096 anni con 730 giocate/anno, etichettato come stima derivata; "Rivedi" = stesso seme |
| BR-05 | Capire i numeri (3 schede) | `index.html` (schermata 5), `src/ui.js` (`initSchede`) | Fatto | A: griglia 10.000 puntini + cursore fino a 1.248 griglie; B: 10/100/1.000/10.000 giocate, atteso vs simulato; C: 500.000 estrazioni, frequenza dopo ritardo ≥100 vs teorica 5/90 |
| BR-06 | Quiz dopo + trasferimento | `data/quiz.js`, `src/ui.js` (`renderQuizDopo`) | Fatto | Stesse 3 domande con opzioni rimescolate (seme), q4 biglietto da 2 € al 70% etichettato "inventato per l'esercizio" |
| BR-07 | Cruscotto prima/dopo | `src/ui.js` (`renderCruscotto`), `src/motore.js` (`confrontaQuiz`), `style.css` (`.cr-*`) | Fatto | Numeri presi dallo stesso oggetto della schermata 4 (nessun ricalcolo); caratteri grandi per proiettore |
| BR-08 | Disclaimer e numero verde sempre visibili | `index.html` (header sticky, footer fisso), `style.css` | Fatto | Visibili in tutte le 7 schermate |
| BR-09 | Dati con fonte, arrotondamenti dichiarati | `data/giochi.js`, `src/ui.js` (`citaFonte`) | Fatto | Fonte sotto ogni gioco e ogni scheda; Lotto "calcolo combinatorio, terzi"; nota arrotondamento mensile |
| BR-10 | Modalità demo | `src/ui.js` (`?demo=1`, toggle, seme `GIOCHI.seme.demo`) | Fatto | Animazione ≈3 s, risultato identico a ogni esecuzione (verificato due volte di seguito) |
| BR-11 | Nessun consiglio né giudizio | tutti i testi | Fatto | Testo degli anni riformulato in modo neutro ("il premio massimo esce in media una volta ogni N anni di gioco") |
| BR-12 | Privacy | `src/ui.js` | Fatto | Nessuna chiamata di rete, nessuno storage; nota privacy in Benvenuto e Cruscotto |
