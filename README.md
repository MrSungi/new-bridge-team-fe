# retro board ui

`Retro board` project's react ui.

# project bootstrapping

Some tips and tricks for a new project:

- this app was created using `create-react-app` - [url](https://create-react-app.dev/docs/getting-started)
- eslint - custom eslint config
  - `eslint --init`
  - `npx install-peerdeps --dev eslint-config-airbnb` - [airbnb npm page](https://www.npmjs.com/package/eslint-config-airbnb)
  - `.env` file with `EXTEND_ESLINT=true` to extend `create-react-app` internal eslint config with our custom one
- prettier config:
  - prettier - [config](https://prettier.io/docs/en/integrating-with-linters.html)
  - eslint-config-prettier- [config](https://github.com/prettier/eslint-config-prettier)
- add `husky` + `lint-staged` to handle pre commit chores
- `source-map-explorer` - to have visual clue what is going on
