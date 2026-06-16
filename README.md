# Startup Valley – Browserbasierte Wirtschafts- und Aufbausimulation

**Projektstatus:** Früher spielbarer Browser-Prototyp
**Zielplattform:** Browser / HTML / CSS / JavaScript  
**Deployment:** [GitHub Pages](https://jakobsawazki.github.io/startup-valley/)
**Arbeitstitel:** Startup Valley  
**Codex-Priorität:** Kleine, stabile, spielbare Vertikalversion statt sofort riesiger Featureumfang

---

## 1. Kurzbeschreibung

**Startup Valley** ist eine klickbasierte 2D-Wirtschafts- und Aufbausimulation. Der Spieler startet ohne Geld, ohne Gebäude, ohne Ressourcen und ohne Angestellte. Durch manuelle Arbeit sammelt er erste Rohstoffe, verkauft oder verarbeitet sie, baut ein erstes Firmengebäude und entwickelt daraus Schritt für Schritt ein Unternehmen.

Das Spiel soll bewusst mit einer kleinen Welt starten. Die Interaktion erfolgt primär per Maus über klickbare Objekte, UI-Fenster, Ressourcenanzeigen und Bau-/Marktmenüs. Einzelne Gebäude, Rohstoffe und Zustände werden als PNG-Grafiken eingebunden und können später leicht ersetzt oder erweitert werden.

---

## 2. Aktueller Versionsstand

Aktuelle Version: `0.0.7-build-panel`

Live-Version:

- [GitHub Pages](https://jakobsawazki.github.io/startup-valley/)
- [Repository](https://github.com/JakobSawazki/startup-valley)

Aktuell umgesetzt:

- grafische Startwelt mit PNG-Hintergrund
- klickbare Weltobjekte: Bäume, Steine, Schrott, Bauplatz und Markt
- zentrales `gameState`-Objekt in JavaScript
- Inventar/HUD links mit Geld, Holz, Stein, Metall und Hausstufe
- manuelles Sammeln: Baum `+2 Holz`, Stein `+2 Stein`, Schrott `+1 Metall`
- Ressourcenquellen werden pro Klick kleiner, erschöpfen sich und verschwinden
- Bauplatzpanel mit aktueller Stufe, nächster Stufe, Anforderungen und aktivem/deaktiviertem Ausbau-Button
- hochwertiges Favicon / Tab-Icon
- realistischere transparente PNG-Sprites für Bäume, Steinhaufen und Schrott
- hochwertige transparente PNG-Icons für Ressourcen
- Hover-/Focus-Effekte und Infotexte für Inventar und Weltobjekte
- Kontextpanel für ausgewählte Objekte
- GitHub Pages Deployment

Noch offen für Version 0.1.0:

- Gebäudestufen ausbauen und Ressourcen dabei verbrauchen
- Marktverkauf
- Speichern, Laden und Reset über `localStorage`

---

## 3. Kernidee

Der Spieler beginnt bei null:

- 0 € Kapital
- 0 Holz
- 0 Stein
- 0 Metall
- 0 Arbeiter
- 0 Maschinen
- 1 auswählbarer Bauplatz
- mehrere manuell nutzbare Ressourcenquellen

Erstes Zwischenziel:

> Ein eigenes kleines Firmengebäude aufbauen.

Dazu sammelt der Spieler Holz, Stein und Metall, verkauft Überschüsse auf dem Markt, kauft fehlende Ressourcen hinzu und verbessert das Gebäude in sichtbaren Baustufen.

---

## 4. Technische Zielrichtung

Die erste Version soll als statische Web-App umgesetzt werden:

- `index.html`
- `src/` für JavaScript-Module
- `styles/` für CSS
- `assets/` für PNG-Grafiken
- `data/` für JSON-Daten
- `docs/` für Projektdokumentation
- `.github/workflows/deploy.yml` für GitHub Pages Deployment

Keine Serverlogik, keine Datenbank, keine Anmeldung, kein Multiplayer.

Speichern erfolgt in der ersten Version über `localStorage` im Browser.

---

## 5. Grafik- und Asset-Strategie

Startup Valley nutzt PNG-Dateien, damit Grafiken später einfach ersetzt werden können. Wichtig ist, dass die Dateinamen stabil bleiben:

- Hintergrund: `assets/backgrounds/start_area.png`
- Ressourcen: `assets/resources/tree_01.png`, `stone_01.png`, `scrap_01.png`
- Gebäude: `assets/buildings/house_00_plot.png` bis `house_03_finished.png`
- Inventar: `assets/ui/icons/money.png`, `wood.png`, `stone.png`, `metal.png`

Aktuelle Richtung:

- Der Hintergrund ist bereits hochwertig und atmosphärisch.
- Die Inventar-Icons wurden auf realistischere transparente PNGs umgestellt.
- Die Ressourcen-Sprites wurden auf realistischere transparente PNGs umgestellt; Gebäude-Sprites bleiben austauschbare Platzhalter für den nächsten Asset-Pass.
- Beim Austausch neuer PNGs möglichst denselben Dateinamen behalten, damit Code und Daten unverändert bleiben.

---

## 6. Versionsnotizen

| Version | Datum | Stand |
|---|---|---|
| `0.0.7-build-panel` | 2026-06-16 | Bauplatzpanel mit Anforderungen und aktivem/deaktiviertem Ausbau-Button ergänzt; Ressourcen-Sprites realistischer ersetzt |
| `0.0.6-depletion` | 2026-06-16 | Favicon ergänzt und Ressourcenquellen schrumpfen/verschwinden nach begrenzten Klicks |
| `0.0.5-collection` | 2026-06-16 | Manuelles Ressourcensammeln, HUD-Aktualisierung und Floating-Feedback ergänzt |
| `0.0.4-hud` | 2026-06-16 | Zentrales State/HUD-System, hochwertigere Inventar-Icons, Tooltips und Kontextpanel ergänzt |
| `0.0.3-world` | 2026-06-16 | Grafische PNG-Startwelt mit klickbaren Weltobjekten veröffentlicht |
| `0.0.2-online` | 2026-06-16 | GitHub Repository und GitHub Pages online gestellt |
| `0.0.1` | 2026-06-16 | Erste HTML/CSS/JS-Grundstruktur erstellt |

Details stehen zusätzlich in `docs/CHANGELOG.md`, `docs/VERSION_STATE.md` und `docs/HANDOFF.md`.

---

## 7. Codex-Schnellstart

Ein neuer Codex-Agent muss zuerst diese Dateien lesen:

1. `AGENTS.md`
2. `CODEX_BRIEFING_AUFBAU_AG.md`
3. `TASKS.md`
4. `docs/VERSION_STATE.md`
5. `docs/CHANGELOG.md`
6. `docs/GITHUB_DEPLOYMENT.md`

Danach darf nur die **erste offene Aufgabe** aus `TASKS.md` bearbeitet werden.

---

## 8. Entwicklungsprinzip

Das Projekt wird in kleinen, stabilen Schritten entwickelt:

1. Startwelt anzeigen
2. Ressourcen anklickbar machen
3. Ressourcenbestand anzeigen
4. Bauplatz auswählen
5. Haus in Stufen ausbauen
6. Markt einbauen
7. Speichern/Laden ergänzen
8. GitHub Pages Deployment sicherstellen
9. danach erst Arbeiter, Maschinen, weitere Welten

---

## 9. Ziel der Version 0.1.0

Version 0.1.0 gilt als erreicht, wenn Folgendes funktioniert:

- Spiel startet im Browser
- Startwelt wird angezeigt
- HUD zeigt Geld, Holz, Stein, Metall und Hausstufe
- Spieler kann Holz und Stein manuell sammeln
- Spieler kann einen Bauplatz auswählen
- Haus kann mindestens drei Bauphasen durchlaufen
- Ressourcen werden korrekt abgezogen
- Markt erlaubt einfachen Verkauf von Holz/Stein
- Spielstand kann lokal gespeichert und geladen werden
- Projekt ist auf GitHub hochgeladen
- GitHub Pages stellt das Spiel online bereit

---

## 10. Wichtig für den Projektcharakter

Dieses Projekt soll langfristig professionell erweiterbar sein. Deshalb sind saubere Struktur, sprechende Dateinamen, kleine Funktionen und gute Dokumentation wichtiger als schnelle, unkontrollierte Feature-Mengen.

Codex soll keine unnötige Komplexität einführen. Keine Frameworks, keine Build-Tools und keine Paketabhängigkeiten, solange sie nicht ausdrücklich in einer späteren Aufgabe angefordert werden.
