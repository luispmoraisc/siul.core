## 🚢 Release Process

Our release process ensures quality and stability:

### 📋 Release Workflow

1. **Development** 🔧

   - Open a PR targeting the `development` branch
   - Automated CI/CD runs tests and builds
   - Generates a pre-release with a random tag

2. **Testing** 🧪

   - Install the pre-release version: `npm install @luispmoraisc/ds-mui@<% RANDOM %>`
   - Validate functionality in your projects
   - Report any issues for resolution

3. **Production Release** 🚀
   - Open a PR from `development` to `main`
   - Upon merge, automatically publishes with `@latest` tag
   - Updates documentation and changelog

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
