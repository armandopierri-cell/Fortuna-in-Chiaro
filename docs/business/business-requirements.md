# Business Requirements — "Fortuna in Chiaro"

> Fonte: `docs/idea/idea-selezionata.md` (perimetro MVP) e `docs/idea/ricerca-azzardo.md` §0-§3 (numeri, con affidabilità dichiarata).
> Vincoli di tema: `00_input/temi-sfida.md`, Tema 02 — Inclusione Finanziaria (T2-Vx vincoli specifici, T2-Ex deliverable).
> MoSCoW: Must (indispensabile per il freeze), Should (importante ma rinviabile), Could (se avanza tempo), Won't (fuori perimetro).

---

## BR-01 — Benvenuto e tono
**Descrizione**: la schermata iniziale presenta lo strumento ("Quanto ti costa sperare?") con tono educativo e non giudicante, senza riferimenti a marchi commerciali di gioco.
**Motivazione di business**: prima impressione corretta sul tema delicato; evita che l'utente si senta giudicato e abbandoni.
**Priorità**: Must.
**Vincolo di tema**: T2-V3 (vietato dare consigli/giudizi), deliverable T2-E1 (User Difficulty Statement).

**Criteri di accettazione**
- Dato che l'utente apre `app/index.html`, quando la pagina si carica, allora è visibile un titolo/sottotitolo che richiama "quanto costa sperare" senza nominare marchi commerciali di gioco.
- Dato il testo di benvenuto, quando viene letto, allora non contiene imperativi di giudizio ("non dovresti", "è sbagliato") né consigli ("dovresti smettere").

---

## BR-02 — Quiz prima (3 domande)
**Descrizione**: prima di ogni altra interazione, l'utente risponde a 3 domande a scelta multipla: (1) spesa annua con 10€/giorno, (2) probabilità di vincere il premio massimo di un biglietto, (3) se un numero "ritardatario" ha più probabilità di uscire. Il punteggio viene registrato per il confronto finale.
**Motivazione di business**: misura la comprensione "prima", necessaria per dimostrare il miglioramento (T2-V2, Before/After).
**Priorità**: Must.
**Vincolo di tema**: T2-V2 (miglioramento misurabile), T2-E2 (Before/After Simplicity Evidence).

**Criteri di accettazione**
- Dato l'utente all'inizio del percorso, quando visualizza il quiz, allora vede esattamente 3 domande a scelta multipla, una delle quali chiede quanto si spende in un anno giocando 10€/giorno con risposta corretta attesa **3.650 €**.
- Dato che l'utente risponde alle 3 domande, quando conferma, allora l'app salva un punteggio (0-3) senza inviarlo fuori dal browser (vedi BR-12).
- Dato il quiz completato, quando l'utente prosegue, allora il punteggio "prima" resta disponibile per il cruscotto finale (BR-07).

---

## BR-03 — La mia abitudine (scelta giochi e frequenza → spesa giorno/mese/anno)
**Descrizione**: l'utente sceglie uno o più giochi (lotteria istantanea da 5€, da 10€ "da fonte" — **segnalato**: nessuna tabella ufficiale reperita per il taglio da 10€, vedi `ricerca-azzardo.md` §1 nota finale e §7 — oppure lotto) e la frequenza (volte al giorno/settimana); l'app calcola spesa giornaliera, mensile, annuale.
**Motivazione di business**: rende concreta e personale la spesa di Salvatore, base per la simulazione.
**Priorità**: Must.
**Vincolo di tema**: T2-V1 (simulazione di una scelta quotidiana), T2-E4 (nessun marchio commerciale, struttura premi ufficiale citata come fonte).

**Criteri di accettazione**
- Dato che l'utente seleziona "lotteria istantanea da 5€" con frequenza 2 volte al giorno, quando l'app calcola, allora mostra spesa giornaliera **10 €**, mensile **≈ 304,17 €** (10×365/12), annuale **3.650 €** (10×365).
- Dato un'altra combinazione (es. 1 biglietto da 5€ al giorno), quando calcolata, allora la spesa annua è **1.825 €** (5×365), verificabile a mano.
- Dato il biglietto da 10€ non ancora coperto da una tabella ufficiale completa, quando l'app lo propone, allora il testo dichiara esplicitamente "stima, non tabella ufficiale completa" (coerente con la nota in `ricerca-azzardo.md` §1).
- Dato nessun gioco con marchio commerciale reale, quando l'utente vede le opzioni, allora i nomi sono generici ("lotteria istantanea modello A/B") con ADM citata come fonte della struttura premi.

