# HANDOFF – Übergabe an den nächsten Codex-Agenten

Diese Datei muss nach jedem abgeschlossenen Arbeitsschritt aktualisiert werden.

---

## 1. Aktueller Stand

**Projekt:** Startup Valley  
**Version:** 0.0.2-online
**Deployment:** erfolgreich über GitHub Pages
**Repository:** https://github.com/JakobSawazki/startup-valley
**GitHub Pages URL:** https://jakobsawazki.github.io/startup-valley/

Letzter bestätigter Test:

- JS-Syntaxcheck mit gebündelter Node-Laufzeit erfolgreich.
- Browser-Smoke-Test über temporären lokalen Static-Server `http://127.0.0.1:8765/` erfolgreich.
- Geprüft: Titel `Startup Valley`, sichtbares HUD, sichtbare Spielwelt, CSS geladen, keine Browser-Fehler/Warnungen.
- Live-Smoke-Test auf GitHub Pages erfolgreich: Titel, HUD, Spielwelt, CSS und JS korrekt geladen, keine Browser-Fehler/Warnungen.
- Erfolgreiche GitHub-Actions-Läufe: `27638777888` (Push), `27638791425` (manuell).

---

## 2. Was existiert aktuell?

Dieses Projekt enthält die Planungs- und Codex-Dokumentation sowie die erste lauffähige HTML/CSS/JS-Grundstruktur für eine browserbasierte Wirtschafts- und Aufbausimulation.

Enthalten:

- `index.html` mit sichtbarem Spielbereich und HUD-Platzhalter
- `styles/main.css`
- `src/main.js`, `src/state.js`, `src/ui.js`
- `assets/` und `data/` Grundstruktur
- Projektbeschreibung
- Agentenregeln
- Aufgabenplan
- technisches Konzept
- Datenmodell
- UI/UX-Konzept
- Asset-Leitfaden
- GitHub-Deployment-Anleitung
- vorbereiteter GitHub-Pages-Workflow

Geänderte Dateien in TASK-001:

- `index.html`
- `styles/main.css`
- `src/main.js`
- `src/state.js`
- `src/ui.js`
- `assets/backgrounds/.gitkeep`
- `assets/buildings/.gitkeep`
- `assets/resources/.gitkeep`
- `assets/ui/icons/.gitkeep`
- `data/.gitkeep`
- mehrere Dokumentationsdateien für Projektname, Version, Handoff und Deployment-Hinweise
- `.github/workflows/deploy.yml` für GitHub Pages mit Node-24-Opt-in

---

## 3. Nächster notwendiger Schritt

Der nächste Codex-Agent soll in `TASKS.md` die erste offene Aufgabe bearbeiten:

```text
TASK-002 – Startwelt als statische Szene anzeigen
```

---

## 4. Pflichtlektüre für neuen Agenten

Vor Arbeit lesen:

1. `README.md`
2. `AGENTS.md`
3. `CODEX_BRIEFING_AUFBAU_AG.md`
4. `TASKS.md`
5. `docs/VERSION_STATE.md`
6. `docs/CHANGELOG.md`
7. `docs/TECHNICAL_SPEC.md`

---

## 5. Arbeitsanweisung für Codex

Kopierbarer Startprompt für Codex:

```text
Du arbeitest am Projekt "Startup Valley", einer browserbasierten klickbaren Wirtschafts- und Aufbausimulation. Lies zuerst README.md, AGENTS.md, CODEX_BRIEFING_AUFBAU_AG.md, TASKS.md, docs/VERSION_STATE.md und docs/HANDOFF.md. Bearbeite ausschließlich die erste Aufgabe mit Status OPEN in TASKS.md. Setze sie vor Beginn auf IN_PROGRESS, arbeite nur ihren Umfang ab, teste lokal, aktualisiere CHANGELOG.md, VERSION_STATE.md und HANDOFF.md und setze die Aufgabe erst dann auf DONE, wenn alle Akzeptanzkriterien erfüllt sind.
```

---

## 6. Testanleitung nach TASK-001

Nach Erstellung der Grundstruktur:

1. `index.html` lokal im Browser öffnen.
2. Prüfen, ob Spielbereich und HUD-Platzhalter sichtbar sind.
3. DevTools öffnen.
4. Prüfen, ob keine JavaScript-Fehler auftreten.
5. In `docs/CHANGELOG.md` dokumentieren.

---

## 7. GitHub-Handshake

Wenn das Repository angelegt wurde:

- Repository-URL hier eintragen
- Pages-URL hier eintragen
- letzten Commit-Hash eintragen
- aktueller Taskstatus aktualisieren

### Repository-URL

```text
https://github.com/JakobSawazki/startup-valley
```

### GitHub Pages URL

```text
https://jakobsawazki.github.io/startup-valley/
```

### Letzter bestätigter Commit

```text
fc13842 – chore: initialize Startup Valley project
```

---

## 8. Bekannte offene Entscheidungen

- finaler Projektname: aktuell `Startup Valley`
- Grafikstil: moderne 2D-/Top-Down-/leicht isometrische Richtung
- Repositoryname: Empfehlung `startup-valley`
- Repository ist öffentlich für einfaches Pages-Deployment

---

## 9. Nicht vergessen

Nach jeder Arbeit:

- TASKS aktualisieren
- CHANGELOG aktualisieren
- VERSION_STATE aktualisieren
- HANDOFF aktualisieren
- Git committen und pushen
- bei Deployment-relevanten Änderungen GitHub Pages prüfen
