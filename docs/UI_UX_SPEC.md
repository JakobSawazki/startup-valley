# UI/UX Specification – Startup Valley

---

## 1. Bedienprinzip

Das Spiel wird primär mit der Maus bedient.

Grundprinzip:

- Objekt anklicken
- Kontextpanel erscheint
- Aktion auswählen
- Spielzustand ändert sich
- HUD und Welt aktualisieren sich

Es gibt keinen sichtbaren Spielercharakter in Version 0.1.

---

## 2. Layout

Empfohlenes Desktop-Layout:

```text
┌────────────────────────────────────────────────────────────┐
│ HUD: Geld | Holz | Stein | Metall | Hausstufe | Speichern │
├────────────────────────────────────────────────────────────┤
│                                                            │
│                     SPIELWELT                              │
│                                                            │
│   Bäume        Steine        Bauplatz        Markt          │
│                                                            │
├────────────────────────────────────────────────────────────┤
│ Kontextpanel / Meldungen / Tutorialziel                    │
└────────────────────────────────────────────────────────────┘
```

---

## 3. HUD

Das HUD ist dauerhaft sichtbar.

Pflichtanzeigen Version 0.1:

- Geld
- Holz
- Stein
- Metall
- Hausstufe
- Speichern
- Laden
- Neustart

Beispiel:

```text
Geld: 24 € | Holz: 12 | Stein: 8 | Metall: 0 | Gebäude: Bauplatz
```

---

## 4. Kontextpanel

Wenn ein Objekt angeklickt wird, erscheint unten oder rechts ein Panel.

### Baum

```text
Baum

Aktion:
[Holz sammeln]

Ertrag: +2 Holz
```

### Steinhaufen

```text
Steinhaufen

Aktion:
[Stein sammeln]

Ertrag: +2 Stein
```

### Bauplatz

```text
Firmengebäude
Aktueller Stand: Bauplatz

Nächster Ausbau: Fundament
Benötigt:
- 10 Holz
- 20 Stein

[Ausbauen]
```

Wenn Ressourcen fehlen:

```text
Es fehlen:
- 4 Holz
- 12 Stein
```

### Markt

```text
Markt

Holz verkaufen: 2 €/Stück
Stein verkaufen: 3 €/Stück
Metall verkaufen: 8 €/Stück

[1 verkaufen] [5 verkaufen] [10 verkaufen] [Alles verkaufen]
```

---

## 5. Rückmeldungen

Jede relevante Aktion braucht Feedback.

Beispiele:

- `+2 Holz gesammelt`
- `+2 Stein gesammelt`
- `Nicht genug Ressourcen`
- `Fundament gebaut`
- `5 Holz für 10 € verkauft`
- `Spielstand gespeichert`
- `Spielstand geladen`

Die letzte Meldung kann als kleine Statuszeile im unteren Bereich erscheinen.

---

## 6. Farben und Stil

Vorgeschlagener Stil:

- dunkles, modernes UI
- dezente Blau-/Cyan-Akzente
- gute Lesbarkeit
- klare Buttons
- leichte Schatten
- nicht zu verspielt

Mögliche Farbwerte:

```css
--bg-main: #0f172a;
--bg-panel: #111827;
--bg-panel-light: #1f2937;
--accent: #38bdf8;
--accent-soft: #0ea5e9;
--text-main: #f8fafc;
--text-muted: #cbd5e1;
--danger: #f87171;
--success: #34d399;
```

---

## 7. Buttons

Buttons sollen klar erkennbar sein.

Zustände:

- normal
- hover
- disabled
- active/focus

Deaktivierte Buttons dürfen nicht klickbar wirken.

---

## 8. Objekt-Hover

Klickbare Objekte sollen bei Hover leicht reagieren:

- Cursor: pointer
- leichte Helligkeitserhöhung
- optional dezenter Rahmen
- optional Tooltip mit Objektname

---

## 9. Barrierearme Gestaltung

Auch für frühe Version beachten:

- ausreichend Kontrast
- Buttons mit Text, nicht nur Icons
- klare Meldungen
- keine ausschließlich farbliche Information
- Schriftgröße nicht zu klein

---

## 10. Tutorialführung

Ein kleines Tutorial kann über Aufgabenmeldungen erfolgen.

Beispiel:

```text
Ziel 1: Wähle einen Bauplatz aus.
Ziel 2: Sammle 10 Holz.
Ziel 3: Sammle 20 Stein.
Ziel 4: Baue das Fundament.
```

Für Version 0.1 reicht ein statischer Hinweisbereich. Ein vollständiges Quest-System kann später entstehen.

---

## 11. Mobile Darstellung

Nicht Hauptziel in Version 0.1, aber:

- HUD darf umbrechen
- Buttons müssen bedienbar bleiben
- Welt darf horizontal scrollbar sein oder skaliert werden
- keine winzigen Klickflächen

---

## 12. UX-Fehler vermeiden

Nicht erlaubt:

- Klick ohne Rückmeldung
- Ressourcenabzug ohne sichtbare Erklärung
- Ausbau trotz fehlender Ressourcen
- negative Werte
- Speichern ohne Rückmeldung
- Buttons, die sichtbar sind, aber nichts tun
- zu viele Optionen am Anfang
