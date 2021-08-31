
### Cypress folders structure

- fixtures (data files)
- helpers (common functions/data)
  - timeouts.ts (custom timeouts)
  - utils.js (common functions)
- integration (spec files)
- pages (page objects for different features/pages here)
  - constants (common things for page objects)
    - cypressGlobal.js (global variables from Cypress)
    - selectors.js (selectors for page elements)
- plugins
  - index.js (task functions defined here) 
- support
  - commands.js (custom commands defined here)
  - index.js (where we import all of our custom commands, define other Cypress functions)
  - index.d.ts (where we type all of our tasks, custom commands, etc.)


## Install
Run :
```
npm install
