# VERSION_STATE – Startup Valley

---

## Aktuelle Version

```text
0.0.4-hud
```

---

## Aktueller Zustand

Das Projekt besitzt eine lauffähige Browser-Grundstruktur mit grafischer Startwelt, zentralem Spielzustand und aufgewertetem Inventar/HUD.

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
- sichtbarer Spielbereich mit PNG-Hintergrund
- klickbare Weltobjekte: 3 Bäume, 2 Steinhaufen, Schrott, Bauplatz, Markt
- HUD/Inventar mit korrekten Startwerten 0 für Geld, Holz, Stein, Metall und Hausstufe
- hochwertige realistischere PNG-Icons für Geld, Holz, Stein und Metall
- Hover-/Focus-Tooltips für Inventar und Weltobjekte
- Kontextpanel mit vorbereiteten Interaktionshinweisen
- austauschbare PNG-Assets unter `assets/backgrounds/`, `assets/resources/`, `assets/buildings/` und `assets/ui/icons/`
- `data/world_start.json` als vorbereitete Datenreferenz

Noch nicht implementiert:

- Ressourcenlogik: Klicks wählen aktuell nur Objekte aus; Sammeln startet in TASK-004
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
TASK-003 abgeschlossen: Inventar/HUD rendert Geld, Holz, Stein, Metall und Hausstufe aus zentralem gameState mit Startwert 0. Objektklicks aktualisieren das Kontextpanel, verändern aber noch keine Ressourcen.
```

---

## Bekannte Risiken

- Projekt könnte zu früh zu groß werden.
- Zu viele Ressourcen am Anfang könnten UX überladen.
- GitHub Pages kann bei falschen Pfaden CSS/JS nicht laden.
- Wenn mehrere Laptops ohne `git pull` arbeiten, entstehen Konflikte.
- Vollständige Spielmechanik fehlt noch; online ist aktuell die statische Startwelt mit Inventar aus TASK-003.
- GitHub-Actions-Warnungen zu Node-Versionen weiter beobachten; Workflow setzt bereits `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24`.
- Der generierte Hintergrund enthält dekorative Marktelemente; die spielrelevanten Objekte liegen trotzdem als separate austauschbare PNGs darüber.

---

## Nächster Schritt

```text
TASK-004 – Manuelles Ressourcensammeln implementieren
```
