# retro board ui

`Retro board` project's react ui.

# project bootstrapping

Some tips and tricks for a new project:

- this app was created using `create-react-app`
- eslint - custom eslint config
  - to start custom eslint config: `eslint --init`
  - to install `airbnb` and all supporting packages:`npx install-peerdeps --dev eslint-config-airbnb` - [airbnb npm page](https://www.npmjs.com/package/eslint-config-airbnb)
  - `.env` file with `EXTEND_ESLINT=true` to extend `create-react-app` internal eslint config with our custom one
    - there is bug in `cra` so after eslint config changes we need to clear cache `npm run clear-cache:eslint`
  - gotta downgrade the `eslint` version to match the `create-react-app` defined in their `package.json`
- prettier config:
  - prettier - [config](https://prettier.io/docs/en/integrating-with-linters.html)
  - eslint-config-prettier- [config](https://github.com/prettier/eslint-config-prettier)
- add `husky` + `lint-staged` to handle pre commit chores
- `source-map-explorer` - to have visual clue what is going on

The `build` script does not run tests & lint by default, unless its finds that `CI=true`

# techstack

- react
- redux
- redux saga
- reselect (future)
- redux form (future)
- react router (future)
- axios (future)
