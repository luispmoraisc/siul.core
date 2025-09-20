# @luispmoraisc/ds-mui

## Technologies

- Built with [React](https://react.dev)
- Based on [MUI](https://mui.com/)
- Tested with [Vitest](https://vitest.dev/)

## How to contribute

You are welcome to contribute to the Design System. Follow the steps below:

1. Clone the repository from the `main` branch:

```sh
gh repo clone luispmoraisc/siul.core
```

2. Create a new branch following the `conventional-commit` pattern:

```sh
# Replace <type> and <branch_name> as needed
git checkout -b <type>/<branch_name>
```

3. Generate a new component by running the command below:

```sh
nx g @nx/react:component --path=packages/ds-mui/src/<ComponentName>/<ComponentName>
```

> Ensure that the `ComponentName` is in CamelCase.

4. Write unit tests for your changes:

```sh
nx test @luispmoraisc/ds-mui
```

## How to publish a new version

To publish a new version, follow these steps:

> TODO

1. Open a pull request (PR) to the `development` branch;
2. This will trigger a workflow to generate a new tag `@luispmoraisc/ds-mui@next`;
3. Add the package to one of your projects and verify that everything works as expected;
4. Open a PR from `development` to `main`;
5. This will trigger a workflow to generate a new tag and release the package with the `latest` tag;
