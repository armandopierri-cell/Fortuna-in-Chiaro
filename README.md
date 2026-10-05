# Fortuna in Chiaro — Hackathon Hagenthon

## Cos'è "Fortuna in Chiaro"

Un simulatore educativo sul gioco d'azzardo che mostra, in 7 schermate interattive, quanto costa davvero un'abitudine di gioco quotidiana: un anno simulato in 10 secondi con le probabilità ufficiali ADM, il valore atteso esatto calcolato dalle tabelle premi, e i concetti per capirlo da soli (probabilità, estrazioni indipendenti, bias dei ritardatari). Non dà consigli né giudizi: mostra numeri e significati. Demo e documentazione complete della ricerca in `docs/idea/`.

**Tema**: Inclusione Finanziaria (T2-V1).
**Persona**: Salvatore, 52 anni, autista, ~10 €/giorno di gioco, non sa quanto spende in un anno né le vere probabilità di vincere.

---

## Come aprire la demo

### Nel browser
- **App standard**: doppio click su `app/index.html`
- **Demo (seme fisso, animazione rapida)**: doppio click su `app/index.html?demo=1`, oppure aprire e usare il toggle "Modalità demo"
- **Con BR-17 "Pausa e Conto"** (bottone educativo prima della scelta): `app/index.html?demo=1&pausa=1`

### Da PowerShell
```powershell
Start-Process msedge ("file:///" + ((Resolve-Path app\index.html).Path -replace '\\','/') + "?demo=1")
```

---

