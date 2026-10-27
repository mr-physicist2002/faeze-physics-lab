# Faeze & the Little Universe · Paper edition

A musical, personal physics playground with seven rooms and eighteen experiments. This version uses warm paper colors, simple original line drawings, English labels, and native MathML formulas. The static teacher character has been removed from every laboratory. Faeze's character and the personal Persian message remain in the opening/flower sequence.

The original cosmic musical overture is retained. Lessons have short action cues, responsive controls, live measurements and explicit model notes. There is no spoken narration. Experiments start in Explore mode; Preview is optional.

## Rooms

| Room | Experiments |
| --- | --- |
| Classical mechanics | Pendulum and energy; stationary action; Hamiltonian phase space |
| Electricity & magnetism | Point-charge fields; induction; a simple resistive-lamp circuit |
| Heat & statistics | Ideal gas; free expansion; a Carnot cycle |
| Quantum physics | Two-path interference; the infinite well; tunnelling |
| General relativity | Weak-field light bending; gravitational clocks |
| The dark universe | A toy galaxy; matter + cosmological-constant expansion |
| Open questions | Scale map; black-hole information, the early universe and quantum geometry |

## Use

Change a slider and watch the diagram and numbers respond. Pause, speed, Reset and optional Preview controls sit underneath the apparatus. The adjacent action button operates that experiment's switch, detector, partition or other apparatus. Room navigation is always open; discoveries are earned from exploration and stored in the current browser.

Direct dragging is available for the pendulum, trial path, magnet, gas piston, and question selection. Every parameter also has a labeled keyboard-accessible slider. Home/End and arrow keys work on sliders. The music and calm-motion controls remain available. Calm suppresses decoration; Pause freezes the active apparatus.

## Run locally

No install or build is needed. Use an HTTP server for JavaScript modules:

```bash
npm run serve
```

Open http://localhost:3000. Python 3 runs this convenience command; any static web server may serve `dist/`.

```bash
npm run check
npm test
```

The tests require Node.js 18+ and have no package dependencies.

## GitHub Pages

The included `.github/workflows/pages.yml` checks the app, runs its tests, and publishes `dist/` after a push to the repository's default branch or a manual workflow run.

1. Pull the selected repository's current default branch and integrate the project without replacing unrelated files.
2. In **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
3. Push to the default branch or manually run **Publish Faeze's Universe**.
4. Use the Pages URL returned by GitHub. Check the actual recipient's phone before sharing the surprise.

All app URLs are relative. No API keys, backend, external scripts, CDN, or external fonts are required.

## Files

- `dist/index.html`, `dist/style.css`: interface and design.
- `dist/app.js`: music and personal opening.
- `dist/stations.js`: English lesson definitions and native MathML.
- `dist/physics.js`: mathematical models.
- `dist/lab-state.js`: apparatus state and simulation.
- `dist/lab-renderer.js`: line-art diagrams linked to those models.
- `dist/lab.js`: controls, navigation, and progress.
- `AUDIT.md`, `SCIENCE.md`, `TESTING.md`: corrections, assumptions, and validation.
