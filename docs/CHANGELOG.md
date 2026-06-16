# CHANGELOG – Startup Valley

Alle relevanten Projektänderungen werden hier dokumentiert.

Format:

```text
## [Version] – Datum
### Added
### Changed
### Fixed
### Docs
```

---

## [0.0.9-market] – 2026-06-16

### Added

- Marktpanel ergänzt: Klick auf den Markt öffnet eine Verkaufsansicht.
- Zentrale Marktpreise in `src/state.js` ergänzt: Holz `2 EUR`, Stein `3 EUR`.
- Verkaufsmengen `1`, `5`, `10` und `Alles` ergänzt.
- Verkauf von Holz und Stein erhöht Geld und senkt die verkaufte Ressource.
- Verkaufserfolg und fehlende Ressourcen werden im Marktpanel angezeigt.

### Changed

- CSS/JS-Cache-Version auf `0.0.9` aktualisiert.
- Kontextpanel rendert für den Markt jetzt eine eigene Handelsansicht.
- HUD aktualisiert sich direkt nach Marktverkäufen.

### Fixed

- Verkauf ist ohne vorhandene Ressource deaktiviert und kann keine negativen Ressourcenstände erzeugen.
- Verkaufsmengen über dem vorhandenen Bestand bleiben deaktiviert.

### Docs

- `TASK-007` abgeschlossen und nächsten Schritt auf `TASK-008` aktualisiert.
- README, `docs/VERSION_STATE.md` und `docs/HANDOFF.md` auf den Marktverkauf aktualisiert.

## [0.0.8-building-upgrades] – 2026-06-16

### Added

- Echte Gebäudestufen-Ausbaulogik ergänzt.
- `upgradeBuilding()` in `src/state.js` ergänzt, inklusive Ressourcenprüfung, Kostenabzug und Maximalstufen-Schutz.
- Bauplatz-Button führt jetzt den Ausbau aus, sobald genügend Ressourcen vorhanden sind.
- Hausgrafik, Objektlabel und HUD-Hausicon wechseln passend zur aktuellen Gebäudestufe.
- Erfolgs- und Fehlermeldungen für Ausbauaktionen im Bauplatzpanel ergänzt.

### Changed

- CSS/JS-Cache-Version auf `0.0.8` aktualisiert.
- Bauplatzpanel zeigt nach einem erfolgreichen Ausbau direkt die nächste mögliche Stufe und deren Anforderungen.
- `getNextBuildingLevel()` gibt nach der letzten Gebäudestufe korrekt `null` zurück.

### Fixed

- Verhindert, dass nach der Maximalstufe wieder die Bauplatz-Stufe als nächste Stufe erscheint.
- Ausbau kann Ressourcen nicht unter 0 senken.

### Docs

- `TASK-006` abgeschlossen und nächsten Schritt auf `TASK-007` aktualisiert.
- README, `docs/VERSION_STATE.md` und `docs/HANDOFF.md` auf den Gebäudestufen-Ausbau aktualisiert.

## [0.0.7-build-panel] – 2026-06-16

### Added

- Bauplatzpanel ergänzt: Klick auf den Bauplatz zeigt aktuelle Stufe, nächste Stufe und Anforderungen.
- Zentral definierte Gebäudestufen und Baukosten in `src/state.js` ergänzt.
- Ausbau-Button im Bauplatzpanel ergänzt; er ist deaktiviert, wenn Ressourcen fehlen, und aktiv, wenn die Anforderungen erfüllt sind.
- Realistischere transparente PNG-Sprites für Bäume, Steinhaufen und Schrott eingebaut.

### Changed

- Kontextpanel rendert für Gebäude jetzt eine eigene Bauansicht statt nur eines allgemeinen Hinweises.
- CSS/JS-Cache-Version auf `0.0.7` aktualisiert.
- Weltobjekt `main_house` trägt jetzt die zentrale `buildingId` für spätere Ausbaulogik.