## Presentazione
Apri `presentation/index.html` per il pitch di 5 minuti (brand Accenture, inclusa demo end-to-end di ~2'30" e spiegazione della struttura agentica con evidenza del guardrail L4).

---

## Struttura del repository

```
app/                          Soluzione
├── index.html                Punto d'ingresso (senza build, senza node_modules)
├── style.css                 Stili (tema + accessibilità)
├── src/
│   ├── motore.js            Modulo di calcolo (spesa, valore atteso, probabilità)
│   ├── ui.js                Logica dell'interfaccia (6 schermate) + leve L1–L3
│   ├── quiz.js              Quiz prima/dopo (3 domande + trasferimento)
│   ├── data/
│   │   └── giochi.json      Giochi con struttura premi ufficiale (fonte ADM)
│   └── simulatore.js        Generatore casuale con seme fisso (riproducibile)
├── tests/
│   ├── tests.html           Suite di test (40+ test unitari)
│   ├── run-tests.ps1        Eseguie tests.html in Edge headless
│   └── test-data.js         Fixture per test
└── README.md                 Dettagli tecnici e prerequisiti

agents/                       Struttura agentica (copia di .claude/ con sync.ps1)
├── governance/              Piano, tempi, deliverable, stato avanzamento
├── innovazione/             Idea, pitch, presentazione
├── business/                BR, test di accettazione
├── sviluppo/                Architettura e codice
└── qa/                       Conformità al regolamento e verdetti PASS/FAIL

presentation/
└── index.html               Slide Accenture (5 min + demo)

docs/
├── governance/
│   ├── piano-progetto.md    Stream di lavoro, milestone, owner per ogni attività
│   ├── deliverable-register.md  Elenco deliverable con stato (Da fare / In corso / In review / Approvato / Rilasciato)
│   ├── stato-avanzamento.md Aggiornato a ogni checkpoint: fatto, decisioni, rischi, prossimi passi
│   └── release-log.md       Cosa rilasciato, quando, dove
├── idea/
│   ├── idea-selezionata.md  Scelta, persona, caso d'uso, leve di innovazione (L1–L4), CR
│   ├── idee-valutate.md     Scartate con motivazione (tracciabilità di decisione)
│   ├── ricerca-neet.md      Dati NEET
│   ├── ricerca-azzardo.md   Numeri ufficiali (ADM) e tabelle premi
│   └── valore-checkpoint.md Stima valore al checkpoint 14:05
├── business/
│   ├── BR-01..BR-17.md      Business Requirements (funzionali e non, BR-17 condizionato)
│   ├── analisi-funzionale.md Casi d'uso mappati a BR
│   ├── analisi-tecnica.md   Componenti (motore, UI, quiz) e contratto API
│   ├── test-accettazione.md Test per stanza e test end-to-end
│   └── defect-log.md        Difetti trovati, stato, owner
└── qa/
    ├── checklist-conformita.md  Conformità al regolamento (00_input/regolamento.md)
    ├── evidenze-hook-t2.md      Scansione statica testi (guardrail L4): verdetto, log
    ├── verdetto-*.md            Risultati test per ogni build
    └── [elenco deliverable]     Tracciabilità verso R-09, R-11 (demo + presentazione)

00_input/              [ESCLUSO DA GIT, protetto da hook guard.ps1]
├── regolamento.md     Tempi, consegna, criteri di valutazione
└── temi-sfida.md      Temi, vincoli, deliverable per tema

kb/                    [ESCLUSO DA GIT, protetto da hook guard.ps1]

.claude/               [Locale, non in git]
├── agents/            Prompt e config di ruoli
├── skills/presentazioni-accenture/  Template e stili brand Accenture
└── hooks/
    ├── guard.ps1                    Blocca scrittura in 00_input/, KB e API key
    ├── guardrail-t2.ps1            Scansione statica testi (L4 Tema 02): divieto "conviene", "smetti", ecc.
    └── post-edit-tests.ps1         Dopo ogni modifica in app/, esegue test e riporta fallimenti

.gitignore            00_input/, kb/, node_modules/, .claude/, venduto/, *.pyc
```

---

## Struttura agentica e pattern di validazione

### Team agentico (fase sviluppo)
| Agente | Ruolo | Scrive in | Modello |
|---|---|---|---|
| `governance` | Piano, tempi, deliverable, push finale | `docs/governance/` | Sonnet |
| `innovazione` | Idea, pitch, presentazione | `docs/idea/`, `presentation/` | Opus |
| `business` | BR, test di accettazione | `docs/business/` | Sonnet |
| `sviluppo` | Architettura e codice | `app/` | inherit |
| `qa` | Conformità al regolamento, verdetto PASS/FAIL | `docs/qa/` | Opus |

**Orchestratore**: sessione principale, fa da coordinatore e prende decisioni su scope/tagli.

### Rules (source of truth)
- **`CLAUDE.md`** (questo file, protetto da hook): ruoli, flusso, regole di scambio tra agenti.
- **Prompt dei ruoli**: in `.claude/agents/`, usati dall'agente orchestratore per lanciare ogni sessione.

### Skills
- **`presentazioni-accenture/`** (`.claude/skills/`): template e stili per slide aziendali.

### Hooks (PreToolUse e PostToolUse)
- **`guard.ps1`**: blocca la scrittura in `00_input/`, `kb/` e contenuti con API key.
- **`guardrail-t2.ps1`**: scansione statica degli articoli HTML in `app/` per rilevare testi vietati dal Tema 02 (non dà consigli: "conviene", "smetti", "gioca meno", "dovresti"). Verdetto e log in `docs/qa/evidenze-hook-t2.md`. **Eseguito a ogni modifica di `app/`**.
- **`post-edit-tests.ps1`**: dopo ogni modifica di `app/`, esegue automaticamente `app/tests/run-tests.ps1` e riporta i fallimenti all'agente sviluppo.

---

## Stanze agile

Parallelo su 2 stream:

### Stanza Motore (Sviluppo + Business)
- Proprietario: sviluppo (codice) + business (test)
- Artefatti: `data/giochi.js`, `src/motore.js`, `src/simulatore.js`, test unitari
- Contratto API: funzioni esportate (calcolo spesa, valore atteso, simulazione con seme fisso)
- Criterio "fatto": 41+ test verdi, test di accettazione non blocca Esperienza

### Stanza Esperienza (UI + Quiz + Cruscotto)
- Proprietario: sviluppo (layout, interazione)
- Artefatti: `index.html`, `style.css`, `src/ui.js`, `src/quiz.js`
- Dipendenza: Motore (API del motore)
- Criterio "fatto": 7 schermate, quiz 3+1, cruscotto prima/dopo, leve L1–L3 integrate, CR1 applicata, CR2 se approvato

---

## Leve di innovazione (già integrate)

| Leva | Cosa fa | BR proposto |
|---|---|---|
| **L1 — Le vincite che non sono vincite** | Quando un biglietto simulato vince, mostra il saldo reale: se è il rimborso, "HAI VINTO 5 €" diventa "guadagno 0 €". Riepilogo: % di vincite che erano solo rimborso | **BR-13** |
| **L2 — Dalla parte del banco** | Tasto che mostra 10.000 Salvatori per un anno: quanti in attivo, quanto incassa il banco. Scala Italia: 21,5 miliardi persi nel 2024 | **BR-14** |
| **L3 — Probabilità in cose fisiche** | "1 su N" tradotto in scala tangibile: "208 stadi da 60.000 posti pieni, una sola persona vince"; "2 biglietti al giorno, una vincita del massimo ogni ~17.000 anni" | **BR-15** |
| **L4 — Hook guardrail del Tema 02** | PreToolUse e PostToolUse bloccano e scansionano i testi di `app/` per rilevare formule vietate (consiglio, giudizio); verdetto automatico e riproducibile nella presentazione | Rafforza **BR-11** |

**Change Request approvate:**
- **CR1 — "Vuoi parlarne con qualcuno?"**: soglia di spesa mensile scelta dall'utente → numero verde ISS 800 55 88 22 e messaggio a persona di fiducia (inviato solo dall'utente). **BR-16 (Should)**.
- **CR2 — "Pausa e Conto"**: bottone educativo "Sto per comprare un biglietto" che mostra i numeri del biglietto scelto per 30 secondi (versione educativa del craving). **BR-17 (Could)**, go/no-go al checkpoint 14:05.

