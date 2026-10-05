# Verdetto QA pre-rilascio: "Fortuna in Chiaro" (Tema 02)

| Campo | Valore |
|---|---|
| Data e ora review | 2026-10-05, 14:10-14:15 |
| Versione revisionata | commit `3be27c3` (14:09) + working tree: `README.md` non tracciato, `agents/` modificata e non committata |
| Riferimenti | `docs/qa/checklist-conformita.md` v2; `00_input/regolamento.md`; `00_input/temi-sfida.md` (Tema 02) |
| Freeze | 15:30 (deroga registrata in `docs/governance/stato-avanzamento.md` r.5 e r.19) |
| Fuori ambito in questo giro | durata della presentazione, 5 minuti (R-10, V-03): da rivalutare a presentazione completa |
| Reviewer | Team QA |

## Verdetto: **FAIL**

Il prodotto è solido: app funzionante, 41/41 test verdi, vincoli T2-V1, V2, V3, E4 rispettati, guardrail L4 verificato. Il rilascio però oggi non è possibile. Ci sono 4 rilievi bloccanti, tutti di consegna o documentazione, che si chiudono in circa 30 minuti: README non tracciato e con contenuti errati, nessun remote GitHub, `agents/` non committata, DEF-001 ancora "Fail/Aperto" nei documenti. Quando i rilievi da QA-001 a QA-004 sono chiusi, QA può emettere **PASS con riserva**: la riserva riguarda R-10, la durata della presentazione.

---

## 1. Verifiche eseguite (evidenze)

