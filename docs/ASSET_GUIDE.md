# Asset Guide – Grafiken und PNG-Struktur

---

## 1. Grundprinzip

Das Spiel soll mit austauschbaren PNG-Grafiken arbeiten. Dadurch kann zuerst mit Platzhaltern entwickelt werden, während später hochwertige Grafiken eingefügt werden können.

Wichtig:

- Dateinamen stabil halten
- Grafikgröße dokumentieren
- transparente PNGs für Objekte nutzen
- Hintergrund separat halten
- Objektpositionen unabhängig von Grafikstil definieren

---

## 2. Asset-Struktur

```text
assets/
├── backgrounds/
│   └── start_area.png
├── buildings/
│   ├── house_00_plot.png
│   ├── house_01_foundation.png
│   ├── house_02_frame.png
│   ├── house_03_finished.png
│   └── market_01.png
├── resources/
│   ├── tree_01.png
│   ├── tree_02.png
│   ├── stone_01.png
│   └── scrap_01.png
└── ui/
    └── icons/
        ├── wood.png
        ├── stone.png
        ├── metal.png
        └── money.png
```

Zusätzlich aktuell vorhanden:

```text
assets/ui/favicon.png
favicon.ico
```

---

## 3. Empfohlene Grafikgrößen

### Hintergrund

- Startwelt: 1280 × 720 px oder 1366 × 768 px
- Format: PNG oder WebP
- In Version 0.1 reicht auch CSS-Hintergrund oder einfache Platzhaltergrafik.

### Gebäude

- Bauplatz/Haus: ca. 220 × 180 px
- Marktstand: ca. 160 × 130 px
- spätere Fabrik: ca. 260 × 200 px

### Ressourcenobjekte

- Baum: ca. 96 × 128 px
- Steinhaufen: ca. 96 × 80 px
- Schrott: ca. 100 × 80 px

### Icons

- 32 × 32 px oder 64 × 64 px

---

## 4. Dateinamenkonvention

Kleinbuchstaben, englisch, sprechend:

```text
house_00_plot.png
house_01_foundation.png
house_02_frame.png
house_03_finished.png
tree_01.png
stone_01.png
market_01.png
```

Nicht verwenden:

```text
Haus fertig NEU final Kopie.png
Bild1.png
Unbenannt.png
```

---

## 5. Gebäudestufen

Das Hauptgebäude soll über austauschbare PNG-Stufen wachsen.

| Datei | Zustand |
|---|---|
| `house_00_plot.png` | leerer Bauplatz |
| `house_01_foundation.png` | Fundament |
| `house_02_frame.png` | Rohbau/Holzgerüst |
| `house_03_finished.png` | kleines fertiges Firmengebäude |

Später:

| Datei | Zustand |
|---|---|
| `house_04_office.png` | kleines Büro |
| `house_05_yard.png` | Betriebshof |
| `house_06_company_hq.png` | Firmenzentrale |

---

## 6. Platzhalter erlaubt

Codex darf für die erste Version einfache Platzhalter erstellen, zum Beispiel:

- farbige Rechtecke
- CSS-Flächen
- einfache SVG/PNG-Platzhalter
- Textlabel auf Objekt

Aber: Die finale Struktur muss so vorbereitet sein, dass später echte PNGs nur ersetzt werden müssen.

---

## 7. Transparenz

Objekte sollten transparente Hintergründe haben, damit sie sauber auf der Welt liegen:

- Gebäude: transparente PNGs
- Bäume: transparente PNGs
- Steine: transparente PNGs
- UI-Icons: transparente PNGs

Hintergrundgrafik selbst braucht keine Transparenz.

---

## 8. Klickflächen

Die Klickfläche muss nicht exakt der sichtbaren Grafikform entsprechen. Für Version 0.1 reicht ein rechteckiger Bereich.

Wichtig:

- Klickfläche groß genug
- keine Überlappung, die Bedienung stört
- Hover-Effekt sichtbar

---

## 9. Grafikstil

Vorgeschlagene Richtung:

- moderne 2D-Isometrie oder leicht top-down
- freundlich, aber nicht kindlich
- klare Formen
- gute Lesbarkeit der Objekte
- dezente Blautöne im UI
- natürliche Farben in der Welt

---

## 10. Asset-Austausch

Wenn Grafiken ersetzt werden:

1. Dateiname möglichst gleich lassen.
2. Größe möglichst ähnlich halten.
3. Falls Größe stark abweicht, Objektpositionen prüfen.
4. Nach Austausch Browsercache beachten.
5. Screenshot oder Notiz in `docs/HANDOFF.md` ergänzen, wenn relevant.

---

## 11. Aktuelle Qualitätsrichtung

Stand `0.0.4-hud`:

- `assets/backgrounds/start_area.png` ist eine hochwertige atmosphärische Startwelt und kann vorerst bleiben.
- `assets/ui/icons/*.png` wurden auf realistischere transparente PNG-Icons umgestellt.
- `assets/resources/*.png` und `assets/buildings/*.png` sind bewusst austauschbare Platzhalter-Sprites.
- `assets/ui/favicon.png` ist das Browser-Tab-/Homepage-Icon; `favicon.ico` bleibt als Kompatibilitätsdatei im Projektwurzelordner.

Nächster Asset-Pass:

- Bäume, Steine, Schrott, Bauplatz, Markt und Hausstufen stärker realistisch/fotorealistisch ausarbeiten.
- Transparente PNGs mit sauberem Rand und ohne Hintergrund verwenden.
- Dateinamen stabil halten, damit Code und Weltobjektdaten nicht geändert werden müssen.
- Größe grob beibehalten oder nach Austausch Positionierung in `src/world.js` prüfen.
