# VERSION_STATE – Startup Valley

---

## Aktuelle Version

```text
0.0.1
```

---

## Aktueller Zustand

Das Projekt besitzt eine erste lauffähige Browser-Grundstruktur.

Implementiert:

- `index.html`
- `styles/main.css`
- `src/main.js`
- `src/state.js`
- `src/ui.js`
- sichtbarer Spielbereich mit Platzhalterwelt
- HUD-Platzhalter mit Geld, Holz, Stein, Metall und Hausstufe
- `assets/` und `data/` Grundstruktur

Noch nicht implementiert:

- klickbare Weltobjekte
- Ressourcenlogik
- Bauplatzlogik
- Marktlogik
- Speichern/Laden

- Codex-Briefing
- Aufgabenplan
- technische Spezifikation
- Datenmodell
- UI/UX-Konzept
- Asset-Leitfaden
- GitHub-Deployment-Anleitung
- GitHub-Pages-Workflow-Vorlage

---

## Zielversion 0.1.0

Version 0.1.0 ist erreicht, wenn:

- Startwelt sichtbar ist
- Ressourcen manuell gesammelt werden können
- HUD korrekt aktualisiert wird
- Bauplatz auswählbar ist
- Hauptgebäude mindestens drei Ausbaustufen besitzt
- Markt Ressourcen verkaufen kann
- Spielstand lokal gespeichert und geladen werden kann
- GitHub Pages online funktioniert

---

## Technische Entscheidungen

| Bereich | Entscheidung |
|---|---|
| Plattform | Browser |
| Sprache | HTML, CSS, JavaScript |
| Framework | zunächst keines |
| Rendering | DOM-basiert |
| Speicherung | localStorage |
| Hosting | GitHub Pages |
| Repository | GitHub |
| Assets | PNG, später austauschbar |

---

## Letzter stabiler Stand

```text
TASK-001 abgeschlossen: index.html rendert Startup Valley mit HUD und Spielbereich. JavaScript und CSS werden über relative Pfade geladen.
```

---

## Bekannte Risiken

- Projekt könnte zu früh zu groß werden.
- Zu viele Ressourcen am Anfang könnten UX überladen.
- GitHub Pages kann bei falschen Pfaden CSS/JS nicht laden.
- Wenn mehrere Laptops ohne `git pull` arbeiten, entstehen Konflikte.
- Im Projektordner existiert aktuell noch kein Git-Repository; GitHub-Remote und Pages-URL sind noch offen.

---

## Nächster Schritt

```text
TASK-002 – Startwelt als statische Szene anzeigen
```
