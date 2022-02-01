# E2E tests framework description

## Cypress folders structure

- fixtures (data file, data for mocks)
- helpers (common functions/data generator)
  - timeouts.ts (custom timeouts)
  - utils.js (common functions)
- integration (test spec files)
- pages (page objects for different features/pages here)
  - pageIndex.js - global entry point for all pages objects (some sort of Page Objects Factory pattern)
  - constants (common things for page objects)
    - cypressGlobal.js (global variables from Cypress)
    - selectors.js (selectors for page elements)
- plugins
  - index.js (task functions defined here)
  - credentials.json (json for gmail account auth generation)
  - emailAccount.js (functions for EtherealMail)
  - etherealConfig.js (config for EtherealMail)
  - gmail_token.json (token for Gmail auth)
- support
  - commands.js (custom commands defined here)
  - index.js (where we import all of our custom commands, define other Cypress functions)
  - index.d.ts (where we type all of our tasks, custom commands, etc.)
- mochawesome-report (here will be report in HTML after test run)

## Install deps

```bash
npm install
```

## Run tests

```bash
npx cypress run -b chrome --headless
```
