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
