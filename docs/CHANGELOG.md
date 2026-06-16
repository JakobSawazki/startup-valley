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
