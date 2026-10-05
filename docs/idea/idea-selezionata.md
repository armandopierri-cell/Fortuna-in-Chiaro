# Idea selezionata

> **PROPOSTA — in attesa di conferma utente.**
> La raccomandazione si basa su **criteri proxy** (vedi `idee-valutate.md`) perché regolamento e criteri ufficiali non sono ancora disponibili. Va riconfermata quando arriveranno.

---

## Raccomandazione: 3A — "Palestra Digitale" (Tema 03, Educazione Digitale Inclusiva) — 29/30

### Il concept in una frase

Una palestra sicura dove **Teresa, 77 anni**, impara a comprare da sola il biglietto del treno su una replica realistica dell'app. Un coach si accorge di dove si blocca, la aiuta in modo graduato e toglie gli aiuti man mano che impara, finché non ce la fa senza nessuno.

### Value proposition

- **Per Teresa:** smette di dipendere dal nipote per un'azione che fa ogni mese e si allena senza paura di sbagliare o di pagare due volte.
- **Per chi la aiuta (famiglia, volontari, sportelli di facilitazione digitale):** vede su cosa si blocca la persona e quanto è migliorata, senza doverle stare accanto.
- **Differenziazione:** non è un tutorial video né un chatbot. Il sistema **osserva le azioni**, **decide** quale aiuto dare e **misura** l'apprendimento. L'intelligenza è nella logica del percorso, non in un testo generato.

### Perché questa

1. **Copre tutti i vincoli del tema in modo dimostrabile.** Profilo preciso (anziana con bassa alfabetizzazione digitale), scenario concreto, **miglioramento misurabile** su 4 dimensioni (completamento, errori, autonomia, ripetibilità) e **tutte e cinque** le capability agentiche elencate nel tema.
2. **Ha la demo più forte e meno rischiosa.** Il prima/dopo è visibile sul cruscotto con numeri prodotti dal sistema stesso. C'è un **replay** di sessioni registrate come rete di sicurezza.
3. **Non dipende da un LLM a runtime.** Il nucleo è a regole: se le API non sono consentite, l'idea resta intatta.
4. **Rischio di contenuto basso.** Nessun tema sensibile (sanità, fisco, legale), nessun consiglio, pagamento solo simulato.
5. **Si adatta bene all'agentic coding.** È tanta interfaccia + logica ben definita: il tipo di lavoro che Claude Code accelera di più. Due persone possono dividerselo bene (flusso app / motore coach + cruscotto).

### Perimetro MVP

**Dentro (3 ore):**
- Replica senza marchi del flusso di acquisto ("TrenoFacile"): 5–6 schermate (tratta → data/ora → scelta treno → tariffa → riepilogo e passeggero → pagamento simulato → biglietto).
- Tracciamento degli eventi per ogni passo: tocchi fuori dal punto giusto, inattività, ritorni indietro, errori nei campi, tempo per passo.
- **Motore del coach a regole:** soglie per passo che dicono quando c'è un blocco. 3 livelli di aiuto (evidenzia / spiega / mostra), con testi semplici scritti e rivisti per ogni passo.
- **Adattamento tra tentativi:** il livello di partenza dell'aiuto per ogni passo dipende da come è andato il tentativo precedente (fading).
- **Modalità Allenamento** (con coach) e **Prova da sola** (senza aiuti, solo misurata).
- **Cruscotto** dei tentativi: completato sì/no, errori, aiuti usati, tempo, passi "imparati".
- **Replay** di 3 sessioni registrate (prima / allenamento / prova) per una demo sicura.
- Interfaccia leggibile: caratteri grandi, alto contrasto, bersagli ampi.

**Fuori (esplicitamente):**
- Integrazione con app o servizi ferroviari reali, prezzi e orari reali.
- Pagamenti reali o dati reali di carte.
- Riconoscimento vocale (eventuale sintesi vocale degli aiuti solo se avanza tempo).
- Altri scenari (SPID, app IO, home banking): sono la "visione", non l'MVP.
- Account utente, salvataggio persistente su server, gestione di più utenti.
- Promemoria personalizzato stampabile con i passi difficili (*nice-to-have*, solo se avanza tempo).
- Aiuti generati da LLM a runtime (*opzionale*, dietro un interruttore, solo se le API sono consentite).

