# TASKS.md – Aufgabenplan für Codex

Statuswerte:

- `OPEN` – noch nicht begonnen
- `IN_PROGRESS` – wird gerade bearbeitet
- `DONE` – abgeschlossen und getestet
- `BLOCKED` – blockiert, Grund dokumentieren

Codex-Regel: Immer nur die erste Aufgabe mit Status `OPEN` bearbeiten.

---

## MILESTONE 0 – Repository und Projektgrundlage

### TASK-001 – Projektstruktur initialisieren

**Status:** DONE
**Ziel:** Eine saubere Grundstruktur für das Webspiel anlegen.

**Umfang:**

- `index.html` erstellen
- `styles/main.css` erstellen
- `src/main.js` erstellen
- `src/state.js` erstellen
- `src/ui.js` erstellen
- `assets/` Struktur anlegen
- `data/` Struktur anlegen
- Grundlayout im Browser anzeigen

**Akzeptanzkriterien:**

- `index.html` öffnet im Browser ohne Fehler.
- Eine sichtbare Startseite mit Spielbereich und HUD-Platzhalter erscheint.
- JavaScript wird korrekt geladen.
- Keine externen Abhängigkeiten erforderlich.
- `docs/VERSION_STATE.md` und `docs/CHANGELOG.md` wurden aktualisiert.

**Test:**

- Lokale Datei im Browser öffnen.
- DevTools-Konsole prüfen.

---

### TASK-002 – Startwelt als statische Szene anzeigen

**Status:** DONE
**Ziel:** Eine kleine Startwelt mit Hintergrund und klickbaren Platzhalterobjekten darstellen.

**Umfang:**

- Spielfläche anlegen
- Platzhalter-Hintergrund erstellen oder CSS-Fläche nutzen
- Ressourcenobjekte positionieren: Bäume, Steine
- Bauplatz positionieren
- Marktposition anzeigen
- Objektklicks zunächst nur in Konsole ausgeben

**Akzeptanzkriterien:**

- Startwelt ist sichtbar.
- Mindestens 3 Bäume, 2 Steinhaufen, 1 Bauplatz und 1 Marktobjekt sind sichtbar.
- Klick auf jedes Objekt wird erkannt.
- Objektname wird im UI oder in der Konsole angezeigt.

**Test:**

- Alle Objekte anklicken.
- Keine Fehler in Konsole.

---

### TASK-003 – Spielzustand und HUD einführen

**Status:** DONE
**Ziel:** Zentralen Spielzustand und Ressourcenanzeige implementieren.

**Umfang:**

- `gameState` in `src/state.js`
- Ressourcen: Geld, Holz, Stein, Metall
- Hauslevel
- HUD-Anzeige
- zentrale Funktion `renderHud()`

**Akzeptanzkriterien:**

- HUD zeigt korrekt: Geld, Holz, Stein, Metall, Hausstufe.
- Startwerte sind 0.
- Zustand wird nicht direkt im DOM gespeichert, sondern in JS-State.

**Test:**

- Seite laden.
- HUD prüfen.
- DevTools-State prüfen.

---

## MILESTONE 1 – Erster spielbarer Ressourcenloop

### TASK-004 – Manuelles Ressourcensammeln implementieren

**Status:** DONE
**Ziel:** Spieler kann durch Klick Ressourcen sammeln.

**Umfang:**

- Klick auf Baum erhöht Holz.
- Klick auf Stein erhöht Stein.
- Optional: kurzer Floating-Text `+2 Holz`.
- HUD aktualisiert sich sofort.

**Akzeptanzkriterien:**

- Baumklick: Holz steigt um 2.
- Steinklick: Stein steigt um 2.
- Mehrfaches Sammeln funktioniert.
- Keine negativen Werte entstehen.

**Test:**

- 5x Baum anklicken → Holz = 10.
- 3x Stein anklicken → Stein = 6.

---

### TASK-005 – Bauplatz auswählen und Aktionspanel anzeigen

**Status:** OPEN  
**Ziel:** Bauplatz wird zum zentralen Interaktionsobjekt.

**Umfang:**

- Klick auf Bauplatz öffnet Panel.
- Panel zeigt aktuellen Zustand.
- Panel zeigt Anforderungen für nächste Baustufe.
- Button „Ausbauen“ sichtbar, aber nur aktiv, wenn Ressourcen reichen.

**Akzeptanzkriterien:**

- Bauplatzpanel erscheint bei Klick.
- Anforderungen werden korrekt angezeigt.
- Button ist deaktiviert, wenn Ressourcen fehlen.
- Button ist aktiv, wenn Ressourcen vorhanden sind.

**Test:**

- Ohne Ressourcen: Ausbau nicht möglich.
- Nach Sammeln ausreichender Ressourcen: Ausbau möglich.

---

### TASK-006 – Gebäudestufen und Ressourcenverbrauch umsetzen

**Status:** OPEN  
**Ziel:** Haus kann in sichtbaren Stufen ausgebaut werden.

**Vorgeschlagene Baukosten:**

| Level | Name | Kosten |
|---:|---|---|
| 1 | Fundament | 10 Holz, 20 Stein |
| 2 | Rohbau | 30 Holz, 40 Stein, 5 Metall |
| 3 | Einfaches Firmengebäude | 50 Holz, 30 Stein, 10 Metall, 100 € |

**Umfang:**

- Baukosten definieren
- Ressourcenprüfung
- Ressourcenabzug
- Hauslevel erhöhen
- Grafik/Zustand wechseln
- HUD aktualisieren

**Akzeptanzkriterien:**

