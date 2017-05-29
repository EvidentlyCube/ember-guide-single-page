# Ember Single Page Guide generator
A script to generate a single-page version of the most current [ember guide](https://guides.emberjs.com), perfect for printing.

## Building the guide

 1. Checkout the repository
 2. Make sure you have a mostly recent version of Node.js installed
 3. `npm install` to install dependencies
 4. `npm run-script clone` to clone [emberjs/guides](https://github.com/emberjs/guides) repo
 4. `npm run-script build` to generate the file 
 5. The built entrypoint is in `dist/index.html`
 
Graphically it's very barebone as the intention of the script was to generate a printable document.
