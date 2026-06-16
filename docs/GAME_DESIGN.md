# Game Design Document – Startup Valley

---

## 1. Genre

Startup Valley ist eine klickbasierte 2D-Aufbau- und Wirtschaftssimulation im Browser.

Der Fokus liegt auf:

- Ressourcen sammeln
- Ressourcen verkaufen
- Ressourcen für Bauprojekte einsetzen
- Gebäude verbessern
- Arbeiter und Maschinen freischalten
- Marktmechanik nutzen
- Unternehmen entwickeln

---

## 2. Zielgruppe

Das Spiel soll verständlich und zugänglich sein für:

- Spieler, die Aufbau- und Tycoonspiele mögen
- Nutzer, die sichtbaren Fortschritt motivierend finden
- Lernende, die Spielmechanik und Informatik verstehen möchten
- später auch Schüler im Informatikunterricht

---

## 3. Spielerfantasie

Der Spieler soll sich fühlen wie ein Gründer, der aus nichts ein Unternehmen aufbaut:

1. freie Fläche auswählen
2. selbst Rohstoffe sammeln
3. erstes Fundament bauen
4. Gebäude ausbauen
5. Ressourcen verkaufen
6. Arbeiter einstellen
7. Maschinen kaufen
8. Produktionsketten aufbauen
9. neue Gebiete erschließen
10. Unternehmen wachsen lassen

---

## 4. Kernloop

```text
Klicken → Ressourcen erhalten → Entscheiden → Bauen/Verkaufen → Fortschritt sehen → neue Möglichkeiten freischalten
```

Ausführlicher:

```text
Ressourcenquelle anklicken
→ Rohstoffe erhalten
→ HUD aktualisiert sich
→ Baukosten prüfen
→ Gebäude ausbauen oder Ressourcen verkaufen
→ Geld verdienen
→ bessere Optionen freischalten
→ wieder Ressourcen gewinnen
```

---

## 5. Startphase

Die ersten Minuten sind entscheidend. Der Spieler muss sofort verstehen, was zu tun ist.

Vorschlag für Onboarding:

1. Text: „Du besitzt nichts außer deiner Arbeitskraft.“
2. Aufgabe: „Wähle einen Bauplatz aus.“
3. Aufgabe: „Sammle 10 Holz.“
4. Aufgabe: „Sammle 20 Stein.“
5. Aufgabe: „Baue dein erstes Fundament.“
6. Aufgabe: „Verkaufe 5 Holz auf dem Markt.“
7. Aufgabe: „Baue den Rohbau.“

---

## 6. Spielwelt

Die Startwelt soll klein und übersichtlich bleiben.

Enthaltene Objekte:

- Bauplatz
- Bäume
- Steine
- Marktstand
- kleine Straße oder Weg
- dekorative Umgebung
- später Kartenränder zur Gebietserweiterung

Die Welt wird nicht durch einen sichtbaren Spielercharakter erkundet, sondern per Mausinteraktion.

---

## 7. Ressourcen

### 7.1 Version 0.1

| Ressource | Zweck |
|---|---|
| Geld | Kaufen, Arbeiter, spätere Maschinen |
| Holz | Bau, Verkauf, spätere Verarbeitung |
| Stein | Bau, Verkauf |
| Metall | spätere Gebäudestufen, Maschinen |

### 7.2 Spätere Ressourcen

| Ressource | Zweck |
|---|---|
| Bretter | verarbeitete Holzprodukte |
| Ziegel | verarbeitete Steinprodukte |
| Werkzeuge | Produktivität erhöhen |
| Energie | Maschinenbetrieb |
| Nahrung | Arbeiterunterhalt |
| Forschung | Upgrades |
| Firmenruf | Aufträge und Preise |

---

## 8. Gebäude

### 8.1 Hauptgebäude

Das Hauptgebäude ist der zentrale sichtbare Fortschritt.

| Level | Name | Wirkung |
|---:|---|---|
| 0 | Bauplatz | Startzustand |
| 1 | Fundament | erster Fortschritt sichtbar |
| 2 | Rohbau | schaltet Marktverbesserung frei |
| 3 | Einfaches Firmengebäude | schaltet Arbeiter frei |
| 4 | Firmenbüro | schaltet Aufträge frei |
| 5 | Betriebshof | schaltet Maschinen frei |

Für Version 0.1 reichen Level 0 bis 3.

---

## 9. Markt

Der Markt ermöglicht Geldfluss.

Version 0.1:

- Holz verkaufen
- Stein verkaufen
- Metall verkaufen, falls vorhanden

Später:

- Ressourcen kaufen
- Preisentwicklung
- Nachfrage
- Aufträge
- Export

---

## 10. Fortschritt und Motivation

Motivationsfaktoren:

- sichtbare Gebäudestufen
- steigende Ressourcenwerte
- erste Geldbeträge
- Freischaltungen
- kleine Ziele
- Fortschrittsmeldungen
- saubere Rückmeldungen bei Klicks

Beispielmeldungen:

- `+2 Holz gesammelt`
- `Nicht genug Stein für das Fundament`
- `Fundament gebaut`
- `Du hast 10 Holz für 20 € verkauft`
- `Neues Ziel: Baue den Rohbau`

---

## 11. Siegbedingungen

In frühen Versionen gibt es kein endgültiges Spielende.

Version 0.1-Ziel:

> Baue das einfache Firmengebäude fertig.

Später mögliche Meilensteine:

- 10.000 € Firmenwert
- erste Produktionskette
- erstes neues Gebiet
- erster Großauftrag
- komplette Startregion ausgebaut

---

## 12. Tonalität

Das Spiel soll sachlich, motivierend und leicht unternehmerisch wirken. Keine übertrieben kindliche Sprache. Der Stil darf freundlich sein, aber mit klaren wirtschaftlichen Begriffen.

Beispiele:

- „Investition möglich“
- „Ressourcenbestand zu niedrig“
- „Bauphase abgeschlossen“
- „Markterlös erhalten“
- „Neue Geschäftsmöglichkeit freigeschaltet“
