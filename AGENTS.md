# AGENTS.md – Arbeitsregeln für Codex-Agenten

Diese Datei ist für jeden Codex-Agenten verbindlich. Sie beschreibt, wie in diesem Repository gearbeitet wird.

---

## 1. Grundregel

Arbeite immer so, dass ein anderer Codex-Agent auf einem anderen Laptop das Projekt später ohne Kontextverlust übernehmen kann.

Das bedeutet:

- Änderungen klein halten
- Dokumentation aktualisieren
- Aufgabenstatus sauber pflegen
- keine versteckten Annahmen treffen
- keine großen, ungeplanten Umbauten durchführen
- nach jedem sinnvollen Schritt lauffähigen Zustand herstellen

---

## 2. Pflichtlektüre vor jeder Arbeit

Vor jeder Implementierung müssen gelesen werden:

1. `README.md`
2. `CODEX_BRIEFING_AUFBAU_AG.md`
3. `TASKS.md`
4. `docs/VERSION_STATE.md`
5. `docs/CHANGELOG.md`
6. `docs/TECHNICAL_SPEC.md`

Wenn es um Grafik, Assets oder UI geht zusätzlich:

- `docs/ASSET_GUIDE.md`
- `docs/UI_UX_SPEC.md`

Wenn es um GitHub, Deployment oder Laptop-Wechsel geht zusätzlich:

- `docs/GITHUB_DEPLOYMENT.md`
- `docs/HANDOFF.md`

---

## 3. Task-Regel

Bearbeite immer nur die **erste Aufgabe mit Status `OPEN`** in `TASKS.md`.

Ablauf:

1. Aufgabe in `TASKS.md` von `OPEN` auf `IN_PROGRESS` setzen.
2. Nur den Umfang dieser Aufgabe bearbeiten.
3. Lokal testen.
4. Relevante Dokumentation aktualisieren.
5. Aufgabe auf `DONE` setzen, wenn alle Akzeptanzkriterien erfüllt sind.
6. Kurzen Eintrag in `docs/CHANGELOG.md` ergänzen.
7. `docs/VERSION_STATE.md` aktualisieren.

Keine zweite Aufgabe beginnen, solange die erste nicht abgeschlossen ist.

---

## 4. Technische Einschränkungen für frühe Versionen

Bis einschließlich Version 0.2.x gilt:

- Kein React, Vue, Angular oder Svelte.
- Keine Node-Abhängigkeiten, wenn Vanilla HTML/CSS/JS genügt.
- Keine Serverlogik.
- Keine Datenbank.
- Keine externen CDN-Abhängigkeiten.
- Keine großen Grafikbibliotheken.
- Kein Canvas-Zwang, solange DOM-Objekte ausreichen.

Ziel ist ein robustes, verständliches, schulisch und privat nachvollziehbares Webspiel.

---

## 5. Code-Stil

- Verwende sprechende Namen.
- Halte Funktionen klein.
- Trenne Daten, Darstellung und Logik möglichst sauber.
- Verwende einfache JavaScript-Module, sobald mehrere Dateien sinnvoll sind.
- Schreibe Kommentare nur dort, wo sie echte Erklärung liefern.
- Entferne toten Code.
- Vermeide globale Seiteneffekte, soweit praktikabel.

---

## 6. Dateistruktur-Ziel

Angestrebte Struktur nach den ersten Implementierungsschritten:

```text
.
├── index.html
├── README.md
├── AGENTS.md
├── CODEX_BRIEFING_AUFBAU_AG.md
├── TASKS.md
├── styles/
│   └── main.css
├── src/
│   ├── main.js
│   ├── state.js
│   ├── world.js
│   ├── resources.js
│   ├── buildings.js
│   ├── market.js
│   ├── savegame.js
│   └── ui.js
├── data/
│   ├── resources.json
│   ├── buildings.json
│   ├── market.json
│   └── quests.json
├── assets/
│   ├── backgrounds/
│   ├── buildings/
│   ├── resources/
│   └── ui/
├── docs/
└── .github/workflows/deploy.yml
```

---

## 7. Git-Regeln

Jeder abgeschlossene Task soll einen sinnvollen Commit erhalten.

Commit-Format:

```text
feat: add clickable resource collection
fix: correct build cost validation
docs: update handoff after deployment setup
chore: initialize project structure
```

Nicht mehrere große, unabhängige Änderungen in einen Commit packen.

---

## 8. Tests und Smoke-Checks

Nach jeder Aufgabe mindestens prüfen:

- `index.html` öffnet ohne Konsolenfehler.
- Ressourcenanzeige bleibt korrekt.
- Klickaktionen funktionieren mehrfach.
- Keine negativen Ressourcen entstehen.
- Speichern/Laden beschädigt den Zustand nicht.
- GitHub Pages Deployment bleibt unverändert oder wird bewusst aktualisiert.

Für jeden Task in `TASKS.md` sind konkrete Akzeptanzkriterien angegeben.

---

## 9. Keine ungefragten Änderungen

Nicht ungefragt ändern:

- Projektname
- Grundspielprinzip
- Zielplattform
- Deployment-Strategie
- Dokumentationsstruktur
- Grafikstil-Grundrichtung

Wenn eine größere Änderung sinnvoll erscheint, in `docs/OPEN_DECISIONS.md` dokumentieren, aber nicht sofort umsetzen.

---

## 10. Übergabe an den nächsten Agenten

Nach jeder Arbeit muss `docs/HANDOFF.md` so aktualisiert werden, dass ein neuer Codex-Agent sofort sieht:

- Was wurde erledigt?
- Was funktioniert?
- Was ist offen?
- Welche Dateien wurden geändert?
- Wie wird getestet?
- Welcher Task ist als nächstes dran?
