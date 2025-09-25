# 🎨 Siul Core

> **A modern, scalable design system and component library for enterprise frontend teams**

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()
[![Version](https://img.shields.io/npm/v/@luispmoraisc/ds-tokens.svg)]()

Siul Core is a comprehensive monorepo that centralizes all shareable frontend code for organizations. Built with reusability, speed, quality, security, and developer experience in mind, this design system ensures consistency across teams while accelerating development workflows.

## ✨ Features

- 🎯 **Centralized Design Tokens** - Consistent visual identity across all products
- 🧩 **Reusable Components** - Battle-tested UI components built with MUI
- 📱 **Multi-platform Export** - Supports JS, CSS, and SCSS formats
- 🔧 **Developer-First** - Optimized tooling and excellent DX
- 📖 **Living Documentation** - Interactive Storybook documentation
- 🚀 **Modern Toolchain** - Built with the latest frontend technologies

## 🛠 Tech Stack

| Technology                                                   | Purpose                 | Version |
| ------------------------------------------------------------ | ----------------------- | ------- |
| [NX](https://nx.dev/)                                        | Monorepo Management     | Latest  |
| [Yarn](https://yarnpkg.com/)                                 | Package Manager         | v3+     |
| [TypeScript](https://www.typescriptlang.org/)                | Type Safety             | v5+     |
| [Vite](https://vitejs.dev/) & [Vitest](https://vitest.dev/)  | Build Tool & Testing    | Latest  |
| [ESLint](https://eslint.org/)                                | Code Linting            | v8+     |
| [Prettier](https://prettier.io/)                             | Code Formatting         | Latest  |
| [Husky](https://typicode.github.io/husky/)                   | Git Hooks               | Latest  |
| [Style Dictionary](https://amzn.github.io/style-dictionary/) | Design Tokens           | v3+     |
| [Storybook](https://storybook.js.org/)                       | Component Documentation | v7+     |
| [React](https://reactjs.org/)                                | UI Library              | v18+    |
| [MUI](https://mui.com/)                                      | Component Foundation    | v5+     |

## 📦 Packages

### 🎨 Design Tokens (`@luispmoraisc/ds-tokens`)

The foundation of our design system, providing consistent design tokens across all platforms.

**What it includes:**

- 🎨 **Color Palette** - Primary, secondary, semantic colors
- 📏 **Spacing System** - Consistent spacing scales
- 📝 **Typography** - Font families, sizes, and weights

**Export Formats:**

- `JavaScript/TypeScript` - For React applications
- `CSS Custom Properties` - For vanilla CSS
- `SCSS Variables` - For Sass-based projects

```bash
npm install @luispmoraisc/ds-tokens
```

### 🧩 Component Library (`@luispmoraisc/ds-mui`)

A comprehensive collection of reusable UI components built on top of MUI, fully integrated with our design tokens.

**Features:**

- ✅ **Fully Typed** - Complete TypeScript support
- 🎨 **Design Token Integration** - Automatic theme consistency
- 📱 **Responsive Design** - Mobile-first approach
- ♿ **Accessible** - WCAG 2.1 compliant

**Quick Start:**

```typescript
import { Card } from '@luispmoraisc/ds-mui';

function MyComponent() {
  return (
    <>
      <Card
        id="1234"
        title="Hello World!"
        subTitle="It's a subheader"
        description="This is a description of the card content that explains what this card is about."
        onBtnClick={(id) => alert(`ID ${id} was clicked.`)}
      />
    </>
  );
}
```

> 💡 **Remember:** Configure your `.npmrc` file for registry access

## 📚 Documentation

Explore our interactive component library and design tokens:

🔗 **[View Storybook Documentation](https://luispmoraisc.github.io/siul.core/)**

## 🚧 Roadmap

### 🎯 Short Term

- [ ] **Enhanced DX** - Improve development experience with better tooling
- [ ] **Auto-configuration** - Eliminate manual vite and style dictionary updates
- [ ] **Extended Component Library** - Add more essential components

### 🔮 Long Term

- [ ] **Token Hierarchy** - Implement base and specialized token system
- [ ] **Multi-brand Support** - Enable theme switching and brand variants
- [ ] **Flexible Imports** - Support both named and default imports:

```typescript
// Both patterns will be supported
import Card from '@luispmoraisc/ds-mui/Card';
import { Card } from '@luispmoraisc/ds-mui';
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ by the <a href="https://github.com/luispmoraisc">@luispmoraisc</a></p>
  <p>
    <a href="https://luispmoraisc.github.io/siul.core/">📖 Documentation</a> •
    <a href="https://github.com/luispmoraisc/siul.core/issues">🐛 Report Bug</a> •
    <a href="https://github.com/luispmoraisc/siul.core/issues">💡 Request Feature</a>
  </p>
</div>