### Fixed

- Keine Spiellogikfehler behoben.

### Docs

- `TASK-005` abgeschlossen und nächsten Schritt auf `TASK-006` aktualisiert.
- README, `docs/VERSION_STATE.md`, `docs/HANDOFF.md` und `docs/ASSET_GUIDE.md` auf Bauplatzpanel und Ressourcen-Asset-Pass aktualisiert.

## [0.0.6-depletion] – 2026-06-16

### Added

- Hochwertiges Favicon / Browser-Tab-Icon ergänzt.
- `favicon.ico` und `assets/ui/favicon.png` erstellt.
- Ressourcenquellen besitzen jetzt begrenzte Abbaupunkte.
- Bäume haben 6, Steinhaufen 5 und Schrott 4 Abbaupunkte.
- Ressourcenquellen schrumpfen pro Klick sichtbar über ihren Restzustand.
- Erschöpfte Ressourcenquellen verschwinden visuell und werden deaktiviert.

### Changed

- Welt-Rendering berücksichtigt jetzt den Zustand einzelner Ressourcenquellen aus `gameState.resourceNodes`.
- CSS/JS-Cache-Version auf `0.0.6` aktualisiert.
- `data/world_start.json` um `maxUses` für Ressourcenquellen ergänzt.

### Fixed

- Erschöpfte Ressourcenquellen können nicht weiter abgebaut werden und erhöhen keine Ressourcen mehr.

### Docs

- README, `docs/VERSION_STATE.md`, `docs/HANDOFF.md` und `docs/ASSET_GUIDE.md` auf Favicon und Ressourcenerschöpfung aktualisiert.

## [0.0.5-collection] – 2026-06-16

### Added

- `src/resources.js` für manuelle Ressourcen-Sammellogik ergänzt.
- Baumklick erhöht Holz um 2.
- Steinklick erhöht Stein um 2.
- Schrottklick erhöht Metall um 1.
- Floating-Text zeigt den erhaltenen Ressourcenwert über dem angeklickten Objekt.

### Changed

- Objektklicks auf Ressourcenquellen aktualisieren jetzt sofort `gameState` und HUD.
- Kontextpanel unterscheidet zwischen geplanter Aktion und ausgeführter Sammelaktion.
- Versionsstand auf `0.0.5-collection` aktualisiert.

### Fixed

- Ressourcenwerte bleiben beim Sammeln nicht negativ und werden zentral über State-Funktionen geändert.
- CSS- und JavaScript-Dateien werden mit Versionsquery geladen, damit GitHub Pages nach Deployments keine alte Spiellogik aus dem Browsercache verwendet.

### Docs

- `TASK-004` abgeschlossen und nächsten Schritt auf `TASK-005` aktualisiert.
- README, `docs/VERSION_STATE.md` und `docs/HANDOFF.md` auf den Sammel-Loop aktualisiert.

## [0.0.4-hud] – 2026-06-16

### Added

- Zentrale Ressourcen-Metadaten in `src/state.js` ergänzt.
- HUD/Inventar rendert Geld, Holz, Stein, Metall und Hausstufe aus `gameState`.
- Hover-/Focus-Tooltips für Inventar-Karten ergänzt.
- Kontextpanel zeigt nach Objektklick den Objekttyp und eine vorbereitete Aktion.
- Realistischere transparente PNG-Icons für Geld, Holz, Stein und Metall ergänzt.

### Changed

- Linkes HUD visuell zu einem Inventar mit größeren Icons, Wertanzeige und Infotexten aufgewertet.
- Ressourcenwerte bleiben als State-Daten in JavaScript und werden nicht aus dem DOM gelesen.
- README um aktuellen Versionsstand, Asset-Strategie und Versionsnotizen erweitert.

### Fixed

- Keine Spiellogikfehler behoben.

### Docs

