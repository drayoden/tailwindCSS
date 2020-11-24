#### tailwind CSS - yt; the net ninja - July 6, 2020 
* code is [here](https://github.com/iamshaunjp/tailwind-tutorial/blob/lesson-2/public/index.html)
* made of utility classes
* lower-level than bootstrap or materialize
* no 'set' look or feel like bootstrap or materialize
---
* install:
    * install node.js
    * got to project folder - `npm init -y` - creates package.json, tracks dependencies
    * project folder - `nmp install tailwindcss` - creates 'node_modules' folder. not messed with here
    * create public/src folders
    * create src/styles.css and insert below:
        `@tailwind base;`
        `@tailwind components;`
        `@tailwind utilities;`
    * create npm script `build-css` in package.json file (see file) - can be used to 'compile'  src/sytles.css into public/styles.css
    * run script above `npm run build-css` - creates new public/sytles.css



    





