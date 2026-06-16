# VERSION_STATE – Startup Valley

---

## Aktuelle Version

```text
0.0.5-collection
```

---

## Aktueller Zustand

Das Projekt besitzt eine lauffähige Browser-Grundstruktur mit grafischer Startwelt, zentralem Spielzustand, aufgewertetem Inventar/HUD und erstem Ressourcen-Sammelloop.

Online erreichbar:

- Repository: `https://github.com/JakobSawazki/startup-valley`
- GitHub Pages: `https://jakobsawazki.github.io/startup-valley/`

Implementiert:

- `index.html`
- `styles/main.css`
- `src/main.js`
- `src/state.js`
- `src/ui.js`
- `src/world.js`
- zentraler `gameState` in `src/state.js`
- Ressourcen-Metadaten für Geld, Holz, Stein und Metall
- `src/resources.js` mit manueller Sammellogik
- sichtbarer Spielbereich mit PNG-Hintergrund
- klickbare Weltobjekte: 3 Bäume, 2 Steinhaufen, Schrott, Bauplatz, Markt
- Baumklick erhöht Holz um 2
- Steinklick erhöht Stein um 2
- Schrottklick erhöht Metall um 1
- HUD/Inventar mit korrekten Startwerten 0 für Geld, Holz, Stein, Metall und Hausstufe
- HUD aktualisiert sich sofort nach Sammelaktionen
- Floating-Text zeigt den erhaltenen Ressourcenwert
- hochwertige realistischere PNG-Icons für Geld, Holz, Stein und Metall
- Hover-/Focus-Tooltips für Inventar und Weltobjekte
- Kontextpanel mit vorbereiteten Interaktionshinweisen
- austauschbare PNG-Assets unter `assets/backgrounds/`, `assets/resources/`, `assets/buildings/` und `assets/ui/icons/`
- `data/world_start.json` als vorbereitete Datenreferenz

Noch nicht implementiert:

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
TASK-004 abgeschlossen: Ressourcenquellen erhöhen den zentralen gameState und aktualisieren das Inventar sofort. 5 Baumklicks ergeben Holz 10, 3 Steinklicks ergeben Stein 6.
```

---

## Bekannte Risiken

- Projekt könnte zu früh zu groß werden.
- Zu viele Ressourcen am Anfang könnten UX überladen.
- GitHub Pages kann bei falschen Pfaden CSS/JS nicht laden.
- Wenn mehrere Laptops ohne `git pull` arbeiten, entstehen Konflikte.
- Vollständige Spielmechanik fehlt noch; online ist aktuell die Startwelt mit Inventar und manuellem Sammeln aus TASK-004.
- GitHub-Actions-Warnungen zu Node-Versionen weiter beobachten; Workflow setzt bereits `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24`.
- Der generierte Hintergrund enthält dekorative Marktelemente; die spielrelevanten Objekte liegen trotzdem als separate austauschbare PNGs darüber.

---

## Nächster Schritt

```text
TASK-005 – Bauplatz auswählen und Aktionspanel anzeigen
```
