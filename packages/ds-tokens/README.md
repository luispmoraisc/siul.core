# @luispmoraisc/ds-tokens

## Technologies

- [Style Dictionary](https://styledictionary.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [NX](https://nx.dev/)

## Creating a New Token

Inside the `src/tokens/categories` folder, create a new folder with the name of the category if it doesn't already exist, and then create an `index.json` file inside it.

> The first attribute of your JSON file will be considered the name of the category. Save this name as it will be used in the next steps.

In the `config.json` file, navigate to the `files` attribute under the `js` platform and add a new filter with the name of the newly created category, updating the `category` and `destination` attributes accordingly.

Open the `vite.config.ts` file and add a new input to the `rollup` configuration.

Run the command `nx build ds-tokens` to generate the new tokens.

## TO DO

- Improve the development experience.
- Avoid requiring everyone to modify the `vite` and `style dictionary` configurations.
