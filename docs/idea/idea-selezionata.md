# Idea selezionata: "Fortuna in Chiaro"

> **CONFERMATA dall'utente il 05/10/2026 alle 12:45** (verifica umana registrata in `docs/governance/stato-avanzamento.md`).
> Percorso di scelta: 6 idee iniziali (`idee-valutate.md`), 5 idee sul target NEET (`idee-neet.md`, con dati in `ricerca-neet.md`), rivalutazione finale sui 4 criteri ufficiali con 2 idee nuove. La proposta precedente (3A "Palestra Digitale") è nello storico git.
> Numeri e tabelle premi: `ricerca-azzardo.md` (in corso di verifica). **Nessun numero entra nell'app o nel pitch se non è lì con fonte.**

## In una frase
Un simulatore educativo che mostra a chi gioca ogni giorno **quanto costa davvero sperare**: un anno di gioco in 10 secondi, con le probabilità ufficiali, e i concetti per capirlo da solo.

## Tema e scenario
- **Tema 02 — Inclusione Finanziaria.** Scenari del vincolo T2-V1: **simulazione di una scelta quotidiana** (la spesa giornaliera di gioco) e **comprensione di costi** (quanto si perde in media).
- Un solo tema (C-01): niente capability o deliverable presi da altri temi.

## Persona (User Difficulty Statement)
**Salvatore, 52 anni, autista, circa 1.300 € al mese.** Ogni giorno spende circa 10 € tra lotterie istantanee e lotto: "prima o poi tocca a me", "quel numero è in ritardo, deve uscire". Non ha mai fatto il conto di quanto spende in un anno, non sa che probabilità ha di vincere il premio massimo e crede che un numero "ritardatario" sia più probabile. **Difficoltà**: bassa alfabetizzazione finanziaria e statistica su una spesa quotidiana che pesa sul suo budget. **Perché è rilevante**: il gioco pesa di più su redditi e titoli di studio bassi (dati in `ricerca-azzardo.md`).

## Caso d'uso (cosa sviluppiamo)
1. **Benvenuto** — "Quanto ti costa sperare?". Tono non giudicante.
2. **Quiz prima** (3 domande a scelta multipla, punteggio registrato):
   - quanto spendi in un anno giocando 10 € al giorno;
   - che probabilità hai di vincere il premio massimo di un biglietto;
   - un numero che non esce da 100 estrazioni ha più probabilità di uscire?
3. **La mia abitudine** — scelgo i giochi (lotteria istantanea da 5 €, da 10 €, lotto) e quante volte al giorno/settimana → spesa giornaliera, mensile, annuale.
4. **Un anno in 10 secondi** — simulazione animata giorno per giorno con le **probabilità ufficiali** e generatore pseudo-casuale con seme fisso (riproducibile in demo). Contatori: speso, vinto, perso. In parallelo il **valore atteso esatto** ("in media, su 100 € giocati ne tornano X"). Messaggio finale: "Per vincere il premio massimo una volta, in media, dovresti giocare per N anni".
5. **Capire i numeri** — 3 schede brevi, ciascuna con un mini-esperimento:
   - probabilità ("1 su N" reso visibile);
   - valore atteso (perché "in media" si perde);
   - estrazioni indipendenti (simulatore dei "ritardatari": la probabilità resta uguale).
6. **Quiz dopo** (stesse 3 domande + 1 di trasferimento su un biglietto **mai visto**: "un biglietto da 2 € con payout X%: quanto perdi in media su 100 giocate?") → confronto prima/dopo.
7. **Sempre visibili**: "Strumento educativo: mostra numeri e significati, non dà consigli" + numero verde nazionale per il gioco d'azzardo (dato verificato in `ricerca-azzardo.md`).

## Miglioramento misurabile (T2-V2)
- Quiz: da 0–1/3 prima a 3/3 dopo.
- Trasferimento: calcola da solo la perdita attesa di un biglietto nuovo (no → sì).
- Il cruscotto finale mostra i due punteggi a confronto.

## Mappatura sui deliverable del tema (dentro presentazione e demo, R-09)
| Deliverable | Come lo copriamo |
|---|---|
| 01 User Difficulty Statement | Salvatore: chi è, cosa crede, quanto spende, perché conta (numeri ufficiali) |
| 02 Before / After Simplicity Evidence | Prima: "10 € al giorno, prima o poi vinco". Dopo: "3.650 € in un anno, me ne tornano in media X, premio massimo 1 volta ogni N anni" + quiz 1/3 → 3/3 |
| 03 Risk & Clarity Note | Cosa è semplificato (un anno simulato, giochi selezionati), cosa non è alterato (probabilità e premi ufficiali, citati), come si evita ambiguità (valore atteso esatto accanto alla simulazione; nessun consiglio; nessun giudizio) |

## Vincoli e guardrail
- **T2-V3**: mai consigli, mai "smetti", "gioca meno" o "conviene": solo numeri e significati. La decisione resta a Salvatore.
- **Non è un servizio clinico**: nessuna valutazione di dipendenza; solo il rimando al numero verde ufficiale.
- **Nessun marchio commerciale**: "lotteria istantanea da 5 €" con struttura premi ufficiale citata come fonte.
- **T2-E4**: probabilità e premi identici alla fonte ufficiale; arrotondamenti dichiarati.
- **Nessun dato personale** salvato fuori dal browser.

## Perimetro MVP
**Dentro**: le 7 schermate sopra; modulo di calcolo (spesa, valore atteso, probabilità) e simulatore con seme fisso, entrambi con test; dati dei giochi in JSON con fonte; quiz con punteggio; cruscotto prima/dopo; modalità demo (seme fisso, animazione rapida).
**Fuori**: slot e gioco online, scommesse sportive, dati reali dell'utente, profilazione del rischio di dipendenza, account, LLM a runtime.

## Strategia AI
Claude Code (team agentico in `.claude/agents/`) usato in fase di sviluppo per ricerca, codice, testi e test; **zero token a runtime**: l'app è logica deterministica su dati ufficiali, quindi nessuna chiave API nel browser e costo per utente nullo. Revisione umana su numeri, testi e tono.

## Demo (circa 2'30")
1. 0:00–0:20 — Salvatore e il quiz prima (1/3).
2. 0:20–1:20 — La sua abitudine e **un anno in 10 secondi**: i contatori corrono, perdita finale, "premio massimo una volta ogni N anni".
3. 1:20–1:50 — Il simulatore dei ritardatari.
4. 1:50–2:30 — Quiz dopo 3/3 + trasferimento sul biglietto nuovo; cruscotto prima/dopo; Risk & Clarity Note.

## Rischi
| Rischio | Mitigazione |
|---|---|
| Tema delicato davanti alla giuria | Tono educativo e non giudicante; dati ufficiali; rimando al numero verde |
| Tabella premi ufficiale non reperibile per intero | Usare payout medio e probabilità del premio massimo ufficiali, dichiarando la semplificazione nella Risk & Clarity Note |
| Simulazione percepita come "truccata" | Valore atteso esatto mostrato accanto; seme fisso dichiarato; test automatici sui calcoli |
