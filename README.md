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

### Step 3: Remove Example Cards

Delete the example art cards that have placeholder images (painting1.jpg through painting6.jpg).

---

## Setting Up Formspree (Contact Form)

The contact form uses Formspree to send emails. Here's how to set it up:

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Set the email to receive submissions: `nlziegler@cox.net`
4. Copy your form endpoint (looks like `https://formspree.io/f/xyzabcde`)
5. In `index.html`, find this line:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST"
   ```
6. Replace `YOUR_FORM_ID` with your actual form ID

**Free tier includes:** 50 submissions per month

---

## Deploying to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create account)
2. Click the "+" icon and select "New repository"
3. Name it (e.g., `nana-art-gallery`)
4. Keep it Public (required for free GitHub Pages)
5. Click "Create repository"

### Step 2: Upload Files

Using GitHub Desktop (easiest):
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Clone your new repository
3. Copy all website files into the repository folder
4. Commit and push

Or using command line:
```bash
cd /path/to/Nana-Art-Website
git init
git add .
git commit -m "Initial commit: Nana's Art Gallery"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

---

## Connecting Custom Domain (nancyzieglergallery.com)

### Step 1: Configure GitHub

1. In repository Settings > Pages > Custom domain
2. Enter: `nancyzieglergallery.com`
3. Click Save

### Step 2: Update DNS Settings

In your domain provider's DNS settings, add these records:

**Option A: A Records (recommended)**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**Option B: CNAME Record**
```
Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

### Step 3: Wait and Verify

- DNS changes can take up to 48 hours to propagate
- Once active, enable "Enforce HTTPS" in GitHub Pages settings

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

---

## Support

For issues with:
- **Formspree:** [formspree.io/help](https://help.formspree.io/)
- **GitHub Pages:** [docs.github.com/pages](https://docs.github.com/en/pages)
- **Domain DNS:** Contact your domain registrar's support

---

*Website created with love for Nancy Ziegler's art collection.*
