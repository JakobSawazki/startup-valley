# HANDOFF – Übergabe an den nächsten Codex-Agenten

Diese Datei muss nach jedem abgeschlossenen Arbeitsschritt aktualisiert werden.

---

## 1. Aktueller Stand

- **Projekt:** Startup Valley
- **Version:** 0.0.9-market
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
- Ausbau verbraucht Ressourcen, erhöht das Hauslevel und wechselt die Hausgrafik.
- Hausstufen sind bis Level 3 definiert und die Maximalstufe wird sauber erkannt.
- Marktpanel öffnet bei Klick auf den Markt.
- Holz und Stein können in Mengen `1`, `5`, `10` oder `Alles` verkauft werden.
- Holz verkauft für `2 EUR` pro Einheit, Stein für `3 EUR` pro Einheit.
- Verkauf aktualisiert sofort Geld, Ressourcen und HUD.
- Speichern/Laden ist noch nicht umgesetzt; das ist `TASK-008`.

Letzter bestätigter lokaler Test:

- JS-Syntaxcheck mit gebündelter Node-Laufzeit erfolgreich.
- State-Harness für Gebäudeausbau erfolgreich: alle drei Stufen, Kostenabzug und Maximalstufe geprüft.
- State-Harness für Markt erfolgreich: kein Verkauf ohne Bestand, 5 Holz für 10 EUR, Stein `Alles` für 21 EUR bei 7 Stein.
- Browser-Smoke-Test über temporären Static-Server `http://127.0.0.1:8765/` erfolgreich.
- TASK-006 Browserpfad geprüft: Ressourcen sammeln, `Fundament bauen`, Hausstufe 1, Grafik `house_01_foundation.png`.
- TASK-007 Browserpfad geprüft: 5x Baum = 10 Holz, Markt öffnen, 5 Holz verkaufen.
- Nach Verkauf: Geld `10 EUR`, Holz `5`, Steinverkauf ohne Stein deaktiviert.
- Browser-Konsole: keine Warnungen oder Fehler.

---

## 2. Was existiert aktuell?

Enthalten:

- `index.html` mit sichtbarem Spielbereich, HUD, Kontextpanel und Version `0.0.9`
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
- Marktgrafik `assets/buildings/market_01.png`
- realistischere transparente PNG-Icons in `assets/ui/icons/`
- Favicon / Tab-Icon: `assets/ui/favicon.png` und `favicon.ico`
- `data/world_start.json`
- Projekt- und Codex-Dokumentation
- GitHub-Pages-Workflow

Geänderte Dateien in `TASK-007` / Version `0.0.9-market`:

- `index.html`
- `styles/main.css`
- `src/main.js`
- `src/state.js`
- `src/ui.js`
- `README.md`
- `TASKS.md`
- `docs/CHANGELOG.md`
- `docs/VERSION_STATE.md`
- `docs/HANDOFF.md`

---

## 3. Nächster notwendiger Schritt

Der nächste Codex-Agent soll in `TASKS.md` die erste offene Aufgabe bearbeiten:

```text
TASK-008 – Lokales Speichern, Laden und Zurücksetzen
```

TASK-008 soll Persistenz ergänzen:

- `src/savegame.js`
- Button `Speichern`
- Button `Laden`
- Button `Neustart`
- localStorage-Key `startup_valley_save_v1`
- Fehlerhafte Speicherstände abfangen

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

## 6. Testanleitung nach TASK-007

1. Lokalen Static-Server im Projektordner starten, z. B. `python -m http.server 8765 --bind 127.0.0.1`.
2. `http://127.0.0.1:8765/` im Browser öffnen.
3. Prüfen, ob Version `0.0.9` angezeigt wird.
4. 5x einen Baum anklicken, damit Holz auf 10 steigt.
5. Markt anklicken.
6. Prüfen, ob Holz und Stein mit Bestand, Preis und Buttons `1`, `5`, `10`, `Alles` angezeigt werden.
7. Bei Holz den Button `5` klicken.
8. Prüfen, ob Geld auf `10 EUR` steigt und Holz auf `5` sinkt.
9. Prüfen, ob Stein-Verkaufsbuttons bei Bestand 0 deaktiviert sind.
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
- Wirtschaftsbalance ist noch provisorisch; Verkaufspreise sind bewusst einfach

---

## 9. Nicht vergessen

Nach jeder Arbeit:

- TASKS aktualisieren
- CHANGELOG aktualisieren
- VERSION_STATE aktualisieren
- HANDOFF aktualisieren
- Git committen und pushen
- bei Deployment-relevanten Änderungen GitHub Pages prüfen
