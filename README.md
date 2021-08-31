
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
  - credentials.json (json for gmail account auth generation)
  - emailAccount.js (functions for EtherealMail)
  - etherealConfig.js (config for EtherealMail)
  - gmail_token.json (token for Gmail auth
- support
  - commands.j (custom commands defined here)
  - index.js (where we import all of our custom commands, define other Cypress functions)
  - index.d.ts (where we type all of our tasks, custom commands, etc.)


## Install
Run :
```
npm init 
```
After done, run (to install your project deps):

```
npm install