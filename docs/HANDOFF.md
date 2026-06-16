# HANDOFF – Übergabe an den nächsten Codex-Agenten

Diese Datei muss nach jedem abgeschlossenen Arbeitsschritt aktualisiert werden.

---

## 1. Aktueller Stand

**Projekt:** Startup Valley  
**Version:** 0.0.6-depletion
**Deployment:** erfolgreich über GitHub Pages
**Repository:** https://github.com/JakobSawazki/startup-valley
**GitHub Pages URL:** https://jakobsawazki.github.io/startup-valley/

Letzter bestätigter Test:

- JS-Syntaxcheck mit gebündelter Node-Laufzeit erfolgreich.
- Browser-Smoke-Test über temporären lokalen Static-Server `http://127.0.0.1:8765/` erfolgreich.
- Geprüft: Titel `Startup Valley`, sichtbares HUD, sichtbare Spielwelt, CSS geladen, keine Browser-Fehler/Warnungen.
- Live-Smoke-Test auf GitHub Pages erfolgreich: Titel, HUD, Spielwelt, CSS und JS korrekt geladen, keine Browser-Fehler/Warnungen.
- Erfolgreiche GitHub-Actions-Läufe: `27638777888` (Push), `27638791425` (manuell).
- TASK-002 lokaler Browser-Test erfolgreich: 8 Weltobjekte gerendert und angeklickt, Kontextpanel aktualisiert, keine Browser-Fehler/Warnungen.
- TASK-003 lokaler Browser-Test erfolgreich: Inventar zeigt Geld, Holz, Stein, Metall und Hausstufe jeweils mit Startwert 0, Tooltips sind gesetzt, Objektklicks zeigen vorbereitete Aktionen, keine Browser-Fehler/Warnungen.
- TASK-004 lokaler Browser-Test erfolgreich: 5 Baumklicks ergeben Holz 10, 3 Steinklicks ergeben Stein 6, Schrottklick ergibt Metall 1, Floating-Text verschwindet wieder, keine Browser-Fehler/Warnungen.
- Erweiterung 0.0.6 lokal getestet: Baum schrumpft nach 3 Klicks, ist nach 6 Klicks deaktiviert/unsichtbar und erhöht danach Holz nicht weiter; Stein und Schrott erschöpfen ebenfalls korrekt.

---

## 2. Was existiert aktuell?

Dieses Projekt enthält die Planungs- und Codex-Dokumentation sowie eine lauffähige HTML/CSS/JS-Grundstruktur mit grafischer PNG-Startwelt, aufgewertetem Inventar/HUD, manuellem Ressourcen-Sammeln und erschöpfbaren Ressourcenquellen.

Enthalten:

- `index.html` mit sichtbarem Spielbereich und HUD
- `styles/main.css`
- `src/main.js`, `src/state.js`, `src/ui.js`, `src/world.js`
- `src/resources.js`
- PNG-Hintergrund `assets/backgrounds/start_area.png`
- transparente PNG-Objekte in `assets/resources/` und `assets/buildings/`
- realistischere transparente PNG-Icons in `assets/ui/icons/`
- zentraler `gameState` mit Startwerten für Geld, Holz, Stein, Metall und Hausstufe
- manuelles Sammeln: Baum `+2 Holz`, Stein `+2 Stein`, Schrott `+1 Metall`
- Ressourcenquellen schrumpfen pro Klick, verschwinden bei 0 und sind dann deaktiviert
- Favicon / Tab-Icon: `assets/ui/favicon.png` und `favicon.ico`
- Floating-Feedback nach Sammelaktionen
- Inventar-Tooltips und Kontextpanel für Objektinteraktionen
- `data/world_start.json`
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

Geänderte Dateien in TASK-002:

- `index.html`
- `styles/main.css`
- `src/main.js`
- `src/state.js`
- `src/ui.js`
- `src/world.js`
- `data/world_start.json`
- `assets/backgrounds/start_area.png`
- `assets/resources/tree_01.png`, `tree_02.png`, `tree_03.png`
- `assets/resources/stone_01.png`, `stone_02.png`, `scrap_01.png`
- `assets/buildings/house_00_plot.png`, `house_01_foundation.png`, `house_02_frame.png`, `house_03_finished.png`, `market_01.png`
- `assets/ui/icons/money.png`, `wood.png`, `stone.png`, `metal.png`

Geänderte Dateien in TASK-003:

- `index.html`
- `styles/main.css`
- `src/main.js`
- `src/state.js`
- `src/ui.js`
- `src/world.js`
- `assets/ui/icons/money.png`, `wood.png`, `stone.png`, `metal.png`
- `README.md`
- `docs/ASSET_GUIDE.md`
- `docs/CHANGELOG.md`
- `docs/VERSION_STATE.md`
- `docs/HANDOFF.md`
- `TASKS.md`

Geänderte Dateien in TASK-004:

- `index.html`
- `styles/main.css`
- `src/main.js`
- `src/state.js`
- `src/ui.js`
- `src/resources.js`
- `README.md`
- `docs/CHANGELOG.md`
- `docs/VERSION_STATE.md`
- `docs/HANDOFF.md`
- `TASKS.md`

Geänderte Dateien in Erweiterung 0.0.6:

- `index.html`
- `styles/main.css`
- `src/main.js`
- `src/state.js`
- `src/world.js`
- `src/resources.js`
- `src/ui.js`
- `data/world_start.json`
- `assets/ui/favicon.png`
- `favicon.ico`
- `README.md`
- `docs/ASSET_GUIDE.md`
- `docs/CHANGELOG.md`
- `docs/VERSION_STATE.md`
- `docs/HANDOFF.md`

---

## 3. Nächster notwendiger Schritt

Der nächste Codex-Agent soll in `TASKS.md` die erste offene Aufgabe bearbeiten:

```text
TASK-005 – Bauplatz auswählen und Aktionspanel anzeigen
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

## 6. Testanleitung nach TASK-004

Nach dem Sammel-Loop:

1. `index.html` lokal im Browser öffnen.
2. Prüfen, ob Inventar links Geld, Holz, Stein, Metall und Hausstufe mit Wert 0 zeigt.
3. 6x denselben Baum anklicken und prüfen, ob Holz auf 12 steigt, der Baum kleiner wird und dann verschwindet.
4. Einen weiteren Klick auf den erschöpften Baum versuchen; Holz darf nicht weiter steigen.
5. 5x denselben Steinhaufen anklicken und prüfen, ob Stein auf 10 steigt und der Steinhaufen verschwindet.
6. 4x Schrott anklicken und prüfen, ob Metall auf 4 steigt und Schrott verschwindet.
7. Prüfen, ob Floating-Text kurz erscheint und wieder verschwindet.
8. DevTools-Konsole prüfen, ob keine JavaScript-Fehler auftreten.

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
Aktuellen Stand mit `git log -1 --oneline` prüfen. Der erste erfolgreich deployte Basisstand war fc13842.
```

---

## 8. Bekannte offene Entscheidungen

- finaler Projektname: aktuell `Startup Valley`
- Grafikstil: moderne 2D-/Top-Down-/leicht isometrische Richtung
- Assets: aktuelle PNGs sind hochwertige Platzhalter und dürfen später unter gleichem Dateinamen ersetzt werden
- Wunsch für nächsten Asset-Pass: Weltobjekte fotorealistischer ausarbeiten, ohne Dateinamen zu ändern
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
