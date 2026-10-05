# Stato avanzamento

> File di passaggio tra sessioni: chi riprende il lavoro legge prima questo. Aggiornarlo a ogni decisione o milestone.

**Freeze: 15:00 del 05/10/2026.** Ultimo aggiornamento: 12:45.

## Decisioni prese
| Ora | Decisione | Chi |
|---|---|---|
| 12:05 | Repository strutturato come da regolamento: app/, agents/, presentation/, docs/, README.md. 00_input/ e kb/ esclusi | orchestratore |
| 12:05 | App in HTML/JS statico (sulla macchina mancano Node e Python), test in Edge headless | orchestratore |
| 12:05 | Git installato con winget. Repository GitHub pubblico fornito dai docenti (URL da ricevere) | utente |
| 12:45 | **Idea: "Fortuna in Chiaro"** (Tema 02): simulatore educativo sul gioco d'azzardo con probabilità ufficiali. Scartate dopo valutazione: 3A Palestra Digitale, N1 Prova Generale (NEET), 2B/Rata Vera+, X2 Truffa o No | utente |

## Verifiche umane
| Ora | Punto | Esito |
|---|---|---|
| 12:45 | Scelta dell'idea | **APPROVATA dall'utente**: "Fortuna in Chiaro" (nome scelto dall'utente tra 4 proposte). Scheda: docs/idea/idea-selezionata.md. Prima della scelta l'utente ha chiesto una verifica di fattibilità e di efficacia della demo |
| — | Consegna e push | da fare |

## Fatto
- Team agentico (.claude/agents), skill presentazioni-accenture, hook guard e post-edit-tests (provati), CLAUDE.md
- 6 idee valutate (docs/idea/), checklist QA v1 (docs/qa/)
- Git init + primo commit

- Checklist QA v2 con regolamento generale, criteri di valutazione e pulizia del repository (docs/qa/checklist-conformita.md)

## Rischi bloccanti per la consegna (da QA)
1. 00_input/ o kb/ nel repository pubblico (H-01/H-02)
2. agents/ non allineata a .claude/ al momento del push: eseguire agents/sync.ps1 (H-04)
3. Push dopo le 15:00, oppure deliverable del tema come documenti separati invece che dentro presentazione e demo (R-11/R-09)

## Prossimi passi
1. Conferma dell'idea → BR (business) e pitch-narrative (innovazione) in parallelo
2. Sviluppo in app/ (12:30–14:00)
3. Test di accettazione (14:00–14:20) e presentazione (13:45–14:30)
4. Review QA, README, sync di agents/ (14:30–14:45)
5. Conferma dell'utente, poi push (14:45–14:55)

## Questioni aperte
- URL del repository GitHub (dai docenti)
- Elenchi di scenari/profili dei temi: tassativi o esempi? (interpretazione prudente: sceglierne uno dagli elenchi)