| Verifica | Esito | Evidenza |
|---|---|---|
| Test automatici `powershell -NoProfile -ExecutionPolicy Bypass -File app/tests/run-tests.ps1` | **41 passati, 0 falliti, exit 0** | Output della run delle 14:11. La scansione statica T2-V3 passa su 5 file (index.html, src/*.js, data/*.js) |
| App si apre da `app/index.html` | Sì | Edge headless `--dump-dom` su `file:///.../app/index.html`: DOM renderizzato, titolo "Quanto ti costa sperare?" e numero verde 800 55 88 22 presenti. Gli script referenziati (`data/giochi.js`, `data/quiz.js`, `src/motore.js`, `src/ui.js`, `style.css`) esistono tutti |
| Hook `guardrail-t2.ps1`: prova indipendente QA | Funziona | Write su `app/src/ui.js` "Ti Consiglio..." → exit 2. MultiEdit "ti conviene" → exit 2. Write `app/index.html` "dovresti smettere" → exit 2. Testo neutro "In media si perde il 28%" → exit 0. Registrato in `.claude/settings.json` come PreToolUse `Write\|Edit\|MultiEdit` |
| Scansione statica in `run-tests.ps1` | Funziona | La stessa logica `Select-String` su un file di prova (scratchpad) con "NON CONVIENE" rileva la formula: il controllo non distingue maiuscole e minuscole. La scansione viene eseguita anche dall'hook PostToolUse `post-edit-tests.ps1` |
| Grep QA allargata su `app/` (devi, meglio, evita, consigl*, suggeri*, dovresti, smettere, riduci, investi*, risparmia) | Nessuna occorrenza | Testi applicativi neutri. CR1 "Vuoi parlarne con qualcuno?" (`ui.js` r.377-396) è informativo e attivato da una soglia scelta dall'utente; nessun invio automatico |
| Segreti (working tree + tutta la history git) | Nessuno | Grep `sk-ant-`, `ghp_`, `AKIA`, `password=`, `Bearer`: solo il pattern di controllo dentro `guard.ps1` |
| `00_input/`, `kb/` | Non tracciati | `git ls-files` non contiene nessun file di queste cartelle, né ora né nella history. `.gitignore` li esclude (`kb/` oggi è vuota) |
| File di prova o di debug in `app/` | Nessuno | Nessun `console.log`, `debugger`, TODO o FIXME. `app/tests/` contiene solo la suite |
| `agents/` contro `.claude/` | Allineata **solo nel working tree** | Alle 14:10 mancavano `agents/hooks/guardrail-t2.ps1` e c'erano differenze in `settings.json`, `CLAUDE.md` e `agents/governance.md`. Alle 14:11 il contenuto è allineato (sync eseguito da altri), ma `git status` mostra ` M agents/CLAUDE.md`, ` M agents/agents/governance.md`, ` M agents/settings.json`, `?? agents/hooks/guardrail-t2.ps1`: **non committato** |
| `README.md` alla radice | Presente su disco, **non tracciato** (`?? README.md`) | Vedi QA-001 |
| Remote GitHub | **Assente** | `git remote -v` non restituisce nulla |

## 2. Esito checklist punto per punto

Legenda: Sì = conforme · No = non conforme · Rif. = con riserva · N.V. = non verificabile dal repository · Fuori giro = escluso su richiesta.

| ID | Esito | Nota |
|---|---|---|
| C-01 Un solo tema | Sì | Tema 02 in idea, BR, README e presentazione |
| C-02 Tema dichiarato uguale ovunque | Sì | |
| C-03 Problema specifico | Sì | Salvatore, 10 €/giorno, non converte "1 su 12.480.000" in conseguenze |
| C-04 / R-07 Prototipo end-to-end | Sì | Smoke test headless + 41 test + UAT end-to-end (`test-report.md`) |
| C-05 Demo pronta | Sì | `?demo=1` con seme fisso; video di riserva dichiarato nella slide 05 (da verificare che esista) |
| C-06 Team da 2 | N.V. | Da confermare a cura di governance |
| C-07 Logica sviluppata nelle 3 ore | Sì | Commit della giornata a partire dalla scelta dell'idea (12:45) |
| C-08 / R-08 Claude Code | Sì | `.claude/` (agenti, hook, skill), `CLAUDE.md` |
| C-09 / R-09 3 deliverable con il nome del tema, dentro la presentazione | Sì | `presentation/index.html` r.261 (D1), r.395 (D2), r.430 (D3) |
| T2-F1 Educazione, non consulenza | Sì | |
| T2-V1 Scenario educativo preciso | Rif. | Dichiarati due scenari, "simulazione di una scelta quotidiana" e "comprensione di costi" (`idea-selezionata.md` r.11); BR-05 ne cita un terzo. Vedi QA-011 |
| T2-V2 Miglioramento dimostrato | Sì | Quiz prima/dopo 1/3 → 3/3 + domanda di trasferimento. Test automatico `verificaQuiz e confrontaQuiz`, cruscotto (TC-13), slide D2 |
| T2-V3 Nessun consiglio | Sì | Hook PreToolUse + scansione statica + grep QA allargata. Chiusura neutra "La scelta è tua." |
| T2-V4 Capability software | Sì | Motore: valore atteso, simulazione con PRNG a seme, simulazione di 10.000 persone, combinatoria del Lotto |
| T2-D1 User Difficulty Statement | Sì | Slide 02 + 03 (difficoltà, processo, rilevanza) |
| T2-D2 Before / After Simplicity Evidence | Sì | Slide 07 prima/dopo affiancati |
| T2-D3 Risk & Clarity Note | Rif. | "Semplificato" e "Non alterato" ci sono; "come è stata evitata l'ambiguità" è solo implicito. Vedi QA-012 |
| T2-E1 Non chatbot generico | Sì | Flusso guidato a 7 schermate |
| T2-E2 Non pura riscrittura | Sì | |
| T2-E3 Nessun consiglio finanziario | Sì | Come T2-V3 |
| T2-E4 Significato invariato | Sì | Test: probabilità calcolate = tabella ufficiale; payout = dichiarati; tetto 75%; 3.650 € × 28,79% = 1.050,83 € coerente con il "≈ 1.051 €" della slide; biglietto da 2 € del quiz dichiarato "inventato" |
| T2-E5 Processo reale | Sì | Spesa quotidiana su tabelle ADM reali |
| R-01 Repo GitHub pubblico | **No** | Nessun remote. QA-002 |
| R-02 Struttura minima | **No** (ora) | `README.md` non tracciato. QA-001 |
| R-03 `app/` codice del prototipo | Sì | |
| R-04 `agents/` completa (agenti, istruzioni, prompt, skill, workflow) | Rif. | Contenuto allineato ma non committato (QA-003); workflow solo come sezione "Flusso" di `CLAUDE.md` (QA-007) |
| R-05 Presentazione HTML in brand Accenture con soluzione + struttura agentica | Sì (esistenza) | Slide 09 "struttura agentica di sviluppo". Il controllo brand completo si fa nel giro finale |
| R-06 README adeguato | **No** | QA-001 |
| R-10 5 minuti | Fuori giro | |
| R-11 Push entro le 15:30 | Da verificare | Prerequisito: QA-002 |
| R-12 Caricamento sul portale | N.V. | Azione di governance fuori dal repository |
| H-01 / H-02 `00_input/`, `kb/` fuori dal repo | Sì | |
| H-03 Nessun segreto | Sì | Anche nella history |
| H-04 `agents/` allineata e consegnata | **No** (ora) | QA-003 |
| H-05 `.gitignore` | Sì | |
| V-10 README mappa i criteri alle evidenze | No | Incluso in QA-001 |
| V-11 Nomi chiari | Sì | |
| V-12 Nessun file inutile | Sì | |

## 3. Rilievi

### Bloccanti (da chiudere prima del push)

| ID | Regola violata | Rilievo | Azione | Owner |
|---|---|---|---|---|
| QA-001 | R-02, R-06 (Bloccante); V-10, V-11 | `README.md` **non è tracciato** da git (`?? README.md`). Inoltre orienta male chi valuta, persona o agente. (a) La struttura di `app/` cita file inesistenti: `src/quiz.js`, `src/data/giochi.json`, `src/simulatore.js`, `tests/test-data.js`; quelli reali sono `data/giochi.js`, `data/quiz.js`, `tests/motore.test.js`, `tests/testi.test.js`. Anche la FAQ "Dove stanno i dati" indica `app/src/data/giochi.json`. (b) La struttura di `agents/` elenca cartelle `governance/`, `innovazione/` ecc. che non esistono; quelle reali sono `agents/agents/*.md`, `hooks/`, `skills/`, `settings.json`, `CLAUDE.md`, `sync.ps1`. (c) Cita in `docs/` file inesistenti: `piano-progetto.md`, `deliverable-register.md`, `release-log.md`, `BR-01..BR-17.md`, `analisi-tecnica.md`, `test-accettazione.md`, `verdetto-*.md`; mancano invece quelli reali (`business-requirements.md`, `piano-test.md`, `test-report.md`, `problem-statement.md`, `numeri-business-case.md`, `verdetto-qa.md`). (d) Afferma ".claude/ [Locale, non in git]", ma `.claude/` è tracciata. Descrive `.gitignore` con voci (`node_modules/`, `.claude/`, `venduto/`, `*.pyc`) che non ci sono. Dice che `CLAUDE.md` è "questo file". Scrive "6 schermate" invece di 7. (e) Nella sezione conformità dà per fatti, con il segno di spunta, "Verdetto QA PASS" e "Repository pubblico", che oggi sono falsi: sono affermazioni non supportate. (f) La FAQ sull'hook elenca formule ("meglio", "non conviene", "prova a smettere") che non sono nella lista reale. (g) Manca la mappa criterio di valutazione → file di evidenza (V-01…V-09). | Riscrivere le sezioni struttura e FAQ sui file reali (`git ls-files`). Togliere le spunte non vere o trasformarle in stato verificabile. Aggiungere una tabella criterio → percorso di evidenza (per esempio V-08 → `.claude/hooks/`, `docs/qa/evidenze-hook-t2.md`; V-07 → `docs/governance/stato-avanzamento.md`). Poi `git add README.md` | governance |
| QA-002 | R-01, R-11 (Bloccante) | Il repository locale **non ha remote** (`git remote -v` vuoto): oggi il push su GitHub pubblico non è possibile | Creare il repository GitHub **pubblico**, `git remote add origin ...`, fare una prova di push subito (non alle 15:25), verificare la visibilità pubblica da una sessione non autenticata | governance (con l'utente per le credenziali) |
| QA-003 | H-04, R-04 (Bloccante) | `agents/` è allineata a `.claude/` solo nel working tree. Le modifiche (`agents/hooks/guardrail-t2.ps1` nuovo, `settings.json`, `CLAUDE.md`, `agents/governance.md`) **non sono committate**. Nel commit `3be27c3` `agents/` non contiene l'hook L4 che la presentazione e il README dichiarano | Rieseguire `agents/sync.ps1` **subito prima** del commit finale (dopo eventuali ultime modifiche a `.claude/` o `CLAUDE.md`) e committare `agents/`. QA non sincronizza | governance |
| QA-004 | Requisito QA "BR Must coperti e testati"; BR-11 (Must) | **DEF-001 è risolto tecnicamente**: hook `guardrail-t2.ps1` attivo e verificato da QA (exit 2 su Write, Edit e MultiEdit con formule vietate, exit 0 su testo neutro), evidenze in `docs/qa/evidenze-hook-t2.md`, scansione statica in `run-tests.ps1` che gira anche via PostToolUse. I deliverable però dicono il contrario: `test-report.md` riporta **TC-22 Fail**, "38 test", "23/24"; `defect-log.md` riporta DEF-001 **Aperto** e descrive solo `guard.ps1`. Chi valuta legge un Must non superato | **business**: rieseguire TC-22 (hook + `run-tests.ps1`), aggiornare il test-report (TC-22 Pass con evidenze, 41 test, 24/24, nuovo "Impatto sul verdetto Must"). **sviluppo**: aggiornare DEF-001 in `defect-log.md` a "Risolto", indicando `guardrail-t2.ps1`, la registrazione in `settings.json` e la scansione in `run-tests.ps1` | business (TC-22, test-report), sviluppo (stato in defect-log) |

### Non bloccanti

| ID | Gravità | Riferimento | Rilievo | Azione | Owner |
|---|---|---|---|---|---|
| QA-005 | Maggiore | Requisito QA tracciabilità BR → test → codice | `app/tracciabilita.md`: manca la colonna BR → TC. Riga 3 dice "27/27 verdi" (oggi 41). BR-11 non cita hook e scansione L4. BR-17 risulta "Parziale, in attesa del go/no-go delle 14:05", mentre il test-report (TC-24) dice "go raggiunto". BR-13 ha una nota aperta "da confermare" (toast "HAI VINTO" contro analisi funzionale §5 "mai HAI VINTO") | Aggiungere la colonna TC (TC-01…TC-24), aggiornare i conteggi, BR-11 e BR-17. Chiudere la decisione su BR-13 con l'orchestratore e registrarla | sviluppo (tabella), business (decisione BR-13 e allineamento analisi funzionale) |
| QA-006 | Maggiore (diventa Bloccante al push) | CLAUDE.md "Verifica umana obbligatoria: scelta dell'idea e consegna"; V-07 | `stato-avanzamento.md`: il checkpoint delle 14:20 (go/no-go CR2) e la conferma di consegna (15:10) sono "In attesa". Il test-report dà CR2 come "go" senza una decisione registrata | Registrare il go/no-go CR2 e, alla fine, la conferma umana di consegna con ora e decisore. Allineare slide 06 e tracciabilità BR-17 | governance |
| QA-007 | Maggiore | R-04 ("agenti, istruzioni, comandi, prompt, skills, workflow") | In `agents/` il workflow esiste solo come sezione "Flusso" di `agents/CLAUDE.md`. Manca un punto d'ingresso che spieghi a chi valuta come si leggono `agents/` e i passaggi tra agenti (file in input e in output) | Aggiungere `agents/README.md` (o `agents/workflow.md`) alla radice di `agents/`, che `sync.ps1` non cancella: flusso, chi passa cosa a chi, hook e skill usati | governance |
| QA-008 | Maggiore | V-03 efficacia della demo; DEF-002 | DEF-002 ("Script error." in headless con `?pausa=1`) è ancora aperto e non riconfermato in un browser reale | Prova manuale in Edge non headless con DevTools: `app/index.html?demo=1&pausa=1`, percorso completo. Aggiornare DEF-002 (chiuso o confermato) | business (prova), sviluppo (eventuale fix e stato) |
| QA-009 | Minore | Qualità dei test | `testi.test.js`: due test (index.html, src/ui.js) risultano "ok" anche se dichiarano "verifica NON eseguita". Contano tra i 41 passati senza verificare nulla | Segnarli come "skip" (non nel totale dei passati) o rimuoverli, visto che la copertura è nella scansione statica di `run-tests.ps1` | sviluppo |
| QA-010 | Minore | T2-V3, manutenibilità | La lista delle formule vietate è duplicata in 3 punti (hook, `run-tests.ps1`, `testi.test.js`), con rischio di disallineamento. La lista è stretta e non copre per esempio "ti suggerisco", "meglio se", "evita di" | Lasciare com'è per il freeze (grep QA allargata pulita). Dichiarare il limite nella Risk & Clarity Note o nel README | sviluppo |
| QA-011 | Minore | T2-V1 ("uno scenario educativo preciso") | Gli scenari dichiarati sono più di uno: scelta quotidiana + costi (idea) e concetto di base (BR-05) | Dichiarare in README e presentazione uno scenario principale ("simulazione di una scelta quotidiana") e gli altri come supporto | innovazione |
| QA-012 | Minore | T2-D3 (c); qualità della presentazione | Slide D3: manca una voce esplicita "Come abbiamo evitato l'ambiguità" (etichette [UFF]/[DERIV]/[TERZI], valore atteso accanto alla simulazione, quiz inventato dichiarato). Slide 06 ancora "Opzionale · go/no-go 14:05". Due slide con commento "07" | Aggiungere la riga "Ambiguità evitata", aggiornare il badge di BR-17 dopo la decisione, rinumerare. Durata da verificare nel prossimo giro | innovazione |
| QA-013 | Minore | Coerenza tra ID | `business-requirements.md` usa "T2-E2" per Before/After e "T2-E3" per Risk & Clarity: nella checklist sono T2-D2 e T2-D3 (T2-E2 e T2-E3 sono "cosa evitare") | Correggere i riferimenti | business |
| QA-014 | Minore | Fonti QA; V-11 | `docs/governance/deliverable-register.md` non esiste, ma è citato dal README e indicato come fonte QA | Crearlo (anche minimo) oppure togliere i riferimenti | governance |
| QA-015 | Minore | Refuso | `stato-avanzamento.md` r.74 cita `data/giochi.json` (il file è `giochi.js`) | Correggere | governance |

## 4. Condizioni per il PASS

1. QA-001, QA-002, QA-003 e QA-004 chiusi e committati.
2. QA-006: conferma umana di consegna registrata.
3. Nuovo giro QA, breve, su: README, `git status` pulito, `git remote -v`, test-report e defect-log aggiornati, durata della presentazione (R-10).

Con queste condizioni il verdetto atteso è **PASS con riserva**; la riserva cade se in quel giro vengono chiusi anche QA-005, QA-007 e QA-008.
