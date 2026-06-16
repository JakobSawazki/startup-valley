# Data Model – Startup Valley

Dieses Dokument beschreibt die geplanten Datenstrukturen für Spielzustand, Ressourcen, Gebäude, Markt und Weltobjekte.

---

## 1. Prinzip

Daten sollen möglichst zentral und strukturiert gespeichert werden. Spiellogik darf nicht über viele Dateien hinweg dieselben Werte hart codieren.

Beispiel:

- Preise gehören in Marktdaten.
- Baukosten gehören in Gebäudedaten.
- Ressourceninformationen gehören in Ressourcendaten.
- Aktuelle Bestände gehören in den Spielzustand.

---

## 2. Spielzustand

```js
const gameState = {
  version: "0.1.0",
  money: 0,
  resources: {
    wood: 0,
    stone: 0,
    metal: 0
  },
  capacities: {
    wood: 100,
    stone: 100,
    metal: 50
  },
  buildings: {
    mainHouse: {
      id: "mainHouse",
      level: 0
    }
  },
  workers: [],
  machines: [],
  unlockedAreas: ["start_area"],
  selectedObjectId: null,
  tutorial: {
    currentStep: "select_plot",
    completedSteps: []
  },
  statistics: {
    totalWoodCollected: 0,
    totalStoneCollected: 0,
    totalMetalCollected: 0,
    totalMoneyEarned: 0
  }
};
```

Für Version 0.1 müssen nicht alle Felder umgesetzt werden. Die Struktur zeigt aber die Zielrichtung.

---

## 3. Ressourcen

`data/resources.json`:

```json
{
  "wood": {
    "id": "wood",
    "label": "Holz",
    "icon": "assets/ui/icons/wood.png",
    "description": "Grundressource für frühe Bauphasen und spätere Verarbeitung."
  },
  "stone": {
    "id": "stone",
    "label": "Stein",
    "icon": "assets/ui/icons/stone.png",
    "description": "Wichtige Ressource für Fundament und Rohbau."
  },
  "metal": {
    "id": "metal",
    "label": "Metall",
    "icon": "assets/ui/icons/metal.png",
    "description": "Knappere Ressource für fortgeschrittene Gebäudestufen und Maschinen."
  }
}
```

---

## 4. Weltobjekte

`data/world_start.json` oder direkt in `src/world.js` für den Anfang:

```json
[
  {
    "id": "tree_01",
    "type": "resource_node",
    "name": "Baum",
    "resource": "wood",
    "amount": 2,
    "x": 120,
    "y": 280,
    "width": 96,
    "height": 128,
    "image": "assets/resources/tree_01.png"
  },
  {
    "id": "stone_01",
    "type": "resource_node",
    "name": "Steinhaufen",
    "resource": "stone",
    "amount": 2,
    "x": 360,
    "y": 420,
    "width": 96,
    "height": 80,
    "image": "assets/resources/stone_01.png"
  },
  {
    "id": "main_house",
    "type": "building",
    "name": "Bauplatz",
    "buildingId": "mainHouse",
    "x": 560,
    "y": 300,
    "width": 220,
    "height": 180
  },
  {
    "id": "market_01",
    "type": "market",
    "name": "Markt",
    "x": 880,
    "y": 340,
    "width": 160,
    "height": 130,
    "image": "assets/buildings/market_01.png"
  }
]
```

---

## 5. Gebäude

`data/buildings.json`:

```json
{
  "mainHouse": {
    "id": "mainHouse",
    "label": "Firmengebäude",
    "levels": [
      {
        "level": 0,
        "name": "Bauplatz",
        "image": "assets/buildings/house_00_plot.png",
        "description": "Ein freier Bauplatz. Hier entsteht dein Unternehmen."
      },
      {
        "level": 1,
        "name": "Fundament",
        "image": "assets/buildings/house_01_foundation.png",
        "cost": { "wood": 10, "stone": 20 },
        "description": "Das Fundament für dein erstes Firmengebäude."
      },
      {
        "level": 2,
        "name": "Rohbau",
        "image": "assets/buildings/house_02_frame.png",
        "cost": { "wood": 30, "stone": 40, "metal": 5 },
        "description": "Der Rohbau steht. Das Unternehmen nimmt Gestalt an."
      },
      {
        "level": 3,
        "name": "Einfaches Firmengebäude",
        "image": "assets/buildings/house_03_finished.png",
        "cost": { "money": 100, "wood": 50, "stone": 30, "metal": 10 },
        "description": "Dein erstes funktionsfähiges Firmengebäude."
      }
    ]
  }
}
```

---

## 6. Markt

`data/market.json`:

```json
{
  "wood": {
    "sellPrice": 2,
    "buyPrice": 3
  },
  "stone": {
    "sellPrice": 3,
    "buyPrice": 5
  },
  "metal": {
    "sellPrice": 8,
    "buyPrice": 12
  }
}
```

---

## 7. Kostenobjekte

Kosten werden immer als Objekt modelliert:

```js
{ wood: 10, stone: 20, money: 100 }
```

Nicht verwenden:

```js
woodCost = 10;
stoneCost = 20;
moneyCost = 100;
```

Grund: Kostenobjekte sind leichter prüfbar und skalierbar.

---

## 8. Savegame-Struktur

Im Savegame werden nur dynamische Daten gespeichert:

- Geld
- Ressourcenbestände
- Gebäudelevel
- Arbeiter
- Maschinen
- freigeschaltete Gebiete
- Tutorialfortschritt
- Statistik

Nicht speichern:

- statische Marktdaten
- statische Gebäudedaten
- statische Ressourcenbeschreibungen

---

## 9. Validierungsregeln

- Unbekannte Ressourcen ignorieren oder sauber melden.
- Fehlende Savegame-Felder mit Defaultwerten ergänzen.
- Negative Werte beim Laden auf 0 korrigieren.
- Gebäudelevel darf nicht höher sein als vorhandene Leveldaten.
- Kostenabzug nur nach erfolgreicher Prüfung.

---

## 10. Zukunft: Produktionsketten

Späteres Modell:

```json
{
  "planks": {
    "label": "Bretter",
    "recipe": {
      "input": { "wood": 3 },
      "output": { "planks": 1 },
      "durationSeconds": 5
    }
  }
}
```

Dieses System erst später umsetzen. Für Version 0.1 nicht erforderlich.
