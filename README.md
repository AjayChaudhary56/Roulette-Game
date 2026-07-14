<<<<<<< HEAD
# Velvet Roulette

A responsive, single-zero European roulette game built with vanilla HTML, CSS, JavaScript, Canvas, and the Web Audio API.

> **Play chips only.** This project does not support real-money gambling, deposits, withdrawals, or cash prizes.

## Live Demo

Add your Vercel URL here after deployment:

```text
https://your-project-name.vercel.app
```

## Features

- European single-zero roulette wheel with 37 pockets
- 30-second betting timer
- Automatic spin when the timer reaches zero
- Manual spin option
- Responsive desktop, tablet, and mobile layouts
- Realistic wheel shading and ball movement
- Accurate winning-number, payout, and statistics logic
- Straight-up, colour, odd/even, low/high, dozen, and column bets
- Chip carousel with 1, 2, 5, 10, 25, 50, and 100 chips
- Double, undo, clear, repeat, reset, and refill controls
- Rolling, pocket, win, and loss sound effects
- Sound on/off control
- Win popup with glow and confetti
- Hot and cold number statistics
- No external libraries or frameworks
- No server, database, account, or API key required

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Canvas API
- Web Audio API

## Project Structure

```text
velvet-roulette/
├── index.html
├── README.md
└── .gitignore
```

The complete application is contained in `index.html`.

## Run Locally

Open `index.html` directly in a modern browser, or run a local server:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## Controls

1. Select a chip value from the carousel.
2. Tap or click a betting position.
3. Use **Undo**, **Clear**, **Double**, or **Repeat** to manage bets.
4. Press **Spin**, or wait for the 30-second timer to finish.
5. The visible ball pocket, displayed result, payout, and statistics use the same winning number.

Browsers normally require a click or tap before audio can start.

## Betting and Payouts

| Bet type | Payout |
|---|---:|
| Single number | 35:1 |
| Red or black | 1:1 |
| Odd or even | 1:1 |
| 1–18 or 19–36 | 1:1 |
| Dozen | 2:1 |
| Column | 2:1 |

Zero loses on even-money bets.

## Upload to GitHub

