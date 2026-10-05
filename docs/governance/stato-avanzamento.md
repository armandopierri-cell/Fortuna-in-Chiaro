# Stato avanzamento

> File di passaggio tra sessioni: chi riprende il lavoro legge prima questo. Aggiornarlo a ogni decisione o milestone.

**Freeze: 15:30 del 05/10/2026** (deroga concessa dai docenti, comunicata dall'utente; il regolamento in 00_input/ riporta ancora 15:00). Ultimo aggiornamento: 14:10 (governance).

## Decisioni prese
| Ora | Decisione | Chi |
|---|---|---|
| 12:05 | Repository strutturato come da regolamento: app/, agents/, presentation/, docs/, README.md. 00_input/ e kb/ esclusi | orchestratore |
| 12:05 | App in HTML/JS statico (sulla macchina mancano Node e Python), test in Edge headless | orchestratore |
| 12:05 | Git installato con winget. Repository GitHub pubblico fornito dai docenti (URL da ricevere) | utente |
| 12:45 | **Idea: "Fortuna in Chiaro"** (Tema 02): simulatore educativo sul gioco d'azzardo con probabilità ufficiali. Scartate dopo valutazione: 3A Palestra Digitale, N1 Prova Generale (NEET), 2B/Rata Vera+, X2 Truffa o No | utente |
| 12:55 | BR, analisi funzionale e analisi tecnica scritte in parallelo con ID BR-01..BR-12 fissati dall'orchestratore | orchestratore |
| 12:55 | Stanze agile: Motore (sviluppo + business: data/giochi.js, motore.js, test unitari) e Esperienza (index.html, style.css, ui.js, quiz, cruscotto) in parallelo, contratto API in ARCHITETTURA.md, test per stanza senza aspettare la fine | orchestratore |
| ~13:00 | **Leve di innovazione approvate dall'utente**: L1 vincite che non sono vincite, L2 dalla parte del banco, L3 probabilità in cose fisiche, L4 hook guardrail del Tema 02. BR proposti BR-13..BR-15 e rafforzamento BR-11 (dettaglio in docs/idea/idea-selezionata.md, sezione "Leve di innovazione"). Da formalizzare da business e da pianificare nelle stanze | utente |
| 12:55 | Checkpoint idea e valore alle 14:05 con utente: demo end-to-end, stima del valore (docs/idea/valore-checkpoint.md), decisione sui tagli di perimetro | orchestratore |
| ~13:10 | **CR approvate dall'utente**: CR1 "Vuoi parlarne con qualcuno?" (soglia di spesa scelta dall'utente → numero verde e messaggio a persona di fiducia, inviato solo dall'utente) come **BR-16 Should**; CR2 "Pausa e Conto" (versione educativa del craving) come **BR-17 Could**, go/no-go al checkpoint delle 14:05. L'architettura multi-agente runtime proposta (Analista, Coach, Craving, Debiti, Barriere, Escalation) va **solo come slide di visione "Fase 2"**, separata dalla struttura agentica di sviluppo. Dettaglio in docs/idea/idea-selezionata.md | utente |
| ~13:10 | **Deroga sul freeze: push entro le 15:30** (comunicata dall'utente) | utente |

## Verifiche umane
| Ora | Punto | Esito |
|---|---|---|
| 12:45 | Scelta dell'idea | **APPROVATA dall'utente**: "Fortuna in Chiaro" (nome scelto dall'utente tra 4 proposte). Scheda: docs/idea/idea-selezionata.md |
| ~13:00–13:10 | Leve di innovazione (L1–L4) e CR (CR1, CR2) | **APPROVATE dall'utente**: dettaglio in docs/idea/idea-selezionata.md (BR-13..BR-17) |
| ~14:20 | Checkpoint idea e valore (demandato al rientro utente) | **In attesa**: demo end-to-end, stima valore (docs/idea/valore-checkpoint.md), go/no-go CR2, registrazione decisione e conferma |
| 15:10 | Conferma utente e go al push | **In attesa** |
| — | Consegna e push | **In attesa** |

## Fatto

### Infrastruttura e governance
- Team agentico (.claude/agents), skill presentazioni-accenture, hook guard e post-edit-tests (provati), CLAUDE.md
- Checklist QA v2 con regolamento generale e criteri di valutazione (docs/qa/checklist-conformita.md)
- Repository strutturato: app/, agents/, presentation/, docs/, README.md alla radice (nuovo, punto d'ingresso per valutatori)
- agents/sync.ps1 eseguito (allineata a .claude/ alle 14:11)

### Ricerca e idea
- 6 idee valutate (docs/idea/), idea "Fortuna in Chiaro" confermata dall'utente 12:45
- Ricerca NEET (docs/idea/ricerca-neet.md), ricerca azzardo con dati ADM (docs/idea/ricerca-azzardo.md)
- Leve di innovazione L1–L4 approvate, CR1 e CR2 approvate (BR-16 Should, BR-17 Could)
- Documento di visione "Fase 2" con architettura multi-agente (solo slide nella presentazione, separata dalla struttura agentica di sviluppo)

### Sviluppo e test
- **Motore v2**: 41 test verdi (calcolo spesa giornaliera/mensile/annuale, valore atteso esatto, simulazione con seme fisso, conversioni probabilità in scale fisiche)
- **UI v2**: tutte le 7 schermate, leve L1–L3 integrate (vincite che non sono vincite, vista dal banco, probabilità in stadi), CR1 applicata (soglia scelta da utente → numero verde + messaggio), CR2 dietro flag `?pausa=1`
- **Hook L4 (guardrail Tema 02)**: scansione statica dei testi HTML, blocca formule vietate ("conviene", "smetti", "gioca meno", ecc.), verdetto e log in docs/qa/evidenze-hook-t2.md, provato
- **UAT**: 23 test di accettazione (22 verdi, DEF-001 L4 risolto e da ritestare, DEF-002 bassa priorità)

### Presentazione e consegna
- Bozza presentazione con scaletta 5 minuti (innovazione), brand Accenture, demo end-to-end ~2'30", slide visione Fase 2
- README.md alla radice (punto d'ingresso per valutatori: persona o agente), mappa repository, pattern validazione, stanze agile, uso token, comandi test
- Piano e timeline strutturato in docs/governance/

## Rischi bloccanti per la consegna (da QA)
1. 00_input/ o kb/ nel repository pubblico (H-01/H-02)
2. agents/ non allineata a .claude/ al momento del push: eseguire agents/sync.ps1 (H-04)
3. Push dopo le 15:30 (deroga; era 15:00), oppure deliverable del tema come documenti separati invece che dentro presentazione e demo (R-11/R-09)

## Piano (ore rimanenti: 1 h 20 min fino al freeze 15:30)

| Ora | Attività | Owner | Criterio di "fatto" |
|---|---|---|---|
| 14:20 | **CHECKPOINT idea e valore** con utente: demo end-to-end, stima valore, go/no-go CR2 (BR-17) | orchestratore + utente | Verifica umana registrata in questo file; decisione su scope finali |
| 14:20–14:40 | Correzioni finali (se segnalate), UAT su DEF-001 (L4) e DEF-002 | sviluppo + business | 41+ test verdi motore, 23 test accettazione verdi |
| 14:40–15:00 | Finalizzazione presentazione (slide visione Fase 2 se approvata da utente), sync agents/ a .claude/, ultimazione README.md | innovazione + governance | Presentation/index.html pronto, agents/ allineata |
| 15:00 | **Review QA**: conformità al regolamento, verdetto PASS/FAIL su docs/qa/ | qa | docs/qa/evidenze-hook-t2.md con verdetto; checklist conformita.md approvata |
| 15:10 | **Conferma utente**: go al push (finale umana) | utente | Verifica umana registrata in questo file |
| 15:15–15:30 | **Push finale** (main branch) + margine | governance | Commit fatto, repository pubblico aggiornato |

## Decisioni provvisorie (da confermare al checkpoint 14:20)
| Decisione | Stato | Note |
|---|---|---|
| Lotto mantenuto con etichetta "fonte terzi" (non nominato come marchio) | Provvisoria | Tracciato in data/giochi.json; rispetta T2-V3 (no consigli); confermato BR-04 |
| Biglietto didattico da 2 € con payout 70% (esempio per BR-17) | Provvisoria | Usato solo per quiz di trasferimento (domanda 4); non influenza l'UA con Salvatore (che gioca il suo biglietto da 5 € o 10 €) |
| BR-17 "Pausa e Conto" nascosto dietro flag `?pausa=1` | Provvisoria | Se approvato al checkpoint, integrare nella demo; se no, rimuovere il flag e il bottone |
| Stima valore ~150 mln € in appendice della presentazione | Provvisoria | Stima nostra (docs/idea/valore-checkpoint.md): 1% dei 18 mln di giocatori adulti (ISS) × 70% che arriva a 3/3 × perdita media ~1.190 €/anno (21,5 mld € ADM / 18 mln). Perdite rese consapevoli, non risparmi |

## Questioni aperte
- **URL del repository GitHub**: da ricevere dai docenti (comunicato in 00_input/ o via email)
- **Elenchi di scenari/profili dei temi**: tassativi o esempi? (Interpretazione prudente adottata: scegliere uno dagli elenchi T2-V1, T2-V2, T2-V3; non mescolare temi)
