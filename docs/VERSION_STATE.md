# VERSION_STATE – Startup Valley

---

## Aktuelle Version

```text
0.0.6-depletion
```

---

## Aktueller Zustand

Das Projekt besitzt eine lauffähige Browser-Grundstruktur mit grafischer Startwelt, zentralem Spielzustand, aufgewertetem Inventar/HUD und erschöpfbaren Ressourcenquellen.

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
- Ressourcenquellen haben begrenzte Abbaupunkte, schrumpfen pro Klick und verschwinden bei 0
- erschöpfte Ressourcenquellen sind deaktiviert und nicht weiter abbaubar
- HUD/Inventar mit korrekten Startwerten 0 für Geld, Holz, Stein, Metall und Hausstufe
- HUD aktualisiert sich sofort nach Sammelaktionen
- Floating-Text zeigt den erhaltenen Ressourcenwert
- Favicon und Browser-Tab-Icon unter `assets/ui/favicon.png` und `favicon.ico`
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
Ressourcenquellen sind erschöpfbar: Bäume haben 6 Abbaupunkte, Steinhaufen 5 und Schrott 4. Quellen werden kleiner, verschwinden bei 0 und erhöhen danach keine Ressourcen mehr.
```

---

## Bekannte Risiken

- Projekt könnte zu früh zu groß werden.
- Zu viele Ressourcen am Anfang könnten UX überladen.
- GitHub Pages kann bei falschen Pfaden CSS/JS nicht laden.
- Wenn mehrere Laptops ohne `git pull` arbeiten, entstehen Konflikte.
- Vollständige Spielmechanik fehlt noch; online ist aktuell die Startwelt mit Inventar, manuellem Sammeln und erschöpfbaren Ressourcenquellen.
- GitHub-Actions-Warnungen zu Node-Versionen weiter beobachten; Workflow setzt bereits `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24`.
- Der generierte Hintergrund enthält dekorative Marktelemente; die spielrelevanten Objekte liegen trotzdem als separate austauschbare PNGs darüber.

---

## Nächster Schritt

```text
TASK-005 – Bauplatz auswählen und Aktionspanel anzeigen
```
