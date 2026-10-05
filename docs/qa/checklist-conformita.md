# Checklist di conformità — Hagenthon (Hackathon Agentic Coding)

| Campo | Valore |
|---|---|
| **Stato** | **PRELIMINARE — basata solo sui temi della sfida** |
| Data | 2026-10-05 |
| Owner | Team Quality Assurance |
| Fonte di riferimento | `00_input/hagenthon-temi-sfida-3.html` (fa fede), estratto `00_input/temi-sfida.md` (verificato allineato all'HTML il 2026-10-05) |
| Fonti mancanti | Regolamento generale (criteri di valutazione, consegna, orari, tecnologie): vedi sezione 5 |
| Tema scelto | Non ancora scelto: si applicano la sezione 1 più la sezione del tema scelto |

---

## Come usare la checklist

- **Ambito**: le **Regole comuni** (sezione 1) valgono sempre. Delle sezioni 2–4 si applica **solo quella del tema scelto**. Le altre due diventano N.A. ma servono a verificare che il tema sia uno solo (C-01).
- **Formato dei controlli**: ogni controllo è una domanda con risposta sì/no. "Sì" vuol dire conforme.
- **Riferimenti**: `§` indica la sezione dell'HTML di origine; `r.` indica la riga in `temi-sfida.md`.
- **Prefissi degli ID**: `C` = comune, `Tn-F` = focus/challenge, `Tn-V` = vincolo specifico, `Tn-D` = deliverable specifico, `Tn-E` = cosa evitare.
- **Come è assegnata la gravità** (valutazione QA, da ricalibrare quando arriva il regolamento):
  - **Bloccante**: viola una regola esplicita della sfida (regola generale, formato, vincolo specifico, divieto, focus del tema) oppure manca un deliverable. Anche una voce di "cosa evitare" è Bloccante quando coincide con un vincolo o con il focus.
  - **Maggiore**: è una voce di "cosa evitare" che non coincide con un vincolo, oppure un deliverable presente ma incompleto. Compromette la valutazione ma non viola una regola esplicita.
  - **Minore**: riguarda la forma o la chiarezza e non tocca la sostanza.
  - Per i deliverable (`Tn-D`): **Bloccante** se il deliverable manca, **Maggiore** se manca anche uno solo degli elementi di contenuto attesi.

---

## 1. Regole comuni (valgono per tutti i temi)

| ID | Controllo (sì/no) | Riferimento | Gravità |
|---|---|---|---|
| C-01 | Il team ha scelto **uno e un solo** tema (01, 02 o 03), senza presentare una soluzione "ibrida" che pesca vincoli o deliverable da più temi? | § Intro ("Scegliete uno dei tre temi"), r.5 | Bloccante |
| C-02 | Il tema scelto è dichiarato in modo esplicito e uguale in tutti i deliverable (idea, BR, software/README, pitch/demo)? | § Intro, r.5 (controllo derivato da C-01) | Maggiore |
| C-03 | Il team ha definito un **problema specifico**, cioè circoscritto a un utente, un contesto e un punto di difficoltà precisi, e non un'area generica? | § Intro ("definite un problema specifico"), r.5 | Bloccante |
| C-04 | Esiste un **prototipo** funzionante ed eseguibile, e non solo slide, mockup statici o documentazione? | § Intro ("costruite un prototipo"), r.5 | Bloccante |
| C-05 | È pronta una **demo finale** del prototipo che si può eseguire davanti alla giuria? | § Intro ("preparate la demo finale"), r.5 | Bloccante |
| C-06 | Il team è composto da **esattamente 2 persone**? | § Tema 01/02/03 › La challenge ("In team da 2 persone"), r.6 | Bloccante |
| C-07 | Tutto lo sviluppo del prototipo si è svolto nelle **3 ore di sviluppo** previste, senza codice applicativo preparato prima? (Cosa sia ammesso prima dell'inizio, come template, boilerplate o setup, va confermato con il regolamento: vedi sez. 5.) | § Tema 01/02/03 › La challenge ("avete 3 ore di sviluppo"), r.6 | Bloccante |
| C-08 | La soluzione è stata realizzata **usando strumenti di agentic coding**, e il team può mostrarlo (per esempio log, sessioni, commit)? | § Titolo "Hackathon Agentic Coding" e obiettivo di ogni tema ("Usare strumenti di agentic coding…"), r.1, r.12, r.54, r.92 | Bloccante |
| C-09 | Sono presenti **tutti e 3** i deliverable specifici del tema scelto, con il **nome indicato dal tema** (per esempio "Persona & Barriera", non un titolo generico)? | § Tema scelto › Deliverable specifici | Bloccante |

---

## 2. Tema 01 — Accessibilità Digitale

### 2.1 Focus e challenge

| ID | Controllo (sì/no) | Riferimento | Gravità |
|---|---|---|---|
| T1-F1 | La soluzione **affianca la persona** mentre usa un servizio digitale reale e le permette di **arrivare fino in fondo** al suo obiettivo? Non deve essere un audit tecnico del codice né un controllo formale delle linee guida. | § Tema 01 › Focus e La challenge, r.14–16 | Bloccante |

### 2.2 Vincoli specifici

| ID | Controllo (sì/no) | Riferimento | Gravità |
|---|---|---|---|
| T1-V1 | È descritta una **persona concreta con una difficoltà precisa**, con tutti e tre gli elementi: chi è, cosa sta cercando di fare, dove si blocca oggi? | § Tema 01 › Vincoli specifici n.1, r.28 | Bloccante |
| T1-V2 | La soluzione lavora su un **servizio o contenuto digitale reale o realistico** (sito pubblico, modulo, bolletta, app, procedura online), identificato per nome o per tipo e usato davvero nel prototipo? | § Tema 01 › Vincoli specifici n.2, r.29 | Bloccante |
| T1-V3 | La persona può usare la soluzione **da sola**, senza uno sviluppatore o un tecnico (niente terminale, configurazione manuale, scrittura di prompt o notebook)? | § Tema 01 › Vincoli specifici n.3, r.30 | Bloccante |
| T1-V4 | Confrontando l'informazione originale con quella semplificata su almeno un campione, il **significato resta invariato** (nessuna omissione di obblighi, scadenze, importi o condizioni, nessuna aggiunta inventata)? | § Tema 01 › Vincoli specifici n.4 ("Semplificare senza tradire"), r.31 | Bloccante |
| T1-V5 | La demo mostra il percorso dell'utente **prima e dopo**, cioè cosa non riusciva a fare e cosa riesce a fare adesso? | § Tema 01 › Vincoli specifici n.5, r.32 | Bloccante |
| T1-V6 | È indicato in modo esplicito **dove ha contribuito l'AI** e **dove è servita la revisione umana**? | § Tema 01 › Vincoli specifici n.6, r.33 | Bloccante |

### 2.3 Deliverable specifici

| ID | Controllo (sì/no) | Contenuto atteso | Riferimento | Gravità |
|---|---|---|---|---|
| T1-D1 | Il deliverable **"Persona & Barriera"** è presente e completo? | (a) chi state aiutando; (b) quale barriera incontra; (c) in quale **momento esatto** del suo percorso si ferma. | § Tema 01 › Deliverable 01, r.38 | Bloccante se assente / Maggiore se incompleto |
| T1-D2 | Il deliverable **"Percorso Assistito"** è presente e completo? | Demo del **percorso completo**: parte dal punto di blocco descritto in T1-D1 e arriva al **task portato a termine** con il supporto della soluzione, senza interruzioni o passaggi simulati a voce. | § Tema 01 › Deliverable 02, r.39 | Bloccante se assente / Maggiore se incompleto |
| T1-D3 | Il deliverable **"Autonomia & Limiti"** è presente e completo? | (a) **quanta** autonomia guadagna la persona (meglio se con un dato: passi, tempo, aiuti esterni evitati); (b) cosa è stato semplificato **senza alterarne il senso**; (c) **quali limiti restano**. | § Tema 01 › Deliverable 03, r.40 | Bloccante se assente / Maggiore se incompleto |

### 2.4 Cosa evitare (trasformato in controlli)

| ID | Controllo (sì/no) | Riferimento | Gravità |
|---|---|---|---|
| T1-E1 | Lo strumento è pensato per la **persona con la difficoltà** e non per gli sviluppatori? | § Tema 01 › Cosa evitare n.1, r.43 (coincide con T1-V3) | Bloccante |
| T1-E2 | La soluzione è qualcosa di diverso da un **checker di conformità** che produce solo report tecnici? | § Tema 01 › Cosa evitare n.2, r.44 (coincide con il focus T1-F1) | Bloccante |
| T1-E3 | La soluzione **aiuta a superare** il problema e non si ferma alla diagnosi? | § Tema 01 › Cosa evitare n.3, r.45 (coincide con la challenge T1-F1) | Bloccante |
| T1-E4 | La soluzione è più di un **restyling grafico**, cioè fa guadagnare autonomia in modo dimostrabile (vedi T1-D3)? | § Tema 01 › Cosa evitare n.4, r.46 | Maggiore |
| T1-E5 | Il profilo utente è **specifico** e non generico ("un utente disabile" non è un profilo)? | § Tema 01 › Cosa evitare n.5, r.47 (coincide con T1-V1) | Bloccante |
| T1-E6 | Il team sa **spiegare l'uso dell'AI**, cioè cosa fa ogni componente AI, con quale input e output, e perché è stato scelto? | § Tema 01 › Cosa evitare n.6, r.48 | Maggiore |

---

## 3. Tema 02 — Inclusione Finanziaria

### 3.1 Focus e challenge

| ID | Controllo (sì/no) | Riferimento | Gravità |
|---|---|---|---|
| T2-F1 | La soluzione supporta l'**educazione alla finanza personale di base** (capire i concetti, gestire le finanze quotidiane, prendere decisioni informate) e **non** si presenta come un consulente finanziario AI? | § Tema 02 › Obiettivo, Focus e La challenge, r.54–58 | Bloccante |

### 3.2 Vincoli specifici

| ID | Controllo (sì/no) | Riferimento | Gravità |
|---|---|---|---|
| T2-V1 | È scelto **uno scenario educativo preciso** tra quelli indicati: comprensione di un concetto finanziario di base, gestione del budget personale, lettura di un estratto conto o di una bolletta, comprensione di costi e commissioni, simulazione di una scelta quotidiana di risparmio? (Se l'elenco sia tassativo va chiarito: vedi sez. 5.2.) | § Tema 02 › Vincoli specifici n.1, r.69 | Bloccante |
| T2-V2 | È **dimostrato** un miglioramento tangibile nella comprensione dell'utente o nella sua capacità di gestire le finanze, con un'evidenza prima/dopo e non solo dichiarato? | § Tema 02 › Vincoli specifici n.2, r.70 | Bloccante |
| T2-V3 | La soluzione **non dà mai** raccomandazioni di investimento, consulenza finanziaria personalizzata o indicazioni su cosa comprare, vendere **o scegliere**? Va verificato anche con richieste esplicite dell'utente (per esempio "dove investo?" o "quale rata mi conviene?"): la soluzione deve rifiutare o riportare la conversazione sul piano educativo. | § Tema 02 › Vincoli specifici n.3 ("Vietato…"), r.71 | Bloccante |
| T2-V4 | La soluzione contiene una **capability software concreta** (calcolo, simulazione, tracciamento, parsing, quiz con logica…) e non solo la riscrittura di testi? | § Tema 02 › Vincoli specifici n.4, r.72 | Bloccante |

### 3.3 Deliverable specifici

| ID | Controllo (sì/no) | Contenuto atteso | Riferimento | Gravità |
|---|---|---|---|---|
| T2-D1 | Il deliverable **"User Difficulty Statement"** è presente e completo? | (a) quale difficoltà ha l'utente; (b) in quale processo; (c) perché è rilevante. | § Tema 02 › Deliverable 01, r.77 | Bloccante se assente / Maggiore se incompleto |
| T2-D2 | Il deliverable **"Before / After Simplicity Evidence"** è presente e completo? | Almeno **un esempio** di testo, flusso, schermata o istruzione, con la versione **prima** e la versione **dopo** affiancate, in cui la seconda è resa più chiara. | § Tema 02 › Deliverable 02, r.78 | Bloccante se assente / Maggiore se incompleto |
| T2-D3 | Il deliverable **"Risk & Clarity Note"** è presente e completo? | (a) cosa è stato semplificato; (b) cosa **non** è stato alterato; (c) **come** è stata evitata l'ambiguità. | § Tema 02 › Deliverable 03, r.79 | Bloccante se assente / Maggiore se incompleto |

### 3.4 Cosa evitare (trasformato in controlli)

| ID | Controllo (sì/no) | Riferimento | Gravità |
|---|---|---|---|
| T2-E1 | La soluzione è qualcosa di diverso da un **chatbot generico**, cioè ha un flusso guidato e legato allo scenario di T2-V1? | § Tema 02 › Cosa evitare n.1, r.82 | Maggiore |
| T2-E2 | La soluzione è più di una **pura riscrittura di testi**, cioè contiene logica applicativa? | § Tema 02 › Cosa evitare n.2, r.83 (coincide con T2-V4) | Bloccante |
| T2-E3 | La soluzione è priva di **consigli finanziari**? | § Tema 02 › Cosa evitare n.3, r.84 (coincide con T2-V3) | Bloccante |
| T2-E4 | Le semplificazioni **lasciano invariato il significato originale** (importi, tassi, condizioni, scadenze, definizioni come TAEG o interesse)? | § Tema 02 › Cosa evitare n.4, r.85 | Maggiore (diventa Bloccante se produce un'informazione finanziaria errata) |
| T2-E5 | La demo è **collegata a un processo reale** (per esempio la lettura di un estratto conto o di una bolletta realistici, o un budget mensile)? | § Tema 02 › Cosa evitare n.5, r.86 | Maggiore |

---

## 4. Tema 03 — Educazione Digitale Inclusiva

### 4.1 Focus e challenge

| ID | Controllo (sì/no) | Riferimento | Gravità |
|---|---|---|---|
| T3-F1 | La soluzione supporta un **percorso di apprendimento inclusivo in uno scenario concreto**, per utenti che partono da una situazione di svantaggio, e non è un contenuto formativo generico? | § Tema 03 › Obiettivo, Focus e La challenge, r.92–96 | Bloccante |

### 4.2 Vincoli specifici

| ID | Controllo (sì/no) | Riferimento | Gravità |
|---|---|---|---|
| T3-V1 | È scelto **un profilo utente preciso** tra quelli indicati: persona anziana, persona con bassa alfabetizzazione digitale, con difficoltà linguistiche o con DSA, lavoratore in riqualificazione, nuovo utente di un processo digitale? (Se l'elenco sia tassativo va chiarito: vedi sez. 5.2.) | § Tema 03 › Vincoli specifici n.1, r.107 | Bloccante |
| T3-V2 | Lo **scenario di apprendimento è concreto** (uno strumento o un processo digitale identificato, un task preciso da imparare) e non astratto? | § Tema 03 › Vincoli specifici n.2, r.108 | Bloccante |
| T3-V3 | È dimostrato un miglioramento **misurabile**, con una metrica e un valore prima/dopo, in almeno una di queste dimensioni: comprensione, autonomia, completamento del task, riduzione degli errori, capacità di ripetere un'azione? | § Tema 03 › Vincoli specifici n.3, r.109 | Bloccante |
| T3-V4 | Gli eventuali temi sensibili (sanità clinica, fiscalità personalizzata, ambito legale) **non sono mai presentati come consigli professionali**? La soluzione deve avere disclaimer e limiti di risposta, verificati anche con domande dirette dell'utente. | § Tema 03 › Vincoli specifici n.4 ("Vietato…"), r.110 | Bloccante |
| T3-V5 | La soluzione ha **almeno una capability agentica concreta**, dimostrabile in demo: adattamento dinamico, valutazione della comprensione, percorso personalizzato, rilevamento del blocco o feedback mirato sugli errori? | § Tema 03 › Vincoli specifici n.5, r.111 | Bloccante |

### 4.3 Deliverable specifici

| ID | Controllo (sì/no) | Contenuto atteso | Riferimento | Gravità |
|---|---|---|---|---|
| T3-D1 | Il deliverable **"Learner Profile Statement"** è presente e completo? | (a) chi è l'utente target; (b) quale difficoltà ha; (c) in quale scenario. | § Tema 03 › Deliverable 01, r.116 | Bloccante se assente / Maggiore se incompleto |
| T3-D2 | Il deliverable **"Adaptive Evidence"** è presente e completo? | Un **esempio concreto** di come la soluzione **cambia** in base al livello o al bisogno dell'utente: almeno due livelli o bisogni a confronto, con risposte diverse dalla soluzione. | § Tema 03 › Deliverable 02, r.117 | Bloccante se assente / Maggiore se incompleto |
| T3-D3 | Il deliverable **"Learning Outcome Note"** è presente e completo? | (a) cosa l'utente **sa fare alla fine** che prima non sapeva fare; (b) **come è stato verificato** (metodo di verifica, coerente con la metrica di T3-V3). | § Tema 03 › Deliverable 03, r.118 | Bloccante se assente / Maggiore se incompleto |

### 4.4 Cosa evitare (trasformato in controlli)

| ID | Controllo (sì/no) | Riferimento | Gravità |
|---|---|---|---|
| T3-E1 | La soluzione è qualcosa di diverso da un **generatore generico di lezioni**, cioè è legata al profilo di T3-V1 e allo scenario di T3-V2? | § Tema 03 › Cosa evitare n.1, r.121 (coincide con il focus T3-F1) | Bloccante |
| T3-E2 | Se c'è una componente conversazionale, è inserita in un **percorso strutturato** (tappe, obiettivi, verifiche) e non è un tutor aperto? | § Tema 03 › Cosa evitare n.2, r.122 | Maggiore |
| T3-E3 | La soluzione è più di una **pura traduzione automatica**, cioè aggiunge spiegazione, adattamento o verifica? | § Tema 03 › Cosa evitare n.3, r.123 | Maggiore |
| T3-E4 | La soluzione è **collegata a un utente fragile specifico**? | § Tema 03 › Cosa evitare n.4, r.124 (coincide con T3-V1) | Bloccante |
| T3-E5 | I contenuti sensibili **non sono trattati come consulenza**? | § Tema 03 › Cosa evitare n.5, r.125 (coincide con T3-V4) | Bloccante |

---

## 5. Da completare con il regolamento generale

### 5.1 Aree mancanti (non ricavabili dai temi della sfida)

| # | Area | Cosa serve sapere | Controlli impattati |
|---|---|---|---|
| R-01 | **Criteri di valutazione** | Criteri, pesi, punteggi; se le voci di "cosa evitare" penalizzano o sono solo indicazioni; quali violazioni comportano l'esclusione | Ricalibrazione di tutte le gravità |
| R-02 | **Formato e modalità di consegna** | Cosa si consegna (repo, archivio, link, documento, slide), dove e come (piattaforma, email, form), in che formato vanno i 3 deliverable specifici (documento separato, slide, parte della demo), eventuali limiti di lunghezza | C-04, C-09, Tn-D* |
| R-03 | **Scadenze e orari** | Inizio e fine delle 3 ore, code freeze, termine di consegna, calendario e ordine delle demo | C-07 |
| R-04 | **Tecnologie e strumenti ammessi** | Quali strumenti di agentic coding e modelli AI sono ammessi o obbligatori, API o servizi esterni a pagamento, linguaggi e framework, licenze open source | C-08 |
| R-05 | **Dati ammessi** | Dati reali o sintetici, dati personali e GDPR, uso di servizi o siti pubblici reali (scraping, termini d'uso), documenti reali come bollette ed estratti conto | T1-V2, T2-E5, T3-V2 |
| R-06 | **Durata e formato della demo** | Minuti disponibili, demo live o registrata, slide ammesse, Q&A, chi presenta | C-05, T1-V5, T1-D2 |
| R-07 | **Naming** | Nome del team e del progetto, convenzioni per file, repository e cartelle di consegna | C-09, pacchetto di rilascio |
| R-08 | **Lavoro preparatorio** | Cosa è ammesso prima dell'inizio delle 3 ore (template, boilerplate, setup ambiente, ricerca, design) | C-07 |
| R-09 | **Dichiarazione dell'uso dell'AI** | Se è richiesta per tutti i temi (oggi è esplicita solo nel Tema 01, T1-V6) e in quale forma | T1-V6, T1-E6, C-08 |

### 5.2 Ambiguità nei temi della sfida (da chiarire con gli organizzatori o con il regolamento)

| # | Punto | Ambiguità | Interpretazione prudenziale adottata da QA |
|---|---|---|---|
| A-01 | T2-V1, scenari educativi | L'elenco degli scenari è tassativo o indicativo? | Scegliere uno dei 5 scenari elencati |
| A-02 | T3-V1, profili utente | L'elenco dei profili è tassativo o indicativo? | Scegliere uno dei 6 profili elencati |
| A-03 | T3-V5, "capability agentica" | Basta una logica condizionale statica (albero di quiz) o serve un comportamento adattivo a runtime? | Mostrare un adattamento che dipende dalle risposte o dal comportamento reale dell'utente |
| A-04 | C-01, sovrapposizioni tra temi | Alcuni casi stanno in più temi (per esempio "bolletta" in T1-V2 e T2-V1, "anziano" in T1 e T3) | Dichiarare un solo tema e soddisfare **solo** i vincoli e i deliverable di quel tema, con i suoi nomi |
| A-05 | Deliverable vs demo | I deliverable specifici sono documenti separati o possono coincidere con parti della demo (per esempio T1-D2 "è" la demo)? | Produrre sempre un artefatto scritto per ogni deliverable, oltre alla demo |

> Quando arriva il regolamento generale: aggiornare lo stato del documento, aggiungere le sezioni relative a R-01…R-09, chiudere le ambiguità A-01…A-05 e ricalibrare le gravità secondo i criteri ufficiali.
