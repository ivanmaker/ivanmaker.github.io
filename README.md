# Isaac Vazquez Portfolio + Resume

This package treats the portfolio and resume as one connected professional system.

## Files

- `index.html` — portfolio landing page
- `resume.html` — browser-based one-page resume with print/PDF styling
- `styles.css` — shared visual system for both pages
- `script.js` — mobile navigation, current year, and resume print action
- `assets/projects/` — project media placeholders

## Project images and GIFs

Replace the SVG placeholder files in `assets/projects/` with your own screenshots or GIFs.

You can either:

1. Keep the existing filenames and overwrite each placeholder, or
2. Change the `src` value in `index.html`.

Recommended media:

- 1600 × 1000 screenshots for static images
- GIFs under roughly 8–10 MB
- Short, focused clips showing one meaningful interaction
- Consistent aspect ratios across project cards

## Links to verify

Before publishing:

- Replace the Winlock GitHub/live-demo placeholder links.
- Confirm `https://ivanmaker.github.io` is the final portfolio URL.
- Confirm every GitHub repository URL.
- Add live demos where available.
- Verify the LinkedIn URL.
- Test the email and phone links.

## Resume workflow

Open `resume.html` in a browser and select **Print / Save PDF**.

The print stylesheet:

- uses US Letter dimensions
- removes the browser toolbar
- removes the on-page resume controls
- keeps the design to one page

For the cleanest PDF export, disable browser headers and footers in the print dialog.

## Deployment

Copy the files into the root of the `ivanmaker.github.io` repository and push to GitHub.

Because this is a static site, no build command is required.