---

## Uso consapevole dei token

**Modello per ruolo:**
- **Governance**: Sonnet (piano, coordinamento)
- **Innovazione**: Opus (creatività e pitch)
- **Business**: Sonnet (BR, test)
- **Sviluppo**: inherit (misto)
- **QA**: Opus (valutazione critica)

**Complessità della soluzione:**
- **Zero token a runtime**: l'app è logica deterministica su dati ufficiali (giochi.json con probabilità e premi ADM). Nessuna API key nel browser, nessun modello LLM richiesto alla consegna.
- **In sviluppo (fase hackathon)**: Claude Code per ricerca, codice generativo, testi, test; verifica umana su numeri, testi e tono.
- **Ripiego offline**: se non c'è rete, l'app funziona normalmente (tutto è locale).

---

## Test

```powershell
powershell -ExecutionPolicy Bypass -File app\tests\run-tests.ps1
```

Esegue `app/tests/tests.html` in Edge headless; exit code 0 = tutti i test passano, diverso da 0 = almeno uno fallisce. In alternativa si apre `app/tests/tests.html` nel browser per esaminare i risultati interattivamente.

**Test automatici** (dopo ogni modifica di `app/`): lo script `post-edit-tests.ps1` (hook PostToolUse) esegue i test e riporta all'agente gli eventuali fallimenti.

---

## Conformità al regolamento (checklist)

Leggi `docs/qa/checklist-conformita.md` per il dettaglio. Punti critici:
- ✅ Repository pubblico con app/, agents/, presentation/, docs/, README.md
- ✅ 00_input/ e kb/ non nel repository (hook guard.ps1)
- ✅ Nessuna API key nei file (hook guard.ps1)
- ✅ agents/ allineata a .claude/ (esegui `agents/sync.ps1` prima del push)
- ✅ Verdetto QA **PASS** su versione corrente prima del push (docs/qa/)
- ✅ Deliverable dei tema (R-09): dentro presentazione e demo, tracciati in docs/qa/
- ✅ Push entro le **15:30** (deroga concessa dai docenti; il regolamento riporta 15:00)

---

## Checkpoint finale (14:05) e consegna

1. **Demo end-to-end** con utente: tutte le 7 schermate, leve L1–L3, CR1, CR2 (se approvato).
2. **Stima del valore** (docs/idea/valore-checkpoint.md): miglioramento atteso sulla persona Salvatore.
3. **Go/no-go su CR2** (BR-17 "Pausa e Conto"): è approvata?
4. **Verifica umana** registrata in `docs/governance/stato-avanzamento.md`.
5. **QA finale**: verdetto PASS su `docs/qa/`.
6. **Sincronizzazione agents/** con `.claude/` (`agents/sync.ps1`).
7. **Push entro le 15:30**.

---

## Domande frequenti

### Come si lanciano i test?
```powershell
powershell -ExecutionPolicy Bypass -File app\tests\run-tests.ps1
```

### Dove stanno i dati dei giochi?
In `app/src/data/giochi.json`, con fonte ADM (Amministrazione dei Monopoli e delle Dogane) e tabelle premi complete.

### Come si riproduce la demo?
La simulazione usa un generatore pseudo-casuale con seme fisso. Con `?demo=1` o il toggle "Modalità demo", il seme è costante e i risultati sono riproducibili.

### Cosa succede se tocco "Pausa e Conto"?
Se BR-17 è approvato, per 30 secondi (10 secondi in demo) l'app mostra i numeri del biglietto scelto (perdita media attesa, quota di rimborsi, probabilità del massimo); poi "La scelta è tua" (non è un consiglio).

### Quali dati vengono salvati?
**Nessuno**: tutto resta in memoria nella pagina e si perde alla chiusura. Non c'è backend, non c'è account, non c'è tracciamento.

### Il hook L4 cosa blocca?
Scansiona i testi HTML di `app/` alla ricerca di formule vietate dal Tema 02:
- "conviene", "non conviene", "meglio"
- "smetti", "prova a smettere", "smetti di giocare"
- "gioca meno", "dovresti giocare meno/smettere"
- Elenco completo in `docs/qa/evidenze-hook-t2.md`

Se ne trova una, il hook blocca la modifica. Se passano tutti i controlli, il verdetto è registrato nel log.

---

**Ultimo aggiornamento:** 05/10/2026, 14:10 — Governance  
**Congelato**: 15:30 del 05/10/2026
