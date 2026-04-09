# 🚂 Groove Train Time

**Stay on the Right Track with Music + Learning!**

An interactive educational web application for kids featuring catchy songs, fun games, and engaging learning activities. Built with Hono framework and deployed on Cloudflare Pages.

## 🌟 Project Overview

- **Name**: Groove Train Time
- **Goal**: Create an engaging, kid-friendly educational platform combining music and interactive learning
- **Tech Stack**: Hono + TypeScript + TailwindCSS + Cloudflare Pages
- **Status**: ✅ Active Development

## 🚀 URLs

- **Sandbox Development**: https://3000-idqwplrdx32pq1s0mhx4q-583b4d74.sandbox.novita.ai
- **Production**: (To be deployed to Cloudflare Pages)
- **GitHub**: (To be pushed)

## ✨ Currently Completed Features

### 🎵 Homepage
- ✅ Neon-themed hero section with animated logo
- ✅ Floating musical note animations
- ✅ Feature cards showcasing:
  - Groovy Songs (educational music)
  - Coloring Game (interactive art)
  - Music Videos (sing-along content)
  - Star Rewards (gamification)
- ✅ Music player teaser with waveform animation
- ✅ Responsive navigation menu
- ✅ "Board the Train" CTA with audio

### 🚂 Train Page
- ✅ Welcome banner with train theme
- ✅ Song selection cards:
  - Alphabet Express (🔤)
  - Numbers on the Track (🔢)
  - Color Conductor (🌈)
  - Shape Shifter Shuffle (⭐)
- ✅ Animated track dividers
- ✅ Back navigation

### 🎨 Coloring Game (Rainbow Painter)
- ✅ Interactive SVG-based coloring interface with **60+ precisely mapped clickable regions**
- ✅ Color palette with **20+ vibrant colors**
- ✅ Paint and erase tools with visual toggle
- ✅ **Fully mapped Rainbow Painter character** with detailed sections:
  - 🌈 **6 separate rainbow bands** (Red, Orange, Yellow, Green, Blue, Violet)
  - ☁️ **Clouds** (Left Cloud with 3 puffs, Right Cloud with 3 puffs)
  - 🌿 **Nature elements** (Grass, Left/Right Plants, Red Berries ×6, Flowers ×8)
  - 🪣 **Paint Bucket** with handle
  - 👧 **The Girl** with 30+ body parts:
    - Face, Ears, Eyes (whites & pupils), Cheeks, Neck
    - Hair (4 sections: main afro, left/right puffs, top)
    - Hair Bow accessory
    - Dress, Left/Right Straps
    - Left/Right Arms, Left/Right Hands
    - Left/Right Legs
  - 🖌️ **Paintbrush** (Handle, Ferrule, Brush Tip, Magic Sparkle ✨)
- ✅ **Hover tooltip system** - Shows precise region name when hovering
- ✅ **Yellow glow effect** on hover for visual feedback
- ✅ Save artwork functionality (downloads as SVG file)
- ✅ Clear all button to reset entire painting
- ✅ Responsive design with 1024×1024 viewBox
- 📄 See [COLORING_REGIONS.md](./COLORING_REGIONS.md) for complete region mapping documentation

## 📋 Functional Entry URIs

| Path | Description | Parameters |
|------|-------------|------------|
| `/` | Homepage | None |
| `/` | Train Page (via navigation) | `showPage('train')` |
| `/` | Coloring Game (via navigation) | `showPage('coloring')` |
| `/static/styles.css` | Main stylesheet | None |
| `/static/app.js` | JavaScript functionality | None |
| `/static/*.svg`, `/static/*.jpg` | Static assets | None |

## 🏗️ Data Architecture

### Data Models
- **Page State**: Client-side JavaScript manages three main views:
  - `page-home`: Homepage with features
  - `page-train`: Song selection interface
  - `page-coloring`: Interactive coloring game

### Storage Services
- **Static Assets**: Hosted on Cloudflare Pages CDN
- **No Database**: Pure frontend application with no persistent data storage
- **Client-Side State**: All interactions managed via JavaScript DOM manipulation

### Data Flow
1. **User Navigation**: Button clicks → `showPage(pageName)` → DOM visibility toggle
2. **Coloring Game**: Color selection → Click region → SVG fill attribute update
3. **Save Feature**: SVG serialization → Blob creation → Download trigger

## 👨‍👩‍👧‍👦 User Guide

### Getting Started
1. **Visit Homepage**: Land on the neon-themed Groove Train homepage
2. **Click "Board the Train"**: Navigate to the song selection page
3. **Choose an Activity**:
   - Select a song card to play educational music (coming soon)
   - Click "▶ Play Now" on Coloring Game card to start coloring

### Coloring Game Instructions
1. **Navigate**: From homepage click "Coloring Game" card, or from Train page
2. **Select a Color**: Click any of the 20+ color swatches in the left sidebar
3. **Hover to Explore**: Move mouse over the painting to see region names in tooltip
4. **Paint Regions**: Click on any of the 60+ clickable regions to fill with selected color
   - **Rainbow bands** (6 separate arcs)
   - **Clouds** (left and right with multiple puffs)
   - **Nature elements** (grass, plants, berries, flowers)
   - **Paint bucket** and handle
   - **The Girl** (face, hair, eyes, dress, arms, legs - 30+ parts!)
   - **Paintbrush** (handle, ferrule, tip, sparkle)
5. **Erase**: Click eraser tool (⬜), then click colored regions to remove color
6. **Save Your Art**: Click "💾 Save Art" to download your masterpiece as SVG file
7. **Start Over**: Click "🗑 Clear All" to reset all regions to blank
8. **Go Back**: Use "← Back" button to return to Train page

