# Codex-Briefing – Startup Valley

Dieses Dokument beschreibt die Spielvision, die erste Umsetzung und die Prioritäten für Codex.

---

## 1. Vision

**Startup Valley** soll eine klickbasierte Wirtschaftssimulation werden, in der der Spieler ein Unternehmen bei null startet. Es geht nicht um schnelle Action, sondern um sichtbaren Fortschritt, wirtschaftliche Entscheidungen, Ressourcenketten, Investitionen und Ausbau.

Der Spieler soll den Eindruck haben:

> Ich beginne mit nichts, nutze meine Arbeitskraft, baue erste Strukturen auf und entwickle daraus ein funktionierendes Unternehmen.

---

## 2. Spielgefühl

Das Spiel soll sich anfühlen wie eine Mischung aus:

- Aufbau-/Tycoon-Spiel
- Ressourcenmanagement
- Idle-/Incremental-Mechanik in reduzierter Form
- leichter Wirtschaftssimulation
- visuellem Baufortschritt

Nicht gewünscht:

- hektische Action
- komplexe Echtzeitstrategie
- Kampfmechaniken
- sichtbarer Spielercharakter als Pflicht
- übergroße Karte in Version 0.1

---

## 3. Startzustand

Der Spieler startet mit:

```json
{
  "money": 0,
  "resources": {
    "wood": 0,
    "stone": 0,
    "metal": 0
  },
  "workers": [],
  "machines": [],
  "selectedPlotId": null,
  "houseLevel": 0,
  "unlockedAreas": ["start_area"]
}
```

Startlogik:

1. Spieler sieht kleine Startwelt.
2. Spieler kann einen Bauplatz auswählen.
3. Spieler kann Holz und Stein manuell sammeln.
4. Spieler baut mit Ressourcen das Fundament.
5. Spieler verbessert das Gebäude schrittweise.
6. Markt wird genutzt, um Überschüsse zu verkaufen oder später Ressourcen zu kaufen.

---

## 4. Erste Kernmechaniken

### 4.1 Manuelles Sammeln

Klick auf Ressource:

- Baum: +2 Holz
- Steinhaufen: +2 Stein
- Schrott: +1 Metall, später freischaltbar

In der ersten Version darf Sammeln sofort erfolgen. Eine spätere Version kann Timer, Cooldowns oder Fortschrittsbalken ergänzen.

### 4.2 Bauplatz

Der Bauplatz ist das zentrale Spielobjekt.

Stufen:

| Level | Zustand | Beispielgrafik |
|---:|---|---|
| 0 | leerer Bauplatz | `house_00_plot.png` |
| 1 | Fundament | `house_01_foundation.png` |
| 2 | Rohbau | `house_02_frame.png` |
| 3 | kleines fertiges Gebäude | `house_03_finished.png` |

### 4.3 Markt

In Version 0.1 genügt ein einfacher Markt:

- Holz verkaufen
- Stein verkaufen
- optional Metall verkaufen
- später Ressourcen kaufen

Beispielpreise:

| Ressource | Verkauf | Einkauf |
|---|---:|---:|
| Holz | 2 € | 3 € |
| Stein | 3 € | 5 € |
| Metall | 8 € | 12 € |

### 4.4 Speichern

Der Spielstand wird in `localStorage` gespeichert.

Pflichtfunktionen:

- Spiel speichern
- Spiel laden
- Spiel zurücksetzen

---

## 5. Erste Version: Minimal spielbarer Prototyp

Version 0.1.0 soll den Spielkern beweisen:

- Startwelt sichtbar
- Ressourcen klickbar
- HUD aktualisiert sich
- Bauplatz auswählbar
- Hausstufen wechselbar
- Markt verkauft Ressourcen gegen Geld
- Spielstand speicherbar
- GitHub Pages online

Diese Version muss nicht schön perfekt sein. Sie muss stabil, verständlich und erweiterbar sein.

---

## 6. Grafikprinzip

Die Spielwelt besteht aus:

1. Hintergrundgrafik als PNG
2. darüberliegenden Objekt-PNGs
3. klickbaren Bereichen/Objekten
4. UI/HUD als HTML/CSS

Die Grafik darf zunächst Platzhalter verwenden. Wichtig ist, dass Dateinamen und Asset-Struktur so vorbereitet sind, dass spätere hochwertige Grafiken einfach ersetzt werden können.

---

## 7. Objektprinzip

Jedes Weltobjekt besitzt mindestens:

```js
{
  id: "tree_01",
  type: "resource_node",
  name: "Baum",
  x: 180,
  y: 320,
  width: 96,
  height: 128,
  image: "assets/resources/tree_01.png",
  action: "collect",
  resource: "wood",
  amount: 2
}
```

Gebäudeobjekt:

```js
{
  id: "main_house",
  type: "building",
  name: "Firmengebäude",
  level: 0,
  x: 500,
  y: 300,
  width: 220,
  height: 180,
  imageByLevel: [
    "assets/buildings/house_00_plot.png",
    "assets/buildings/house_01_foundation.png",
    "assets/buildings/house_02_frame.png",
    "assets/buildings/house_03_finished.png"
  ]
}
```

---

## 8. Prioritäten für Codex

### Höchste Priorität

- Lauffähigkeit
- klare Struktur
- keine negativen Ressourcen
- einfache Bedienbarkeit
- Dokumentation
- GitHub Pages Deployment

### Mittlere Priorität

- schönes UI
- kleine Animationen
- Ton/Soundeffekte
- dynamischere Preise

### Niedrige Priorität in Version 0.1

- komplexe Produktionsketten
- Forschungssystem
- große Karte
- mehrere Speicherstände
- Story-System
- Arbeiter-KI
- Maschinenwartung

---

## 9. Nicht überbauen

Codex soll das Projekt nicht sofort mit Frameworks, komplexem Canvas-System, ECS-Architektur oder Build-Pipeline überfrachten. Der erste Meilenstein ist eine kleine, stabile, im Browser spielbare Version.

---

## 10. Langfristige Erweiterungsidee

Später kann das Spiel wachsen durch:

- Arbeiter einstellen
- Maschinen kaufen
- Produktionsketten
- Lagerkapazitäten
- Transport
- neue Regionen
- dynamische Marktpreise
- Aufträge
- Firmenruf
- Forschung
- Ereignisse
- bessere Grafiken
- Mobile-Optimierung
