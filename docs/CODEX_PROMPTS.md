# CODEX_PROMPTS – Kopierbare Prompts für Codex

---

## 1. Standard-Startprompt

```text
Du arbeitest am Projekt "Startup Valley", einer browserbasierten klickbaren Wirtschafts- und Aufbausimulation. Lies zuerst README.md, AGENTS.md, CODEX_BRIEFING_AUFBAU_AG.md, TASKS.md, docs/VERSION_STATE.md und docs/HANDOFF.md. Bearbeite ausschließlich die erste Aufgabe mit Status OPEN in TASKS.md. Setze sie vor Beginn auf IN_PROGRESS, arbeite nur ihren Umfang ab, teste lokal, aktualisiere CHANGELOG.md, VERSION_STATE.md und HANDOFF.md und setze die Aufgabe erst dann auf DONE, wenn alle Akzeptanzkriterien erfüllt sind.
```

---

## 2. Prompt nach Laptop-Wechsel

```text
Ich arbeite auf einem zweiten Laptop weiter. Bitte führe zuerst git status aus, prüfe den aktuellen Stand, lies AGENTS.md, TASKS.md, docs/VERSION_STATE.md und docs/HANDOFF.md. Falls lokale Änderungen vorhanden sind, ändere nichts, bevor du sie bewertet hast. Bearbeite dann nur die erste OPEN-Aufgabe in TASKS.md.
```

---

## 3. Prompt für Deployment-Prüfung

```text
Bitte prüfe ausschließlich das GitHub-Pages-Deployment dieses Projekts. Lies docs/GITHUB_DEPLOYMENT.md und .github/workflows/deploy.yml. Prüfe, ob index.html im veröffentlichten Pfad liegt, ob relative Pfade für CSS/JS verwendet werden und ob der Workflow für eine statische Seite geeignet ist. Ändere nur Deployment-relevante Dateien und dokumentiere das Ergebnis in docs/HANDOFF.md.
```

---

## 4. Prompt für UI-Verbesserung

```text
Bitte verbessere ausschließlich die UI/UX der aktuellen Version von Startup Valley. Lies docs/UI_UX_SPEC.md. Ändere keine Spiellogik, keine Datenmodelle und keine Task-Reihenfolge. Ziel ist bessere Lesbarkeit, klarere Buttons, bessere Panels und saubere Rückmeldungen. Danach lokal testen und CHANGELOG.md sowie HANDOFF.md aktualisieren.
```

---

## 5. Prompt für Asset-Austausch

```text
Bitte integriere neue PNG-Assets gemäß docs/ASSET_GUIDE.md. Ersetze nur die betroffenen Platzhaltergrafiken, halte Dateinamen möglichst stabil und prüfe danach Positionierung, Klickflächen und Browser-Konsole. Dokumentiere geänderte Asset-Dateien in docs/HANDOFF.md.
```

---

## 6. Prompt für Fehlerbehebung

```text
Bitte behebe nur den folgenden Fehler: [FEHLER HIER BESCHREIBEN]. Lies zuerst AGENTS.md, docs/VERSION_STATE.md und docs/HANDOFF.md. Suche die Ursache gezielt, ändere nur notwendige Dateien, teste den konkreten Fehlerfall und dokumentiere die Korrektur in CHANGELOG.md und HANDOFF.md. Beginne keine neuen Features.
```

---

## 7. Prompt für Refactoring

```text
Bitte führe ein kleines, risikoarmes Refactoring durch. Ziel: [ZIEL HIER EINTRAGEN]. Keine neuen Features. Verhalten muss gleich bleiben. Lies zuerst AGENTS.md und docs/TECHNICAL_SPEC.md. Nach dem Refactoring muss das Spiel weiterhin lokal laufen. Aktualisiere CHANGELOG.md und HANDOFF.md.
```
