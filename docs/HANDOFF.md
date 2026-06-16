# HANDOFF – Übergabe an den nächsten Codex-Agenten

Diese Datei muss nach jedem abgeschlossenen Arbeitsschritt aktualisiert werden.

---

## 1. Aktueller Stand

- **Projekt:** Startup Valley
- **Version:** 0.0.8-building-upgrades
- **Deployment:** GitHub Pages über Workflow auf `main`
- **Repository:** https://github.com/JakobSawazki/startup-valley
- **GitHub Pages URL:** https://jakobsawazki.github.io/startup-valley/

Aktueller stabiler Stand:

- Browser-Spiel läuft statisch über `index.html`.
- HUD zeigt Geld, Holz, Stein, Metall und Hausstufe mit Startwert 0.
- Startwelt zeigt PNG-Hintergrund und klickbare Weltobjekte.
- Ressourcenquellen sind begrenzt abbaubar, schrumpfen und verschwinden bei 0.
- Ressourcen-Sprites für Bäume, Steinhaufen und Schrott sind realistischere transparente PNGs.
- Bauplatzpanel öffnet bei Klick auf den Bauplatz.
- Panel zeigt aktuelle Stufe, nächste Stufe und Anforderungen.
- Ausbau-Button ist ohne Ressourcen deaktiviert und bei ausreichenden Ressourcen aktiv.
- Ausbau verbraucht Ressourcen, erhöht das Hauslevel und wechselt die Hausgrafik.
- Hausstufen sind bis Level 3 definiert und die Maximalstufe wird sauber erkannt.
- Marktlogik ist noch nicht umgesetzt; das ist `TASK-007`.

Letzter bestätigter lokaler Test:

- JS-Syntaxcheck mit gebündelter Node-Laufzeit erfolgreich.
- State-Harness erfolgreich: fehlende Ressourcen werden erkannt; Level 1, 2 und 3 ziehen die korrekten Kosten ab; nach Level 3 gibt es keine nächste Stufe; Ressourcen werden nicht negativ.
- Browser-Smoke-Test über temporären Static-Server `http://127.0.0.1:8765/` erfolgreich.
- Geprüft: Version `0.0.8`, HUD Startwerte, Ressourcen sammeln, Bauplatz öffnen, `Fundament bauen` klicken.
- Nach Ausbau: Holz `0`, Stein `0`, Hausstufe `1`, Objektlabel `Fundament`, Objektgrafik `assets/buildings/house_01_foundation.png`.
- Bauplatzpanel zeigt danach `Rohbau` als nächste Stufe und fehlende Kosten für Holz, Stein und Metall.
- Browser-Konsole: keine Warnungen oder Fehler.

---

## 2. Was existiert aktuell?

Enthalten:

- `index.html` mit sichtbarem Spielbereich, HUD, Kontextpanel und Version `0.0.8`
- `styles/main.css`
- `src/main.js`, `src/state.js`, `src/ui.js`, `src/world.js`
- `src/resources.js`
- PNG-Hintergrund `assets/backgrounds/start_area.png`
- transparente PNG-Objekte in `assets/resources/` und `assets/buildings/`
- realistischere transparente Ressourcen-Sprites:
  - `assets/resources/tree_01.png`
  - `assets/resources/tree_02.png`
  - `assets/resources/tree_03.png`
  - `assets/resources/stone_01.png`
  - `assets/resources/stone_02.png`
  - `assets/resources/scrap_01.png`
- Gebäudestufen-Grafiken:
  - `assets/buildings/house_00_plot.png`
  - `assets/buildings/house_01_foundation.png`
  - `assets/buildings/house_02_frame.png`
  - `assets/buildings/house_03_finished.png`
- realistischere transparente PNG-Icons in `assets/ui/icons/`
- Favicon / Tab-Icon: `assets/ui/favicon.png` und `favicon.ico`
- `data/world_start.json`
- Projekt- und Codex-Dokumentation
- GitHub-Pages-Workflow

