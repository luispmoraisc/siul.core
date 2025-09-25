## 🤝 Contributing

We welcome contributions from the community! Please follow our contribution guidelines:

### 🚀 Getting Started

1. **Clone the repository** from the `main` branch:

   ```bash
   gh repo clone luispmoraisc/siul.core
   cd siul.core
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Create a new branch** following the `conventional-commit` pattern:
   ```bash
   git checkout -b feat/new-component-name
   # or
   git checkout -b fix/component-issue-description
   ```

### 🧩 Adding New Components

Generate a new component using our NX generator:

```bash
nx g @nx/react:component --path=packages/ds-mui/src/<ComponentName>/<ComponentName>
```

> 💡 **Tip:** Ensure that the `ComponentName` follows PascalCase convention

### ✅ Testing Your Changes

Run the test suite to ensure your changes don't break existing functionality:

```bash
# Run tests for the ds-mui package
nx test @luispmoraisc/ds-mui

# Run tests in watch mode during development
nx test @luispmoraisc/ds-mui --watch
```

### 🔧 Local Testing

To test your changes in a real project before publishing:

1. **Build the package** locally:

   ```bash
   npx nx build ds-mui
   ```

2. **Link the package** using [yalc](https://github.com/wclr/yalc) in your test project:

   ```bash
   npx yalc add @luispmoraisc/ds-mui
   ```

3. **Test your changes** and ensure everything works as expected

> 🛠 **Why yalc?** We use `yalc` instead of npm link to avoid dependency resolution issues and provide a more reliable local testing experience.

### 📦 Learn About Our Release Process

Interested in how we manage releases? Visit our [RELEASE.md](https://github.com/luispmoraisc/siul.core/blob/main/RELEASE.md) page to understand the steps and guidelines we follow to ensure smooth and consistent releases for our project. Dive into the details and see how you can contribute to the process!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/luispmoraisc/siul.core/blob/main/LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ by the <a href="https://github.com/luispmoraisc">@luispmoraisc</a></p>
  <p>
    <a href="https://luispmoraisc.github.io/siul.core/">📖 Documentation</a> •
    <a href="https://github.com/luispmoraisc/siul.core/issues">🐛 Report Bug</a> •
    <a href="https://github.com/luispmoraisc/siul.core/issues">💡 Request Feature</a>
  </p>
</div>
