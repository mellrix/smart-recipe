## Smart Recipe Generator

Smart Recipe Generator suggests recipes based on ingredients you have. It supports ingredient input (text or image), dietary preferences, filters (time/difficulty), substitution tips, serving size adjustments, nutrition info, and lets you rate/favorite recipes. Built with React + Vite. Image recognition via TensorFlow.js MobileNet.

### Run locally
```
npm install
npm run dev
```

### Build
```
npm run build
npm run preview
```

### Deploy
- Vercel: import this repo and deploy (build command `npm run build`, output `dist`)
- Netlify: set build `npm run build`, publish directory `dist`

### Approach (<=200 words)
This app models recipes with structured metadata (ingredients, nutrition, dietary tags, time, difficulty). Users enter ingredients or upload a photo; MobileNet (tfjs) classifies the image to propose ingredient labels. A simple matching function scores each recipe by the proportion of ingredients available (including optional and declared substitutions) and filters by dietary tags, time, and difficulty. Recipes are sorted by score and displayed with steps and nutrition per serving. Serving size is adjustable client-side by scaling ingredient amounts. Basic substitution suggestions are provided by a curated mapping plus per-recipe substitution hints. Ratings and favorites persist in `localStorage`, which also enables a basic suggestions UX (favorite/star recipes to surface them later). The UI is intentionally minimal, responsive, and uses accessible HTML elements with loading states around model load and classification. The solution emphasizes clarity, small modules (`match`, `storage`, `substitutions`), and a predefined database of 20+ diverse recipes to satisfy the requirements and allow fast, local testing and free-tier hosting.

### Tech
- React + TypeScript + Vite
- TensorFlow.js + MobileNet (image ingredient detection)
- LocalStorage for ratings/favorites

### Notes
- Image recognition is best-effort; it proposes likely ingredient labels. You can edit the ingredient list after detection.
