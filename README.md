# 🎨 Siul Core

> **A modern, scalable design system and component library for enterprise frontend teams**

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()

Siul Core is a comprehensive monorepo that centralizes all shareable frontend code for organizations. Built with reusability, speed, quality, security, and developer experience in mind, this design system ensures consistency across teams while accelerating development workflows.

## ✨ Features

- 🎯 **Centralized Design Tokens** - Consistent visual identity across all products
- 🧩 **Reusable Components** - Battle-tested UI components built with MUI
- 📱 **Multi-platform Export** - Supports JS, CSS, and SCSS formats
- 🔧 **Developer-First** - Optimized tooling and excellent DX
- 📖 **Living Documentation** - Interactive Storybook documentation
- 🚀 **Modern Toolchain** - Built with the latest frontend technologies

## 🛠 Tech Stack

| Technology                                                   |
| ------------------------------------------------------------ |
| [NX](https://nx.dev/)                                        |
| [Yarn](https://yarnpkg.com/)                                 |
| [TypeScript](https://www.typescriptlang.org/)                |
| [Vite](https://vitejs.dev/) & [Vitest](https://vitest.dev/)  |
| [ESLint](https://eslint.org/)                                |
| [Prettier](https://prettier.io/)                             |
| [Husky](https://typicode.github.io/husky/)                   |
| [Style Dictionary](https://amzn.github.io/style-dictionary/) |
| [Storybook](https://storybook.js.org/)                       |
| [React](https://reactjs.org/)                                |
| [MUI](https://mui.com/)                                      |

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

We welcome contributions! Please see our [Contributing Guidelines](https://github.com/luispmoraisc/siul.core/blob/main/CONTRIBUTING.md) for details.

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