Geänderte Dateien in `TASK-006` / Version `0.0.8-building-upgrades`:

- `index.html`
- `styles/main.css`
- `src/main.js`
- `src/state.js`
- `src/ui.js`
- `src/world.js`
- `README.md`
- `TASKS.md`
- `docs/CHANGELOG.md`
- `docs/VERSION_STATE.md`
- `docs/HANDOFF.md`

---

## 3. Nächster notwendiger Schritt

Der nächste Codex-Agent soll in `TASKS.md` die erste offene Aufgabe bearbeiten:

```text
TASK-007 – Markt mit Verkauf einbauen
```

TASK-007 soll den Markt interaktiv machen:

- Klick auf Markt öffnet Marktpanel.
- Verkauf von Holz und Stein.
- Verkaufspreise zentral definieren.
- Mengen `1`, `5`, `10` und `Alles` anbieten.
- Geld steigt, verkaufte Ressource sinkt.

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
8. `docs/GITHUB_DEPLOYMENT.md`

---

## 5. Arbeitsanweisung für Codex

Kopierbarer Startprompt für Codex:

```text
Du arbeitest am Projekt "Startup Valley", einer browserbasierten klickbaren Wirtschafts- und Aufbausimulation. Lies zuerst README.md, AGENTS.md, CODEX_BRIEFING_AUFBAU_AG.md, TASKS.md, docs/VERSION_STATE.md und docs/HANDOFF.md. Bearbeite ausschließlich die erste Aufgabe mit Status OPEN in TASKS.md. Setze sie vor Beginn auf IN_PROGRESS, arbeite nur ihren Umfang ab, teste lokal, aktualisiere CHANGELOG.md, VERSION_STATE.md und HANDOFF.md und setze die Aufgabe erst dann auf DONE, wenn alle Akzeptanzkriterien erfüllt sind.
```

---

## 6. Testanleitung nach TASK-006

1. Lokalen Static-Server im Projektordner starten, z. B. `python -m http.server 8765 --bind 127.0.0.1`.
2. `http://127.0.0.1:8765/` im Browser öffnen.
3. Prüfen, ob Version `0.0.8` und Hausstufe `0` angezeigt werden.
4. Bauplatz anklicken und prüfen, ob `Fundament bauen` ohne Ressourcen deaktiviert ist.
5. 5x einen Baum anklicken, damit Holz auf 10 steigt.
6. 5x `stone_01` und 5x `stone_02` anklicken, damit Stein auf 20 steigt.
7. Bauplatz erneut anklicken und `Fundament bauen` klicken.
8. Prüfen, ob Holz und Stein auf 0 sinken.
9. Prüfen, ob Hausstufe auf 1 steigt.
10. Prüfen, ob das Weltobjekt als `Fundament` angezeigt wird und `house_01_foundation.png` nutzt.
11. DevTools-Konsole prüfen, ob keine JavaScript-Fehler auftreten.

---

## 7. GitHub-Handshake

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
Aktuellen Stand mit `git log -1 --oneline` prüfen.
```

---

## 8. Bekannte offene Entscheidungen

- finaler Projektname: aktuell `Startup Valley`
- Grafikstil: moderne 2D-/Top-Down-/leicht isometrische Richtung
- Assets: PNG-Dateinamen stabil halten, damit Grafiken später einfach ersetzt werden können
- nächster Asset-Pass: Bauplatz, Markt und Hausstufen fotorealistischer ausarbeiten
- Repositoryname: `startup-valley`
- Repository ist öffentlich für einfaches Pages-Deployment
- Wirtschaftsbalance ist noch provisorisch; der Markt soll als nächster Schritt Geldfluss ermöglichen

---

## 9. Nicht vergessen

Nach jeder Arbeit:

- TASKS aktualisieren
- CHANGELOG aktualisieren
- VERSION_STATE aktualisieren
- HANDOFF aktualisieren
- Git committen und pushen
- bei Deployment-relevanten Änderungen GitHub Pages prüfen
