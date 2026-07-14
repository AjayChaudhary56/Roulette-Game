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
