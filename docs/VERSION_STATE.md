# VERSION_STATE – Startup Valley

---

## Aktuelle Version

```text
0.0.9-market
```

---

## Aktueller Zustand

Das Projekt besitzt eine lauffähige Browser-Grundstruktur mit grafischer Startwelt, zentralem Spielzustand, aufgewertetem Inventar/HUD, erschöpfbaren Ressourcenquellen, Gebäudestufen-Ausbau und einem ersten Marktverkauf.

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
- `src/resources.js`
- zentraler `gameState` in `src/state.js`
- Ressourcen-Metadaten für Geld, Holz, Stein und Metall
- zentrale Gebäudestufen und Baukosten für das Hauptgebäude
- zentrale Marktpreise und Verkaufsmengen
- sichtbarer Spielbereich mit PNG-Hintergrund
- klickbare Weltobjekte: 3 Bäume, 2 Steinhaufen, Schrott, Bauplatz, Markt
- Baumklick erhöht Holz um 2
- Steinklick erhöht Stein um 2
- Schrottklick erhöht Metall um 1
- Ressourcenquellen haben begrenzte Abbaupunkte, schrumpfen pro Klick und verschwinden bei 0
- erschöpfte Ressourcenquellen sind deaktiviert und nicht weiter abbaubar
- HUD/Inventar mit korrekten Startwerten 0 für Geld, Holz, Stein, Metall und Hausstufe
- HUD aktualisiert sich sofort nach Sammelaktionen, Ausbauaktionen und Marktverkäufen
- Floating-Text zeigt den erhaltenen Ressourcenwert
- Bauplatzpanel zeigt aktuelle Stufe, nächste Stufe und Anforderungen
- Ausbau-Button ist ohne Ressourcen deaktiviert und bei erfüllten Anforderungen aktiv
- Ausbau verbraucht die korrekten Ressourcen
- Hauslevel steigt bis maximal Stufe 3
- Hausgrafik, Objektlabel und HUD-Hausicon wechseln passend zur Gebäudestufe
- Marktpanel zeigt Holz und Stein mit Bestand, Preis und Verkaufsbuttons
- Holzverkauf: `2 EUR` pro Einheit
- Steinverkauf: `3 EUR` pro Einheit
- Verkaufsmengen: `1`, `5`, `10`, `Alles`
- Verkauf erhöht Geld und senkt die verkaufte Ressource
- Verkauf ist ohne Bestand oder bei zu hoher Menge deaktiviert
- Favicon und Browser-Tab-Icon unter `assets/ui/favicon.png` und `favicon.ico`
- realistischere transparente PNG-Sprites für Bäume, Steinhaufen und Schrott
- hochwertige realistischere PNG-Icons für Geld, Holz, Stein und Metall
- Hover-/Focus-Tooltips für Inventar und Weltobjekte
- Kontextpanel mit Interaktionshinweisen, Ausbaufeedback und Marktfeedback
- austauschbare PNG-Assets unter `assets/backgrounds/`, `assets/resources/`, `assets/buildings/` und `assets/ui/icons/`
- `data/world_start.json` als vorbereitete Datenreferenz

Noch nicht implementiert:

- Speichern/Laden

Vorhandene Dokumentation:

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
Marktverkauf funktioniert: Nach 5 Baumklicks stehen 10 Holz bereit. Im Marktpanel verkauft der Button "5" genau 5 Holz für 10 EUR. Danach zeigt das HUD Geld 10 EUR und Holz 5. Verkauf ohne Stein ist deaktiviert.
```

---

## Bekannte Risiken

- Projekt könnte zu früh zu groß werden.
- Zu viele Ressourcen am Anfang könnten UX überladen.
- GitHub Pages kann bei falschen Pfaden CSS/JS nicht laden.
- Wenn mehrere Laptops ohne `git pull` arbeiten, entstehen Konflikte.
- Vollständige Spielmechanik fehlt noch; online ist aktuell die Startwelt mit Inventar, manuellem Sammeln, erschöpfbaren Ressourcenquellen, Gebäudeausbau und Marktverkauf.
- GitHub-Actions-Warnungen zu Node-Versionen weiter beobachten; Workflow setzt bereits `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24`.
- Der generierte Hintergrund enthält dekorative Marktelemente; die spielrelevanten Objekte liegen trotzdem als separate austauschbare PNGs darüber.
- Wirtschaftsbalance ist noch provisorisch; Verkaufspreise sind bewusst einfach.

---

## Nächster Schritt

```text
TASK-008 – Lokales Speichern, Laden und Zurücksetzen
```
