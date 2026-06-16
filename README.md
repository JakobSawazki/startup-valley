# Startup Valley – Browserbasierte Wirtschafts- und Aufbausimulation

**Projektstatus:** Konzept- und Codex-Startpaket  
**Zielplattform:** Browser / HTML / CSS / JavaScript  
**Deployment:** [GitHub Pages](https://jakobsawazki.github.io/startup-valley/)
**Arbeitstitel:** Startup Valley  
**Codex-Priorität:** Kleine, stabile, spielbare Vertikalversion statt sofort riesiger Featureumfang

---

## 1. Kurzbeschreibung

**Startup Valley** ist eine klickbasierte 2D-Wirtschafts- und Aufbausimulation. Der Spieler startet ohne Geld, ohne Gebäude, ohne Ressourcen und ohne Angestellte. Durch manuelle Arbeit sammelt er erste Rohstoffe, verkauft oder verarbeitet sie, baut ein erstes Firmengebäude und entwickelt daraus Schritt für Schritt ein Unternehmen.

Das Spiel soll bewusst mit einer kleinen Welt starten. Die Interaktion erfolgt primär per Maus über klickbare Objekte, UI-Fenster, Ressourcenanzeigen und Bau-/Marktmenüs. Einzelne Gebäude, Rohstoffe und Zustände werden als PNG-Grafiken eingebunden und können später leicht ersetzt oder erweitert werden.

---

## 2. Kernidee

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

## 3. Technische Zielrichtung

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

## 4. Codex-Schnellstart

Ein neuer Codex-Agent muss zuerst diese Dateien lesen:

1. `AGENTS.md`
2. `CODEX_BRIEFING_AUFBAU_AG.md`
3. `TASKS.md`
4. `docs/VERSION_STATE.md`
5. `docs/CHANGELOG.md`
6. `docs/GITHUB_DEPLOYMENT.md`

Danach darf nur die **erste offene Aufgabe** aus `TASKS.md` bearbeitet werden.

---

## 5. Entwicklungsprinzip

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

## 6. Ziel der Version 0.1.0

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

## 7. Wichtig für den Projektcharakter

Dieses Projekt soll langfristig professionell erweiterbar sein. Deshalb sind saubere Struktur, sprechende Dateinamen, kleine Funktionen und gute Dokumentation wichtiger als schnelle, unkontrollierte Feature-Mengen.

Codex soll keine unnötige Komplexität einführen. Keine Frameworks, keine Build-Tools und keine Paketabhängigkeiten, solange sie nicht ausdrücklich in einer späteren Aufgabe angefordert werden.