---

## BR-04 — Un anno in 10 secondi (simulazione con seme fisso, contatori, valore atteso esatto, "N anni per il premio massimo")
**Descrizione**: simulazione animata di un anno di gioco (365 giorni) con generatore pseudo-casuale a seme fisso, basata sulle probabilità ufficiali del gioco scelto. Mostra contatori "speso / vinto / perso" aggiornati in tempo reale, il valore atteso esatto calcolato matematicamente (non dalla simulazione), e il messaggio "per vincere il premio massimo una volta, in media, dovresti giocare per N anni".
**Motivazione di business**: è il cuore dell'evidenza Before/After: rende visibile e viscerale un concetto altrimenti astratto.
**Priorità**: Must.
**Vincolo di tema**: T2-V1, T2-V2, T2-E2; rischio "simulazione percepita come truccata" mitigato dal valore atteso esatto accanto (vedi Risk & Clarity Note, T2-E3).

**Criteri di accettazione**
- Dato il default Salvatore — "lotteria istantanea modello A" (payout 71,2% arrotondato, fonte `ricerca-azzardo.md` §1.1), 2 biglietti al giorno = 10 €/giorno, 365 giorni — quando la simulazione gira con seme fisso, allora il valore atteso esatto mostrato, calcolato sulla tabella premi completa del modello A (non sul payout arrotondato), è **perdita attesa ≈ 1.051 € (tolleranza ±1 €, arrotondamento dichiarato)** — valore esatto 1.050,83 €/anno; 1.051,20 € (3.650 € × 28,8%) è solo l'approssimazione ottenuta dal payout arrotondato al decimale — calcolato analiticamente e non dal campionamento casuale.
- Dato lo stesso default (2 biglietti/giorno = 730 biglietti/anno), quando viene mostrato "N anni per il premio massimo", allora il numero è calcolato come 1 / (probabilità vincita premio massimo × biglietti giocati all'anno); con probabilità 1/12.480.000 (fonte §1.1 [UFF]) e 730 biglietti/anno, il risultato è **N ≈ 17.096 anni** [DERIV, calcolo nostro, coerente con `docs/business/analisi-funzionale.md` §4 — da segnalare come stima derivata, non dato di fonte diretta].
- Dato che la modalità demo è attiva (BR-10), quando si lancia la simulazione, allora il seme è fisso e il risultato (contatori finali) è identico ad ogni esecuzione in demo.
- Dato la simulazione in corso, quando l'utente la osserva, allora i contatori "speso/vinto/perso" si aggiornano progressivamente senza bloccare l'interfaccia per più di ~10-15 secondi totali.

---

## BR-05 — Capire i numeri (3 schede con mini-esperimento, incluso il simulatore dei ritardatari)
**Descrizione**: 3 schede brevi con mini-esperimento interattivo: probabilità ("1 su N" reso visibile), valore atteso (perché "in media" si perde), estrazioni indipendenti (simulatore dei "ritardatari": la probabilità resta uguale ad ogni estrazione).
**Motivazione di business**: trasferisce i concetti statistici di base richiesti dal Tema 02 (comprensione di un concetto finanziario/di rischio di base).
**Priorità**: Must.
**Vincolo di tema**: Tema 02 vincolo 1 (scenario educativo preciso: comprensione di un concetto di base).

**Criteri di accettazione**
- Dato la scheda "probabilità", quando l'utente la apre, allora vede una rappresentazione visiva di "1 su 12.480.000" (es. proporzione, griglia) riferita al premio massimo del modello A (fonte §1.1).
- Dato la scheda "estrazioni indipendenti", quando l'utente lancia il simulatore dei ritardatari per un numero "in ritardo da 100 estrazioni", allora la probabilità mostrata di uscita alla prossima estrazione resta uguale a quella di un numero appena uscito (principio di indipendenza, `ricerca-azzardo.md` §2 — dichiarato come principio matematico standard, non attribuito a uno studio specifico).
- Dato la scheda "valore atteso", quando l'utente interagisce, allora viene mostrato un esempio numerico (es. "su 100 € giocati nel modello A, in media ne tornano 71,2 €, cioè ne restano persi 28,8 €", fonte §1.1).

---

## BR-06 — Quiz dopo + domanda di trasferimento
**Descrizione**: le stesse 3 domande del quiz iniziale, più 1 domanda di trasferimento su un biglietto mai visto in precedenza ("biglietto da 2€ con payout X%: quanto perdi in media su 100 giocate?"); confronto punteggio prima/dopo.
**Motivazione di business**: dimostra il miglioramento misurabile richiesto dal Tema 02 (vincolo 2) e dall'idea (T2-V2).
**Priorità**: Must.
**Vincolo di tema**: Tema 02 vincolo 2 (miglioramento tangibile dimostrato), T2-V2.

**Criteri di accettazione**
- Dato l'utente ha completato le schermate precedenti, quando arriva al quiz finale, allora rivede le stesse 3 domande iniziali (stesso testo, ordine eventualmente mescolato) più 1 domanda di trasferimento su un biglietto con parametri diversi da quelli mostrati prima.
- Dato il biglietto didattico da 2€ con payout 70% (fonte: `app/data/quiz.js`, domanda q4 — esempio inventato per l'esercizio, dichiarato come tale, non un gioco reale, nessun dato da `ricerca-azzardo.md`), quando l'utente risponde "quanto perdi in media su 100 giocate", allora l'app verifica il calcolo (100 × 2€ × (1 − 70%) = **60 €**) e segna corretto/errato.
- Dato il quiz dopo completato, quando il punteggio viene calcolato, allora è confrontabile 1:1 con il punteggio "prima" (stessa scala 0-3 sulle prime 3 domande).

---

## BR-07 — Cruscotto prima/dopo
**Descrizione**: schermata finale che mostra affiancati il punteggio quiz prima e dopo, l'esito della domanda di trasferimento, e un riepilogo dei numeri chiave della simulazione (spesa annua, perdita attesa, N anni per il premio massimo).
**Motivazione di business**: è l'evidenza sintetica richiesta dal deliverable "Before/After Simplicity Evidence" (T2-E2) e dalla demo.
**Priorità**: Must.
**Vincolo di tema**: T2-E2.

**Criteri di accettazione**
- Dato i due punteggi quiz registrati, quando l'utente arriva al cruscotto, allora vede entrambi affiancati (es. "prima: 1/3 — dopo: 3/3").
- Dato l'esito della domanda di trasferimento, quando mostrato, allora indica esplicitamente se l'utente ha calcolato correttamente la perdita attesa del biglietto nuovo.
- Dato i numeri della simulazione (BR-04), quando il cruscotto li riepiloga, allora sono identici (stessi valori) a quelli mostrati nella schermata di simulazione, senza ricalcoli divergenti.

---

## BR-08 — Sempre visibili: disclaimer e numero verde ISS
**Descrizione**: in ogni schermata restano visibili il disclaimer "Strumento educativo: mostra numeri e significati, non dà consigli" e il numero verde nazionale ISS per il gioco d'azzardo.
**Motivazione di business**: obbligo del vincolo di tema (T2-V3) e responsabilità verso un pubblico fragile.
**Priorità**: Must.
**Vincolo di tema**: T2-V3 (vietato dare consigli), responsabilità verso persone con gioco problematico.

**Criteri di accettazione**
- Dato qualunque schermata dell'app (benvenuto, quiz, abitudine, simulazione, schede, cruscotto), quando l'utente la visualizza, allora il disclaimer "Strumento educativo: mostra numeri e significati, non dà consigli" è presente e leggibile (non nascosto in un menu).
- Dato qualunque schermata, quando l'utente la visualizza, allora il numero verde **800 55 88 22** (ISS, TVNGA, fonte §6 [UFF]) è visibile, con indicazione "gratuito, anonimo, lun-ven 10:00-16:00".

---

## BR-09 — Dati ufficiali con fonte e arrotondamenti dichiarati
**Descrizione**: tutti i numeri usati nell'app (probabilità, payout, premi, spesa) provengono da `ricerca-azzardo.md` con fonte citata o sono esplicitamente dichiarati come stima/esempio didattico; eventuali arrotondamenti sono indicati.
**Motivazione di business**: vincolo esplicito dell'idea (T2-E4: probabilità e premi identici alla fonte ufficiale) e credibilità verso la giuria.
**Priorità**: Must.
**Vincolo di tema**: T2-E4, Risk & Clarity Note (T2-E3).

**Criteri di accettazione**
- Dato un numero mostrato nell'app (es. payout 71,2%, probabilità 1/12.480.000), quando l'utente verifica in `ricerca-azzardo.md`, allora il valore coincide con quello di fonte (§1.1/§1.2), senza alterazioni.
- Dato un numero arrotondato (es. mensile 304,17€ invece di 304,1666...€), quando mostrato, allora è presente un'indicazione di arrotondamento (anche solo nel numero di decimali coerente).
- Dato un numero non presente in `ricerca-azzardo.md` (es. tabella del biglietto da 10€, payout del biglietto di trasferimento da 2€), quando usato nell'app, allora è esplicitamente etichettato come "esempio/stima, non dato ufficiale" e non presentato come fatto verificato.

---

## BR-10 — Modalità demo (seme fisso, animazione rapida)
**Descrizione**: una modalità attivabile che forza il seme pseudo-casuale a un valore fisso e accelera l'animazione della simulazione, per garantire una demo ripetibile in ~2'30".
**Motivazione di business**: la demo dal vivo deve essere affidabile e rientrare nel tempo assegnato (regolamento).
**Priorità**: Should — utile per la demo ma l'app può funzionare (in modo più lento/variabile) anche senza; se il tempo manca, si implementa il seme fisso come default unico piuttosto che un vero toggle.
**Vincolo di tema**: supporta la demo richiesta dal regolamento, non è un vincolo di tema diretto.

**Criteri di accettazione**
- Dato che la modalità demo è attiva, quando la simulazione (BR-04) viene eseguita più volte di seguito, allora produce sempre lo stesso identico risultato finale (stesso seme).
- Dato la modalità demo attiva, quando la simulazione gira, allora l'animazione completa dura indicativamente 10 secondi o meno.

---

## BR-11 — Nessun consiglio né giudizio (T2-V3)
**Descrizione**: in nessun punto dell'app compaiono frasi che consigliano di smettere, giocare meno, o che esprimono un giudizio di valore sulla scelta dell'utente; solo numeri e significati.
**Motivazione di business**: vincolo esplicito e non negoziabile del tema e dell'idea; la violazione squalifica la soluzione.
**Priorità**: Must.
**Vincolo di tema**: T2-V3 (esplicito), Tema 02 vincolo 3 ("vietato fornire raccomandazioni... o indicazioni su cosa fare").

**Criteri di accettazione**
- Dato tutti i testi dell'app (benvenuto, schede, quiz, cruscotto), quando vengono letti integralmente, allora non contengono imperativi o consigli del tipo "dovresti smettere", "gioca meno", "non conviene", "ti consiglio di...".
- Dato il disclaimer (BR-08), quando confrontato con il resto dei testi, allora è l'unico riferimento esplicito a un comportamento esterno (il numero verde), presentato come informazione e non come raccomandazione.

---

## BR-12 — Privacy: nessun dato fuori dal browser
**Descrizione**: nessun dato inserito dall'utente (scelte di gioco, risposte al quiz, punteggi) viene inviato a un server esterno o salvato fuori dal browser (localStorage/sessionStorage locali ammessi, nessuna chiamata di rete con dati personali).
**Motivazione di business**: vincolo esplicito dell'idea ("nessun dato personale salvato fuori dal browser") e requisito etico su un tema sensibile.
**Priorità**: Must.
**Vincolo di tema**: vincolo esplicito dell'idea (sezione "Vincoli e guardrail"), coerente con "zero token a runtime / nessuna chiave API nel browser".

**Criteri di accettazione**
- Dato l'utente che compila quiz e abitudine, quando si ispeziona il traffico di rete del browser (devtools), allora non risultano richieste HTTP in uscita contenenti le risposte o le scelte dell'utente.
- Dato il codice dell'app, quando ispezionato, allora non contiene chiavi API né chiamate a servizi esterni per elaborare i dati dell'utente (logica interamente deterministica/locale, coerente con la Strategia AI dell'idea).
