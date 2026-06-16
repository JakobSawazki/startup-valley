# GitHub und Deployment – Startup Valley

Dieses Dokument beschreibt, wie das Projekt auf GitHub abgelegt und über GitHub Pages online gestellt werden soll.

---

## 1. Ziel

Das Projekt soll in einem GitHub-Repository liegen, damit:

- beide Laptops denselben Stand nutzen können
- Codex auf jedem Gerät den aktuellen Projektstand lesen kann
- Änderungen versioniert werden
- GitHub Pages das Spiel automatisch online bereitstellt
- ein sauberer Agent-Handshake möglich ist

Aktueller Stand vom 2026-06-16:

- Repository: `https://github.com/JakobSawazki/startup-valley`
- GitHub Pages: `https://jakobsawazki.github.io/startup-valley/`
- Deployment-Quelle: GitHub Actions / `.github/workflows/deploy.yml`

---

## 2. Empfohlener Repository-Name

Vorschläge:

```text
startup-valley
startup-valley-game
wirtschaftssimulation-browsergame
wirtschaftssimulation-browsergame
```

Empfehlung:

```text
startup-valley
```

---

## 3. Sichtbarkeit

Für GitHub Pages ist ein öffentliches Repository besonders einfach. Ein privates Repository kann je nach GitHub-Plan ebenfalls funktionieren. Für einen unkomplizierten Start wird empfohlen:

```text
Public Repository
```

Wenn das Spiel später vertrauliche Inhalte enthält, kann die Sichtbarkeit neu bewertet werden.

---

## 4. Lokale Git-Ersteinrichtung

Im Projektordner ausführen:

```bash
git init
git add .
git commit -m "chore: initialize Startup Valley project"
```

Dann Repository auf GitHub erstellen und verbinden.

Variante mit GitHub CLI:

```bash
gh repo create startup-valley --public --source=. --remote=origin --push
```

Alternative manuell:

1. Auf GitHub neues Repository `startup-valley` erstellen.
2. Lokales Repository verbinden:

```bash
git remote add origin https://github.com/DEIN_GITHUB_NAME/startup-valley.git
git branch -M main
git push -u origin main
```

---

## 5. GitHub Pages aktivieren

In GitHub:

1. Repository öffnen
2. `Settings`
3. `Pages`
4. Als Source `GitHub Actions` auswählen
5. Workflow aus `.github/workflows/deploy.yml` verwenden
6. Push auf `main` auslösen
7. Unter `Actions` prüfen, ob Deployment erfolgreich war

Die spätere URL hat typischerweise dieses Format:

```text
https://DEIN_GITHUB_NAME.github.io/startup-valley/
```

---

## 6. Workflow-Datei

Die Datei `.github/workflows/deploy.yml` ist vorbereitet. Sie veröffentlicht die statische Seite über GitHub Pages.

Wichtig:

- `index.html` muss im veröffentlichten Pfad liegen.
- Keine geheimen Daten ins Repository legen.
- Deployment läuft bei Push auf `main`.

---

## 7. Empfohlener Laptop-Wechsel

Auf Laptop A:

```bash
git status
git add .
git commit -m "docs: update project handoff"
git push
```

Auf Laptop B:

```bash
git clone https://github.com/DEIN_GITHUB_NAME/startup-valley.git
cd startup-valley
```

Wenn Repository bereits existiert:

```bash
git pull
```

Danach Codex starten und anweisen:

```text
Lies zuerst AGENTS.md, CODEX_BRIEFING_AUFBAU_AG.md, TASKS.md, docs/VERSION_STATE.md und docs/HANDOFF.md. Bearbeite nur die erste OPEN-Aufgabe in TASKS.md.
```

---

## 8. Commit-Strategie

Kleine Commits:

```bash
git add .
git commit -m "feat: add resource collection"
git push
```

Nicht sinnvoll:

```bash
git commit -m "alles gemacht"
```

---

## 9. Deployment-Prüfung

Nach Push:

1. GitHub Repository öffnen
2. `Actions` prüfen
3. grüner Haken beim Pages-Deployment
4. Pages-URL öffnen
5. Browser-Konsole prüfen
6. in `docs/HANDOFF.md` notieren:
   - Deployment erfolgreich?
   - URL?
   - letzter Commit?
   - bekannte Probleme?

---

## 10. Typische Fehler

### Seite zeigt 404

Mögliche Ursachen:

- GitHub Pages nicht aktiviert
- falsche Source
- Workflow fehlgeschlagen
- `index.html` fehlt im veröffentlichten Pfad
- Repositoryname/URL falsch

### CSS/JS lädt nicht

Mögliche Ursachen:

- absolute Pfade wie `/styles/main.css`
- bei Project Pages besser relative Pfade verwenden: `styles/main.css`

### Deployment läuft nicht

Mögliche Ursachen:

- Workflow liegt nicht unter `.github/workflows/`
- Pages ist nicht auf GitHub Actions gestellt
- fehlende Berechtigungen
- YAML-Fehler

---

## 11. Keine sensiblen Daten

Nicht in GitHub hochladen:

- private Zugangsdaten
- API-Keys
- Telefonnummern
- private Dokumente
- Kundendaten
- Steuerunterlagen
- sonstige persönliche Daten

Dieses Spielprojekt soll technisch und inhaltlich sauber getrennt bleiben.

---

## 12. Abschlussdefinition für Online-Stellung

Das Projekt gilt als online gestellt, wenn:

- Repository auf GitHub existiert
- `main` Branch den aktuellen Stand enthält
- GitHub Actions Deployment erfolgreich war
- Pages-URL erreichbar ist
- Spiel im Browser startet
- `docs/HANDOFF.md` die URL und den letzten Stand enthält