- `TASK-003` abgeschlossen und nächsten Schritt auf `TASK-004` aktualisiert.
- `docs/ASSET_GUIDE.md` um die Asset-Qualitätsrichtung ergänzt.
- `docs/VERSION_STATE.md` und `docs/HANDOFF.md` auf den HUD-/Inventarstand aktualisiert.

## [0.0.3-world] – 2026-06-16

### Added

- PNG-Hintergrund `assets/backgrounds/start_area.png` für die Startwelt ergänzt.
- Austauschbare transparente PNG-Objekte für Bäume, Steine, Schrott, Bauplatz, Markt und Hausstufen ergänzt.
- PNG-Icons für Geld, Holz, Stein und Metall ergänzt.
- `src/world.js` für datengetriebenes Rendern der statischen Startwelt ergänzt.
- `data/world_start.json` als vorbereitete Weltobjekt-Referenz ergänzt.

### Changed

- Spielwelt von CSS-Platzhaltern auf visuelle PNG-Assets umgestellt.
- HUD visuell mit Ressourcen-Icons aufgewertet.
- Objektklicks aktualisieren jetzt das Kontextpanel und schreiben eine Konsolenmeldung.

### Fixed

- Keine Spiellogikfehler behoben.

### Docs

- `TASK-002` abgeschlossen und nächsten Schritt auf `TASK-003` aktualisiert.
- `docs/VERSION_STATE.md` und `docs/HANDOFF.md` auf die grafische Startwelt aktualisiert.

## [0.0.2-online] – 2026-06-16

### Added

- Öffentliches GitHub-Repository `JakobSawazki/startup-valley` erstellt.
- GitHub Pages im Workflow-Modus aktiviert.
- Live-Seite unter `https://jakobsawazki.github.io/startup-valley/` veröffentlicht.

### Changed

- GitHub-Pages-Workflow mit `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24` vorbereitet.
- README und Übergabedokumentation um Repository- und Pages-URL ergänzt.

### Fixed

- Keine Spielfehler behoben.

### Docs

- Vorgezogenes Deployment in `TASKS.md`, `docs/VERSION_STATE.md`, `docs/HANDOFF.md` und `docs/GITHUB_DEPLOYMENT.md` dokumentiert.

## [0.0.1] – 2026-06-16

### Added

- Erste lauffähige HTML/CSS/JS-Grundstruktur erstellt.
- `index.html` mit sichtbarem Spielbereich, HUD und Statusbereich ergänzt.
- `styles/main.css` für responsives Grundlayout ergänzt.
- `src/state.js`, `src/ui.js` und `src/main.js` angelegt.
- `assets/` und `data/` Grundstruktur mit Platzhaltern angelegt.

### Changed

- Projektname in der Dokumentation behutsam auf `Startup Valley` aktualisiert.
- Geplanter Savegame-Key in den Dokumenten auf `startup_valley_save_v1` geändert.

### Fixed

- Noch keine Fehlerbehebungen in Spiellogik vorhanden.

### Docs

- `docs/VERSION_STATE.md`, `docs/HANDOFF.md`, `docs/GITHUB_DEPLOYMENT.md`, `docs/OPEN_DECISIONS.md` und Codex-Prompts auf den aktuellen Stand gebracht.

## [0.0.0-docs] – 2026-06-16

### Added

- Dokumentationspaket für Codex erstellt.
- Projektvision definiert.
- Aufgabenplan erstellt.
- technische Zielarchitektur festgelegt.
- Datenmodell vorbereitet.
- UI/UX-Spezifikation erstellt.
- Asset-Leitfaden erstellt.
- GitHub-Deployment-Anleitung erstellt.
- Agent-Handshake definiert.
- GitHub-Pages-Workflow-Vorlage vorbereitet.

### Changed

- Noch keine Codeänderungen vorhanden.

### Fixed

- Keine Fehlerbehebungen, da noch keine Implementierung existiert.

### Docs

- Startdokumentation vollständig angelegt.
