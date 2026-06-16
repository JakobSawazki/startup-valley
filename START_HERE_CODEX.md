# START_HERE_CODEX – Einstieg für Codex

Diese Datei ist die erste Orientierung für einen neuen Codex-Agenten.

---

## 1. Projekt in einem Satz

**Startup Valley** ist eine browserbasierte klickbare Wirtschafts- und Aufbausimulation, bei der der Spieler ohne Geld und Ressourcen startet, manuell Rohstoffe sammelt, ein Firmengebäude errichtet, Ressourcen verkauft und später Arbeiter, Maschinen und neue Gebiete freischaltet.

---

## 2. Sofort lesen

Bitte in dieser Reihenfolge lesen:

1. `AGENTS.md`
2. `README.md`
3. `CODEX_BRIEFING_AUFBAU_AG.md`
4. `TASKS.md`
5. `docs/VERSION_STATE.md`
6. `docs/HANDOFF.md`
7. `docs/TECHNICAL_SPEC.md`

---

## 3. Sofortige Arbeitsregel

Bearbeite nur die erste Aufgabe mit Status `OPEN` in `TASKS.md`.

Nicht mehrere Tasks gleichzeitig bearbeiten.

---

## 4. Aktueller nächster Task

```text
TASK-001 – Projektstruktur initialisieren
```

---

## 5. Ziel der ersten Codex-Session

Nach der ersten Codex-Session soll mindestens Folgendes existieren:

- `index.html`
- `styles/main.css`
- `src/main.js`
- sichtbarer Spielbereich
- sichtbarer HUD-Platzhalter
- keine Browser-Konsolenfehler
- aktualisierte Dateien:
  - `TASKS.md`
  - `docs/CHANGELOG.md`
  - `docs/VERSION_STATE.md`
  - `docs/HANDOFF.md`

---

## 6. Projekt nicht überkomplizieren

Für Version 0.1 gilt:

- kein Framework
- kein Backend
- keine Datenbank
- kein Multiplayer
- keine komplexe Engine
- kein Build-Prozess, solange nicht nötig

Erst ein kleines, stabiles, spielbares Grundsystem bauen.

---

## 7. GitHub-Ziel

Das Projekt soll am Ende auf GitHub liegen und über GitHub Pages online sein.

Deployment-Datei ist vorbereitet:

```text
.github/workflows/deploy.yml
```

Die Details stehen in:

```text
docs/GITHUB_DEPLOYMENT.md
```

---

## 8. Kopierbarer Arbeitsauftrag an Codex

```text
Lies START_HERE_CODEX.md, AGENTS.md, README.md, CODEX_BRIEFING_AUFBAU_AG.md, TASKS.md, docs/VERSION_STATE.md und docs/HANDOFF.md. Bearbeite ausschließlich die erste OPEN-Aufgabe in TASKS.md. Setze sie vor Beginn auf IN_PROGRESS, teste lokal, aktualisiere die Dokumentation und setze sie nur bei erfüllten Akzeptanzkriterien auf DONE.
```