### Mappatura sui deliverable del tema

| Deliverable | Come lo copriamo |
|---|---|
| 01 Learner Profile Statement | Teresa: chi è, perché le serve, i 3 punti precisi in cui si blocca. |
| 02 Adaptive Evidence | Stesso passo ("tariffa") in 3 tentativi: aiuto di livello 3 → livello 1 → nessun aiuto, guidato dal tracciamento. |
| 03 Learning Outcome Note | Prova da sola completata senza aiuti. Metriche dal cruscotto (prima/dopo). Limite dichiarato: verificato su persona simulata, da validare con utenti reali. |

### Assunzioni

- Le API LLM a runtime **potrebbero non** essere consentite: il design non ne ha bisogno.
- È lecito costruire una **replica** di un flusso reale purché senza marchi, loghi e nomi commerciali.
- In demo un membro del team **interpreta Teresa**. Le metriche sono reali per quella sessione, ma non sono un test con utenti veri.
- Si può usare un browser moderno e il proiettore. Se serve, la demo gira in locale senza rete.

### Rischi e mitigazioni

| Rischio | Mitigazione |
|---|---|
| Troppe schermate per 3 ore | Partire da 4 schermate essenziali (tratta, treno, tariffa, pagamento). Aggiungere le altre solo se il coach funziona. |
| Soglie del coach "a caso" | Soglie semplici e dichiarate (es. 15 s di inattività, 2 tocchi sbagliati), da spiegare con trasparenza come scelta di design. |
| Demo dal vivo instabile | Modalità replay delle sessioni registrate. Video di backup. |
| "È solo un mock" | Raccontarla come **palestra**: il valore è allenarsi senza rischi. Il trasferimento sull'app vera è il passo successivo dichiarato. |
| Metriche poco credibili | Dichiarare che la persona è simulata. Mostrare la logica di misura e proporre un mini test con utenti reali dopo l'hackathon. |
| AI poco "visibile" | Spiegare dove ha lavorato Claude Code (sviluppo, bozze dei testi di aiuto) e dove c'è stata revisione umana (testi, soglie, prove). |

---

## Riserva: 2B — "Rata Vera" (Tema 02, Inclusione Finanziaria) — 27/30

### Perché è la riserva

1. **Il momento wow più immediato per il pubblico:** "10 rate a tasso zero" diventa "645 €, TAEG circa 18%" (numeri di esempio, da ricalcolare nel prototipo). Chiunque in sala capisce subito.
2. **La capability più solida e testabile:** motore di calcolo deterministico (piano rate, TAEG calcolato dai flussi, simulazione del budget), con test automatici. Nessuna dipendenza da LLM.
3. **Diversifica il rischio:** è su un tema diverso. Se il tema 03 fosse affollato, o se i criteri ufficiali premiassero la correttezza tecnica, diventa la scelta migliore.
4. **Contro:** è al limite del divieto di consulenza. Serve una regola ferma: **una sola offerta, solo numeri e significati, mai "conviene" né classifiche**. Su questo si gioca la "Risk & Clarity Note".

### Perimetro MVP (sintesi)

- **Dentro:** foglio SECCI di esempio precompilato e modificabile; calcolo di rata, totale, costo del credito, TAEG ricalcolato e confronto con quello dichiarato; timeline della rata dentro il budget inserito dall'utente; scenario "rata saltata"; glossario di 8 termini; quiz di 3 domande prima/dopo.
- **Fuori:** confronto tra più offerte, qualsiasi raccomandazione, lettura automatica di PDF reali, dati bancari reali.

### Nota sull'alternativa 1B "Slot Parlante" (27/30)

A pari punteggio con 2B, ma con una fattibilità più bassa (riconoscimento e sintesi vocale, audio in sala). Da preferire alla riserva **solo** se i criteri ufficiali premiano molto impatto emotivo e innovazione e il team è a suo agio con le tecnologie vocali del browser.

---

## Prossimi passi (dopo la conferma)

1. Conferma (o scelta diversa) dell'utente.
2. Ricalcolo della matrice con i criteri ufficiali appena disponibili.
3. Stesura di `pitch-narrative.md` (storyline, momento wow, script della demo).
4. Passaggio ai requisiti di business (BR).
