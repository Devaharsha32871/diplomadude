# Diploma Dude – Project Documentation

**Project Title:** Diploma Dude  
**Developer:** D. Deva Harsha  

Diploma Dude is an AI-powered educational assistant designed to enhance the learning experience of diploma and polytechnic students.  
It offers interactive explanations, personalized recommendations, and video-based learning integration through a user-friendly web platform.

## Documentation Website

This repository includes a static documentation website built with VitePress. The site automatically renders Markdown files from the `docs/` folder as web pages.

### Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4173`.

3. Edit any `.md` file in the `docs/` folder, and the changes will be reflected automatically in the dev server.

### Build and Deploy

1. Build the site locally:
   ```bash
   npm run build
   ```

2. Deploy manually to GitHub Pages:
   ```bash
   npm run deploy
   ```

3. **Automatic Deployment**: On every push to the `main` branch, GitHub Actions will automatically build and deploy the site to GitHub Pages. Ensure GitHub Pages is configured in your repository settings to deploy from the `gh-pages` branch or GitHub Actions.

### Features

- Responsive layout with light/dark mode toggle
- Sidebar navigation with all documentation pages
- Automatic updates on file changes
- Clean typography and minimal design
