#### tailwind CSS - yt; the net ninja - July 6, 2020 
* code is [here](https://github.com/iamshaunjp/tailwind-tutorial/blob/lesson-2/public/index.html)
* made of utility classes
* lower-level than bootstrap or materialize
* no 'set' look or feel like bootstrap or materialize
---
* install:
    * install node.js
        * update node:
            ```
            npm cache clean -f
            npm install -g n
            n stable | n latest | n [version.number]
            ```

    * got to project folder - `npm init -y` - creates package.json, tracks dependencies
    * project folder - `nmp install tailwindcss` - creates 'node_modules' folder. not messed with here
    * create public/src folders
    * create src/styles.css and insert below:
        ```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```
    * create npm script `buildcss` in package.json file (see file) - can be used to 'compile'  src/sytles.css into public/styles.css
    * run script above `npm run buildcss` - creates new public/sytles.css
    * create tailwind config file: `npx tailwindcss init --full` -- creates tailwind.config.js will all values --  can be user alter/create css properties  -- recompile and you have new or altered properties.
    * better way to alter/create properties, create blank tailwind.config.js: `npx tailwindcss init`-- blank file -- alter/create properties (theme) in the 'extend' object.
    * NOTE: tailwindcss code extension does not work correctly unless you have a tailwind.config.js file.
    * custom font: add @import (google fonts) to public/styles.css, register the font in tailwind.config.js (Nunito), recompile.
    





    