```bash
git init
git add .
git commit -m "Initial release of Velvet Roulette"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/velvet-roulette.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Deploy on Vercel

1. Confirm the main page is named `index.html` and is in the repository root.
2. Sign in to Vercel.
3. Select **Add New → Project**.
4. Import the GitHub repository.
5. Use **Other** as the framework preset if prompted.
6. Leave the build command and output directory empty.
7. Select **Deploy**.
8. Add the deployment URL to the **Live Demo** section above.

A `vercel.json` file is not required for the current static version.

## Pre-Deployment Checklist

- [ ] Main game file is named `index.html`
- [ ] Game opens without console errors
- [ ] Timer starts at 30 seconds
- [ ] Automatic spin works with and without a bet
- [ ] Manual spin works
- [ ] Ball stops in the centre of a pocket
- [ ] Visible pocket matches the result popup
- [ ] Payout uses the same winning number
- [ ] Balance and bet totals update correctly
- [ ] Sound toggle works after the first interaction
- [ ] Win and loss sounds are comfortable
- [ ] Desktop layout is fully visible
- [ ] Mobile portrait and landscape layouts are usable
- [ ] iPad and tablet layouts are usable
- [ ] Repository contains no passwords, API keys, or private data
- [ ] Live Vercel URL is added to this README

## Recommended Improvements Before Publishing

### Accessibility

- Remove `maximum-scale=1.0` and `user-scalable=no` from the viewport tag so users can zoom.
- Add `aria-label` text to icon-only buttons.
- Add visible keyboard focus styles using `:focus-visible`.
- Do not rely only on red and black colours to communicate results.
- Verify text contrast on smaller screens.

### Repository Presentation

- Add a screenshot or short GIF near the top of this README.
- Add a favicon and social-sharing image.
- Add a licence, such as MIT, if others may reuse the code.
- Add the Vercel URL to the GitHub repository description.
- Use a clear repository name such as `velvet-roulette`.

### Quality Checks

- Test all 37 pockets so the ball, result, payout, history, and statistics always agree.
- Test repeated rounds, not only one spin.
- Test Chrome, Edge, Firefox, and Safari.
- Test audio with headphones before publishing.
- Consider saving the sound setting and play-chip balance with `localStorage`.

### Safety and Scope

- Keep the play-chip disclaimer visible.
- Do not add deposits, withdrawals, payments, or real-money prizes without legal and regulatory review.
- Never place secret keys in client-side JavaScript.

## Browser Support

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

Canvas and Web Audio support are required.

## Known Limitations

- Audio cannot normally autoplay before the user interacts with the page.
- Game state resets when the page is refreshed unless browser storage is added.
- Hot and cold statistics are session-based.
- The result is generated locally and is not cryptographically secure.

## Disclaimer

Velvet Roulette is an entertainment and educational demonstration using virtual play chips. It has no cash value and does not offer real-money gambling.

## Licence

No licence has been selected yet. Add a `LICENSE` file before encouraging reuse or contributions.
=======
# Velvet Roulette — Mobile (iOS & Android)

An offline, play-chip roulette game. The entire game is one self-contained
file (`www/index.html`) — logo, sounds, and logic are all embedded, so it runs
with **no internet connection**. This folder wraps it as a native app using
[Capacitor](https://capacitorjs.com/).

> Entertainment only — virtual play chips with **no real-world monetary value**.

## What changed in this version

- **Logo background removed** — your Velvet Roulette emblem is now a clean
  transparent PNG/WebP. It appears on the start screen (with a gold glow) and as
  the top-left in-game badge, with no black box behind it. It's also set as the
  app icon / apple-touch-icon.
- **Real sound effects** wired to the right moments:
  - `sound_while_placing_bet.mp3` → plays when you drop a chip
  - `BALLL_ROLLING_SOUND.mp3` → loops while the wheel spins (volume ramps down as the ball slows)
  - `BALL_STOPPING_SOUND.mp3` → plays as the ball drops into a pocket
  - The 🔊 button toggles sound; the choice is respected everywhere.
- **Mobile-tuned**: landscape-first layout, notch/safe-area insets
  (`viewport-fit=cover` + `env(safe-area-inset-*)`), no pull-to-refresh /
  overscroll, no accidental zoom, and a "rotate to landscape" hint in portrait.

## Prerequisites

- **Node.js 18+**
- **Android build:** Android Studio (with an SDK + a device or emulator)
- **iOS build:** a Mac with Xcode + CocoaPods (`sudo gem install cocoapods`)

## First-time setup

```bash
cd velvet-roulette-app
npm install

# create the native projects
npx cap add android
npx cap add ios        # macOS only

# copy the web app into them
npx cap sync
```

## Lock to landscape (recommended for the table)

**Android** — in `android/app/src/main/AndroidManifest.xml`, add to the
`<activity>` tag:

```xml
android:screenOrientation="sensorLandscape"
```

**iOS** — in Xcode, target → **General → Deployment Info → Device Orientation**,
tick **Landscape Left/Right** only.

## Run on a device / emulator

```bash
npm run open:android     # opens Android Studio → press ▶ Run
npm run open:ios         # opens Xcode → press ▶ Run   (macOS only)
```

Or straight to a connected device:

```bash
npx cap run android
npx cap run ios
```

## Release builds

**Android — APK (for sideload testing):**
Android Studio → **Build → Build Bundle(s)/APK(s) → Build APK(s)**.
Output: `android/app/build/outputs/apk/debug/app-debug.apk`.

**Android — AAB (for Google Play):**
Android Studio → **Build → Generate Signed Bundle/APK → Android App Bundle**,
create/select a keystore, choose **release**.
Output: `android/app/build/outputs/bundle/release/app-release.aab`.

**iOS (for App Store / TestFlight):**
Xcode → set your **Team** under Signing & Capabilities → **Product → Archive** →
**Distribute App**.

## Updating the game later

Edit `www/index.html` (or drop in a new build of it), then:

```bash
npx cap sync
```

…and rebuild. That's the only step needed to push web changes into both apps.

## App icons & splash (optional polish)

`logo-source.png` is the transparent 512×512 master. To generate all icon/splash
sizes automatically:

```bash
npm i -D @capacitor/assets
npx capacitor-assets generate --iconBackgroundColor '#140a0d' --splashBackgroundColor '#140a0d'
```
(Place `logo-source.png` at `assets/icon.png` first, per the tool's docs.)
>>>>>>> master
