# @luispmoraisc/ds-tokens

## Technologies

- [Style Dictionary](https://styledictionary.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [NX](https://nx.dev/)

## Creating a New Token

Inside the `src/tokens/categories` folder, create a new folder named after the category if it doesn't already exist. Then, create an `index.json` file inside it.

> The first attribute of your JSON file will be considered the category name. Save this name as it will be used in the following steps.

In the `config.json` file, locate the `files` attribute under the `js` platform and add a new filter for the newly created category. Update the `category` and `destination` attributes accordingly.

Next, open the `vite.config.ts` file and add a new input to the `rollup` configuration.

Finally, run the command `nx build ds-tokens` to generate the new tokens.