**Pro Tips:**
- Hover over any region to see its name before clicking
- The painting template remains visible underneath (55% opacity)
- Try coloring the rainbow in order: Red → Orange → Yellow → Green → Blue → Violet
- Don't forget the details: cheeks, bow, sparkle, berries!

### Navigation
- **Back Button**: Return to previous page (← Back)
- **Nav Menu**: Quick links to Songs, Games, Videos, For Parents (placeholders)

## 🛠️ Features Not Yet Implemented

- ❌ Actual song playback functionality
- ❌ Music video player integration
- ❌ Star reward system with progress tracking
- ❌ User accounts and saved progress
- ❌ Parent dashboard
- ❌ Additional games beyond coloring
- ❌ Mobile-optimized gestures (swipe navigation)
- ❌ Audio controls for background music
- ❌ Accessibility features (screen reader support, keyboard navigation)
- ❌ Multi-language support

## 🎯 Recommended Next Steps for Development

### Priority 1: Core Functionality
1. **Implement song playback**: Add actual audio files and player controls
2. **Complete interactive games**: Expand beyond coloring with drag-drop activities
3. **Star reward system**: Add gamification with progress tracking

### Priority 2: User Experience
4. **Mobile optimization**: Add touch gestures and responsive layouts
5. **Accessibility**: Implement ARIA labels, keyboard navigation, screen reader support
6. **Performance**: Optimize asset loading and animations

### Priority 3: Content Expansion
7. **More songs**: Create library of educational songs (alphabet, numbers, shapes, colors)
8. **Video content**: Add animated music videos
9. **Additional games**: Memory matching, pattern recognition, simple puzzles

### Priority 4: Advanced Features
10. **User accounts**: Authentication and progress saving
11. **Parent dashboard**: Progress tracking, settings, content controls
12. **Analytics**: Track popular activities and learning progress

## 🚀 Deployment

### Local Development
```bash
# Install dependencies (already done)
npm install

# Build the project
npm run build

# Start development server
pm2 start ecosystem.config.cjs

# Test the application
curl http://localhost:3000
```

### Production Deployment to Cloudflare Pages

**Prerequisites:**
- Cloudflare account
- Cloudflare API token configured

```bash
# Setup Cloudflare authentication (REQUIRED before deployment)
# Call setup_cloudflare_api_key tool or configure via Deploy tab

# Verify authentication
npx wrangler whoami

# Build for production
npm run build

# Create Cloudflare Pages project (first time only)
npx wrangler pages project create webapp \
  --production-branch main \
  --compatibility-date 2024-01-01

# Deploy to Cloudflare Pages
npm run deploy:prod
```

## 📁 Project Structure

```
webapp/
├── src/
│   └── index.tsx          # Main Hono application (SSR HTML)
├── public/static/          # Static assets served at /static/*
│   ├── styles.css          # Main stylesheet (neon theme)
│   ├── app.js              # JavaScript functionality
│   ├── logo.svg            # Navigation logo
│   ├── hero-logo-real.png  # Homepage hero logo (real image)
│   ├── train-banner-real.png # Train page banner (real image)
│   ├── coloring-rainbow-painter-bw.jpg # Coloring template (B&W, 893KB)
│   ├── coloring-rainbow-painter-color.jpg # Coloring reference (Color, 112KB)
│   └── board-audio.mp3     # "Board the Train" audio
├── dist/                   # Build output (generated)
├── .git/                   # Git repository
├── .gitignore              # Git ignore patterns
├── ecosystem.config.cjs    # PM2 configuration
├── wrangler.jsonc          # Cloudflare configuration
├── vite.config.ts          # Vite build configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🎨 Design System

### Color Palette
- **Neon Blue**: `#00c8ff` - Primary accent, nav elements
- **Neon Yellow**: `#ffe600` - CTA buttons, highlights
- **Neon Pink**: `#ff2d78` - Music player, special accents
- **Neon Green**: `#00ff9f` - Success states, positive actions
- **Dark BG**: `#050a1a` - Main background
- **Card BG**: `#0d1f45` - Card backgrounds

### Typography
- **Boogaloo**: Playful headings and titles
- **Orbitron**: Tech-style UI elements
- **Nunito**: Body text and descriptions

### Animations
- Logo bobbing animation
- Floating musical notes
- Waveform bars
- Card hover effects
- Track rolling dividers

## 🔧 Technical Details

### Framework & Libraries
- **Hono**: Lightweight web framework for Cloudflare Workers
- **Vite**: Build tool and development server
- **Wrangler**: Cloudflare Pages deployment CLI
- **PM2**: Process manager for development server

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ JavaScript features
- CSS Grid and Flexbox
- SVG support required for coloring game

### Performance Optimizations
- CSS animations using GPU acceleration
- Lazy-loaded static assets
- Optimized SVG graphics
- Minimal JavaScript bundle size

## 📝 Development Notes

### Git Repository
- ✅ Initialized with comprehensive .gitignore
- ✅ Initial commit completed
- ✅ Ready for GitHub push

### Deployment Status
- ✅ Local development server running
- ✅ Build process verified
- ✅ GitHub Pages deployment active at https://pro-scribeteam.github.io/Groove-Train/
- ✅ Automated CI/CD with GitHub Actions

### Known Issues
- ✅ Real images integrated for hero and train banner
- ✅ Board train audio clip working (212KB MP3)
- ✅ Coloring page mapping completed with 60+ regions
- ⏳ Song playback functionality (coming soon)
- ⏳ Music video player integration (coming soon)

## 📧 Support & Contact

For questions, issues, or contributions, please contact the development team.

---

**Last Updated**: 2026-04-09  
**Version**: 1.1.0  
**License**: Educational Use

**Made with 🎵 for Kids Everywhere**
