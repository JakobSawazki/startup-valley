# Technical Specification – Startup Valley

---

## 1. Architekturziel

Die erste Version wird als statische Browser-App umgesetzt.

Technologiestack:

- HTML5
- CSS3
- Vanilla JavaScript
- JSON-Daten
- PNG-Grafiken
- Browser `localStorage`
- GitHub Pages für Hosting

Keine externe Serverkomponente.

---

## 2. Warum Vanilla JS?

Für die erste Version ist Vanilla JavaScript bewusst gewählt:

- weniger Komplexität
- leichter durch Codex weiterzuentwickeln
- direkt über GitHub Pages hostbar
- kein Build-Prozess nötig
- gut für schulische Demonstration geeignet
- einfacher Debugging-Einstieg

Ein Framework darf erst später eingeführt werden, wenn der Nutzen klar überwiegt.

---

## 3. Ziel-Dateistruktur

```text
.
├── index.html
├── styles/
│   └── main.css
├── src/
│   ├── main.js
│   ├── state.js
│   ├── world.js
│   ├── resources.js
│   ├── buildings.js
│   ├── market.js
│   ├── savegame.js
│   └── ui.js
├── data/
│   ├── resources.json
│   ├── buildings.json
│   ├── market.json
│   └── quests.json
├── assets/
│   ├── backgrounds/
│   ├── buildings/
│   ├── resources/
│   └── ui/
└── docs/
```

---

## 4. Modulverantwortung

### `src/main.js`

- Einstiegspunkt
- Initialisierung
- Eventbindung
- erste Render-Aufrufe

### `src/state.js`

- zentraler Spielzustand
- Startzustand
- State-Getter und Mutationsfunktionen
- keine DOM-Manipulation

### `src/world.js`

- Weltobjekte rendern
- Klickzonen verwalten
- Objektinteraktion an passende Module weiterleiten

### `src/resources.js`

- Sammellogik
- Ressourcen erhöhen/verringern
- Validierung gegen negative Werte

### `src/buildings.js`

- Gebäudeliste
- Baukosten
- Ausbauprüfung
- Levelwechsel

### `src/market.js`

- Preise
- Kaufen/Verkaufen
- spätere dynamische Preislogik

### `src/savegame.js`

- Speichern in localStorage
- Laden
- Reset
- einfache Versionsprüfung

### `src/ui.js`

- HUD rendern
- Panels rendern
- Meldungen anzeigen
- Buttons aktiv/deaktiv setzen

---

## 5. State-Struktur

Empfohlener Startzustand:

```js
export const initialState = {
  version: "0.1.0",
  money: 0,
  resources: {
    wood: 0,
    stone: 0,
    metal: 0
  },
  buildings: {
    mainHouse: {
      level: 0
    }
  },
  workers: [],
  machines: [],
  unlockedAreas: ["start_area"],
  selectedObjectId: null,
  messageLog: []
};
```

---

## 6. Ressourcenoperationen

Zentral implementieren:

```js
addResource(type, amount)
canAfford(cost)
payCost(cost)
sellResource(type, amount)
```

Regel:

- Keine Ressource darf negativ werden.
- Alle Kostenprüfungen laufen über `canAfford()`.
- Alle Abbuchungen laufen über `payCost()`.

---

## 7. Baukostenmodell

Beispiel:

```js
export const mainHouseLevels = [
  {
    level: 0,
    name: "Bauplatz",
    image: "assets/buildings/house_00_plot.png"
  },
  {
    level: 1,
    name: "Fundament",
    image: "assets/buildings/house_01_foundation.png",
    cost: { wood: 10, stone: 20 }
  },
  {
    level: 2,
    name: "Rohbau",
    image: "assets/buildings/house_02_frame.png",
    cost: { wood: 30, stone: 40, metal: 5 }
  },
  {
    level: 3,
    name: "Einfaches Firmengebäude",
    image: "assets/buildings/house_03_finished.png",
    cost: { money: 100, wood: 50, stone: 30, metal: 10 }
  }
];
```

---

## 8. DOM-Rendering statt Canvas in Version 0.1

Für Version 0.1 wird empfohlen, die Welt über HTML-Elemente zu rendern:

- `.game-world` als relative Fläche
- `.world-object` als absolut positionierte Objekte
- PNG per `<img>` oder CSS `background-image`
- Klicks über DOM-Events

Vorteil:

- einfacher
- gut debugbar
- responsive anpassbar
- für Codex leichter wartbar

Canvas kann später geprüft werden, wenn Animationen oder viele Objekte nötig werden.

---

## 9. LocalStorage

Key:

```text
startup_valley_save_v1
```

Speichern:

```js
localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
```

Laden:

```js
const raw = localStorage.getItem(SAVE_KEY);
const save = JSON.parse(raw);
```

Beim Laden prüfen:

- existiert Speicherstand?
- ist JSON gültig?
- passt Version grob?
- fehlen Felder?

Fehlende Felder mit Defaultwerten ergänzen.

---

## 10. Fehlerbehandlung

Pflicht:

- keine unhandled Exceptions bei fehlendem Savegame
- verständliche UI-Meldung bei fehlenden Ressourcen
- Konsolenfehler vermeiden
- bei fehlenden Asset-Dateien Platzhalter anzeigen

---

## 11. Performance

Für Version 0.1 unkritisch. Trotzdem:

- keine unnötigen Intervalle
- HUD nur nach Zustandsänderung rendern
- keine riesigen PNGs ohne Not
- Asset-Größen optimieren

---

## 12. Browserkompatibilität

Ziel:

- aktueller Edge
- Chrome
- Firefox

Mobile Optimierung ist zunächst zweitrangig, aber Layout soll nicht vollständig brechen.

---

## 13. Deployment

Das Projekt soll ohne Build direkt über GitHub Pages ausgeliefert werden können. Deshalb muss `index.html` im veröffentlichten Pfad vorhanden sein.

Die vorbereitete Workflow-Datei `.github/workflows/deploy.yml` kopiert den Repository-Inhalt in ein Pages-Artefakt und veröffentlicht ihn über GitHub Pages.

---

## 14. Qualitätsdefinition für Version 0.1

Version 0.1 ist technisch gelungen, wenn:

- keine Konsolenfehler beim Laden auftreten
- Basisaktionen mehrfach stabil funktionieren
- Spielzustand korrekt bleibt
- Speichern/Laden funktioniert
- GitHub Pages online erreichbar ist
- Dokumentation den Ist-Zustand korrekt beschreibt