- Ausbau verbraucht korrekte Ressourcen.
- Ausbau ist nur möglich, wenn alle Kosten erfüllt sind.
- Hauslevel steigt maximal bis definierte Stufe.
- Bei fehlenden Ressourcen erscheint verständlicher Hinweis.

**Test:**

- Ressourcen manuell durch Sammeln setzen.
- Jede Stufe bauen.
- Ressourcenstände prüfen.

---

### TASK-007 – Markt mit Verkauf einbauen

**Status:** OPEN  
**Ziel:** Spieler kann Ressourcen verkaufen und Geld verdienen.

**Umfang:**

- Klick auf Markt öffnet Marktpanel.
- Verkauf von Holz und Stein.
- Verkaufspreise anzeigen.
- Menge wählbar: 1, 5, 10 oder Alles.
- Geld steigt, Ressource sinkt.

**Akzeptanzkriterien:**

- Verkauf ohne vorhandene Ressource nicht möglich.
- Verkauf aktualisiert Geld und Ressourcen.
- Preise sind zentral definiert, nicht mehrfach hart codiert.

**Test:**

- 10 Holz sammeln.
- 5 Holz verkaufen.
- Holz sinkt um 5, Geld steigt um 10 € bei Preis 2 €.

---

### TASK-008 – Lokales Speichern, Laden und Zurücksetzen

**Status:** OPEN  
**Ziel:** Spielstand wird im Browser gespeichert.

**Umfang:**

- `src/savegame.js`
- Button „Speichern“
- Button „Laden“
- Button „Neustart“
- localStorage-Key: `startup_valley_save_v1`

**Akzeptanzkriterien:**

- Speichern persistiert Ressourcen und Hauslevel.
- Laden stellt Zustand wieder her.
- Neustart setzt Zustand auf Startwerte.
- Fehlerhafte Speicherstände werden abgefangen.

**Test:**

- Ressourcen sammeln.
- Speichern.
- Seite neu laden.
- Laden.
- Zustand korrekt prüfen.

---

## MILESTONE 2 – GitHub und Online-Stellung

### TASK-009 – GitHub-Pages-Deployment vorbereiten

**Status:** DONE
**Ziel:** Projekt wird für automatisches GitHub Pages Deployment vorbereitet.

**Hinweis:** Auf ausdrücklichen Nutzerwunsch am 2026-06-16 vorgezogen erledigt, obwohl `TASK-002` noch offen ist.

**Umfang:**

- `.github/workflows/deploy.yml` prüfen oder erstellen
- README um Deployment-Hinweise ergänzen
- Keine geheimen Daten im Repository
- Produktionspfad festlegen

**Akzeptanzkriterien:**

- Workflow-Datei ist vorhanden.
- Workflow nutzt GitHub Pages Actions.
- Deployment kann über Push auf `main` ausgelöst werden.
- Dokumentation erklärt, wie Pages in GitHub aktiviert wird.

**Test:**

- YAML syntaktisch prüfen.
- Repository nach GitHub pushen.
- GitHub Actions Lauf prüfen.

---

### TASK-010 – Repository-Handshake dokumentieren

**Status:** OPEN  
**Ziel:** Ein neuer Codex-Agent auf einem zweiten Laptop kann nahtlos übernehmen.

**Umfang:**

- `docs/HANDOFF.md` aktualisieren
- aktuelle Version eintragen
- letzter funktionierender Stand
- Testanleitung
- nächster Task
- bekannte Probleme

**Akzeptanzkriterien:**

- HANDOFF erklärt den aktuellen Stand klar.
- Nächster Agent weiß, welche Dateien zuerst zu lesen sind.
- Nächster offener Task ist eindeutig.

**Test:**

- HANDOFF aus Sicht eines neuen Agenten lesen und prüfen, ob Projektstart möglich ist.

---

## MILESTONE 3 – Erste Automatisierung

### TASK-011 – Ersten Arbeiter einführen

**Status:** OPEN  
**Ziel:** Spieler kann einen Hilfsarbeiter kaufen, der automatisch Holz sammelt.

**Umfang:**

- Arbeiterpanel
- Hilfsarbeiter kostet 50 €
- Hilfsarbeiter erzeugt +1 Holz alle 10 Sekunden
- Anzeige der aktiven Arbeiter

**Akzeptanzkriterien:**

- Kauf nur bei genügend Geld möglich.
- Arbeiter arbeitet automatisch.
- Speichern/Laden berücksichtigt Arbeiter.

**Test:**

- Geld verdienen.
- Arbeiter kaufen.
- 30 Sekunden warten.
- Holz sollte um 3 steigen.

---

### TASK-012 – Lagerkapazität einführen

**Status:** OPEN  
**Ziel:** Ressourcen erhalten Obergrenzen, die durch Gebäudeausbau steigen.

**Umfang:**

- Startlager: 100 je Ressource
- Hauslevel erhöht Kapazität
- Sammeln stoppt bei voller Kapazität
- UI zeigt `aktuell / maximum`

**Akzeptanzkriterien:**

- Ressourcen überschreiten Kapazität nicht.
- Gebäudeausbau erhöht Kapazität.
- Benutzerhinweis bei voller Lagerkapazität.

**Test:**

- Ressource bis Limit sammeln.
- Weiter sammeln darf Limit nicht überschreiten.

---

## Backlog – spätere Ideen

- Maschinen kaufen
- Produktionsketten: Holz → Bretter → Möbel
- Aufträge von Kunden
- dynamische Marktpreise
- neue Gebiete per Kartenrand freischalten
- Transportfahrzeuge
- Forschungssystem
- zufällige Ereignisse
- bessere Grafiken und Animationen
- Mobile Layout
- Export/Import von Spielständen
- mehrere Speicherstände
