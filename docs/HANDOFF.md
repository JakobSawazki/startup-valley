# HANDOFF – Übergabe an den nächsten Codex-Agenten

Diese Datei muss nach jedem abgeschlossenen Arbeitsschritt aktualisiert werden.

---

## 1. Aktueller Stand

- **Projekt:** Startup Valley
- **Version:** 0.0.7-build-panel
- **Deployment:** GitHub Pages über Workflow auf `main`
- **Repository:** https://github.com/JakobSawazki/startup-valley
- **GitHub Pages URL:** https://jakobsawazki.github.io/startup-valley/

Aktueller stabiler Stand:

- Browser-Spiel läuft statisch über `index.html`.
- HUD zeigt Geld, Holz, Stein, Metall und Hausstufe mit Startwert 0.
- Startwelt zeigt PNG-Hintergrund und klickbare Weltobjekte.
- Ressourcenquellen sind begrenzt abbaubar, schrumpfen und verschwinden bei 0.
- Ressourcen-Sprites für Bäume, Steinhaufen und Schrott sind jetzt realistischere transparente PNGs.
- Bauplatzpanel öffnet bei Klick auf den Bauplatz.
- Panel zeigt aktuelle Stufe, nächste Stufe und Anforderungen für `Fundament`.
- Ausbau-Button ist ohne Ressourcen deaktiviert und bei 10 Holz + 20 Stein aktiv.
- Der Button verbraucht noch keine Ressourcen und wechselt noch keine Gebäudegrafik; das ist `TASK-006`.

Letzter bestätigter lokaler Test:

- JS-Syntaxcheck mit gebündelter Node-Laufzeit erfolgreich.
- Browser-Smoke-Test über temporären Static-Server `http://127.0.0.1:8765/` erfolgreich.
- Geprüft: Version `0.0.7`, 8 Weltobjekte, neue Ressourcen-PNG-Pfade, HUD Startwerte 0.
- Bauplatz ohne Ressourcen: Panel erscheint, Anforderungen zeigen Holz `0 / 10`, Stein `0 / 20`, Button deaktiviert.
- Danach gesammelt: 5x Baum = 10 Holz, 5x `stone_01` + 5x `stone_02` = 20 Stein.
- Bauplatz mit Ressourcen: Anforderungen zeigen Holz `10 / 10`, Stein `20 / 20`, Button aktiv.
- Beide Steinhaufen waren nach 5 Klicks deaktiviert und `is-depleted`.
- Browser-Konsole: keine Warnungen oder Fehler.

Hinweis zum Browser-Test:

- Ein Screenshot-Versuch über das Browser-Tool ist einmal in `Page.captureScreenshot` getimeoutet; der DOM-/Interaktionstest selbst war erfolgreich.

---

## 2. Was existiert aktuell?

Enthalten:

- `index.html` mit sichtbarem Spielbereich, HUD, Kontextpanel und Version `0.0.7`
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
- realistischere transparente PNG-Icons in `assets/ui/icons/`
- Favicon / Tab-Icon: `assets/ui/favicon.png` und `favicon.ico`
- `data/world_start.json`
- Projekt- und Codex-Dokumentation
- GitHub-Pages-Workflow

Geänderte Dateien in `TASK-005` / Version `0.0.7-build-panel`:

- `index.html`
- `styles/main.css`
- `src/main.js`
- `src/state.js`
- `src/ui.js`
- `src/world.js`
- `assets/resources/tree_01.png`
- `assets/resources/tree_02.png`
- `assets/resources/tree_03.png`
- `assets/resources/stone_01.png`
- `assets/resources/stone_02.png`
- `assets/resources/scrap_01.png`
- `README.md`
- `TASKS.md`
- `docs/ASSET_GUIDE.md`
- `docs/CHANGELOG.md`
- `docs/VERSION_STATE.md`
- `docs/HANDOFF.md`

---

## 3. Nächster notwendiger Schritt

Der nächste Codex-Agent soll in `TASKS.md` die erste offene Aufgabe bearbeiten:

```text
TASK-006 – Gebäudestufen und Ressourcenverbrauch umsetzen
```

TASK-006 soll den vorhandenen Ausbau-Button tatsächlich ausführen lassen:

- Ressourcenprüfung wiederverwenden
- Kosten abziehen
- Hauslevel erhöhen
- passende Gebäudegrafik anzeigen
- HUD und Kontextpanel aktualisieren
- Maximalstufe beachten

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

## 6. Testanleitung nach TASK-005

1. Lokalen Static-Server im Projektordner starten, z. B. `python -m http.server 8765 --bind 127.0.0.1`.
2. `http://127.0.0.1:8765/` im Browser öffnen.
3. Prüfen, ob Inventar Geld, Holz, Stein, Metall und Hausstufe mit Wert 0 zeigt.
4. Bauplatz anklicken.
5. Prüfen, ob das Panel `Bauplatz · Stufe 0`, `Nächste Stufe: Fundament`, Holz `0 / 10`, Stein `0 / 20` und einen deaktivierten Button zeigt.
6. 5x einen Baum anklicken, damit Holz auf 10 steigt.
7. 5x `stone_01` und 5x `stone_02` anklicken, damit Stein auf 20 steigt.
8. Bauplatz erneut anklicken.
9. Prüfen, ob Holz `10 / 10`, Stein `20 / 20` und der Button aktiv ist.
10. DevTools-Konsole prüfen, ob keine JavaScript-Fehler auftreten.

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

---

## 9. Nicht vergessen

Nach jeder Arbeit:

- TASKS aktualisieren
- CHANGELOG aktualisieren
- VERSION_STATE aktualisieren
- HANDOFF aktualisieren
- Git committen und pushen
- bei Deployment-relevanten Änderungen GitHub Pages prüfen
