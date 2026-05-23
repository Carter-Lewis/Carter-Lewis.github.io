# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio website for Carter Lewis, deployed via GitHub Pages. No build step — the site is plain HTML/CSS/JS served directly from the repo root. Open `index.html` in a browser to preview locally.

## Architecture

All content lives in a single `index.html`. Every section (About, Projects, Contact, Resume, and each individual project page) is a full-screen `<div class="overlay">` that starts hidden and slides in when triggered. The overlay system is driven by `js/script.js`.

**Adding a new project:**
1. Add an overlay `<div>` to `index.html` with `id="your-project-id"` and `class="overlay project"`, containing `.project-page-card` sections.
2. Add a close button element with the id matching `closeBtn` below.
3. Register the overlay in the `OVERLAYS` config object in `js/script.js`:
   ```js
   'your-project-id': {
       closeBtn: 'close-your-project-btn',
       dimension: 'height',
       parent: 'projects-menu'
   }
   ```
4. Add a link in the `#projects-menu` overlay with `onclick="openOverlay('your-project-id')"`.

## Key JS classes (`js/script.js`)

- **`OverlayManager`** — central controller. Opens/closes overlays by toggling `style.height` or `style.width` to `100%`/`0%`, manages button visibility, staggered link animations, and a close-stack so Escape closes the topmost overlay.
- **`CustomCursor`** — replaces the OS cursor with a branded circle (`#cursor-shape`) that grows on interactive elements. Hidden on touch devices.
- **`ScrollAnimations`** — uses `IntersectionObserver` to fade in `.fade-in` cards and stagger `.about-bullets` list items on scroll.
- **`KeyboardNav`** — Escape key closes the most recently opened overlay.

Legacy per-overlay functions (`openTSPMenu`, `closeAboutMenu`, etc.) are thin wrappers around `overlayManager.open/close` kept for backward compatibility with existing HTML `onclick` attributes.

## CSS design tokens (`css/style.css`)

All colours are CSS custom properties on `:root`:
- `--oxfordblue` `--cream` `--burntsienna` `--darkmossgreen` `--cadetgray`

Transitions and radii also live as tokens (`--transition-smooth`, `--radius-md`, etc.). Use these rather than hardcoding values.

## Dependencies

`three` (^0.177.0) is installed in `node_modules` but not yet wired into the page. No other runtime dependencies. No bundler, no transpiler.
