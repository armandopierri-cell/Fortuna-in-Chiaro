# Stato avanzamento

> File di passaggio tra sessioni: chi riprende il lavoro legge prima questo. Aggiornarlo a ogni decisione o milestone.

**Freeze: 15:30 del 05/10/2026** (deroga concessa dai docenti, comunicata dall'utente; il regolamento in 00_input/ riporta ancora 15:00). Ultimo aggiornamento: ~13:10.

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
| 12:45 | Scelta dell'idea | **APPROVATA dall'utente**: "Fortuna in Chiaro" (nome scelto dall'utente tra 4 proposte). Scheda: docs/idea/idea-selezionata.md. Prima della scelta l'utente ha chiesto una verifica di fattibilità e di efficacia della demo |
| 14:05 | Checkpoint idea e valore | da fare |
| — | Consegna e push | da fare |

## Fatto
- Team agentico (.claude/agents), skill presentazioni-accenture, hook guard e post-edit-tests (provati), CLAUDE.md
- 6 idee valutate (docs/idea/), checklist QA v1 (docs/qa/)
- Git init + primo commit

- Checklist QA v2 con regolamento generale, criteri di valutazione e pulizia del repository (docs/qa/checklist-conformita.md)

## Rischi bloccanti per la consegna (da QA)
1. 00_input/ o kb/ nel repository pubblico (H-01/H-02)
2. agents/ non allineata a .claude/ al momento del push: eseguire agents/sync.ps1 (H-04)
3. Push dopo le 15:30 (deroga; era 15:00), oppure deliverable del tema come documenti separati invece che dentro presentazione e demo (R-11/R-09)

## Prossimi passi (piano dettagliato)
- **12:55–13:15**: BR, analisi funzionale, analisi tecnica, partenza Motore. Parallelo: innovazione scrive valore-checkpoint (docs/idea/valore-checkpoint.md)
- **13:15–14:00**: Stanze Motore e Esperienza in parallelo, test di accettazione per stanza. Business testa appena consegna
- **13:45**: Bozza presentazione (innovazione)
- **14:05 CHECKPOINT**: Demo end-to-end con utente, stima valore, decisione tagli di perimetro e **go/no-go su BR-17 "Pausa e Conto"** (verifica umana)
- **14:05–14:45**: Correzioni finali, BR-17 se approvato, UAT finale
- **14:45–15:00**: Presentazione definitiva (inclusa slide di visione "Fase 2"), README, sync agents/
- **15:00**: Review QA (PASS/FAIL)
- **15:15**: Conferma utente, push
- **15:20–15:30**: Margine (freeze 15:30)

## Questioni aperte
- URL del repository GitHub (dai docenti)
- Elenchi di scenari/profili dei temi: tassativi o esempi? (interpretazione prudente: sceglierne uno dagli elenchi)
