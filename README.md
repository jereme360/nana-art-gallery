# Nancy Ziegler Gallery Website

A beautiful, elegant art gallery website with ornate gold frames and flip-on-hover animations.

## Quick Start

1. Open `index.html` in your browser to preview the site locally
2. Add your artwork images to the `photos/` folder
3. Update the HTML with your art information (see below)
4. Set up Formspree for the contact form
5. Deploy to GitHub Pages

---

## Adding Your Artwork

### Step 1: Add Images

Place your artwork images in the `photos/` folder. Recommended:
- Format: JPG or PNG
- Size: At least 600px wide for best quality
- Name them descriptively (e.g., `sunset-meadow.jpg`, `mountain-lake.jpg`)

### Step 2: Add Art Cards to HTML

Open `index.html` and find the gallery section. Copy this template for each artwork:

```html
<div class="art-card">
    <div class="card-inner">
        <div class="card-front">
            <div class="frame">
                <img src="photos/YOUR-IMAGE.jpg" alt="Description of artwork">
            </div>
        </div>
        <div class="card-back">
            <h3>Artwork Title</h3>
            <p>Medium, Year</p>
        </div>
    </div>
</div>
```

Replace:
- `YOUR-IMAGE.jpg` with your image filename
- `Description of artwork` with a brief description (for accessibility)
- `Artwork Title` with the painting's name
- `Medium, Year` with details like "Oil on canvas, 2024"
---

## File Structure

```
Nana-Art-Website/
├── index.html          # Main page
├── css/
│   └── styles.css      # All styling
├── js/
│   └── main.js         # Smooth scroll & touch support
├── images/             # Site assets (frame, etc.)
├── photos/             # Your artwork images go here
└── README.md           # This file
```

---

## Customization

### Changing Colors

In `css/styles.css`, find the `:root` section at the top:

```css
:root {
    --gold-light: #d4a847;
    --gold-medium: #b8860b;
    --gold-dark: #8b6914;
    --cream: #faf8f5;
    /* etc. */
}
```

### Changing Fonts

The site uses Google Fonts:
- "Great Vibes" for cursive headings
- "Cormorant Garamond" for body text

To change, update the Google Fonts link in `index.html` and the font variables in `styles.css`.

