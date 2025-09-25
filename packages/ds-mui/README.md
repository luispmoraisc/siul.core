# 🧩 @luispmoraisc/ds-mui

> **Enterprise-ready React components built on MUI with integrated design tokens**

[![NPM Version](https://img.shields.io/github/package-json/v/luispmoraisc/siul.core?filename=packages%2Fds-mui%2Fpackage.json)](https://github.com/luispmoraisc/siul.core/pkgs/npm/ds-mui)
[![License](https://img.shields.io/npm/l/@luispmoraisc/ds-tokens.svg)](https://github.com/luispmoraisc/siul.core/blob/main/LICENSE)

A comprehensive React component library that extends Material-UI with consistent design tokens and enhanced functionality. Built for enterprise applications that demand reliability, accessibility, and maintainability.

## ✨ Features

- 🎨 **Design Token Integration** - Automatically synchronized with `@luispmoraisc/ds-tokens`
- 🧩 **MUI Foundation** - Built on top of the battle-tested Material-UI library
- 🔧 **TypeScript First** - Full type safety and IntelliSense support
- ♿ **Accessibility** - WCAG 2.1 AA compliant components
- 📱 **Responsive** - Mobile-first design approach
- 🚀 **Tree Shakeable** - Import only what you need
- 📖 **Well Documented** - Comprehensive Storybook documentation

## 🛠 Tech Stack

| Technology                               |
| ---------------------------------------- |
| [React](https://react.dev)               |
| [MUI](https://mui.com/)                  |
| [TypeScript](https://typescriptlang.org) |
| [Vitest](https://vitest.dev/)            |
| [Emotion](https://emotion.sh)            |

## 📦 Installation

```bash
# Using npm
npm install @luispmoraisc/ds-mui @luispmoraisc/ds-tokens

# Using yarn
yarn add @luispmoraisc/ds-mui @luispmoraisc/ds-tokens

# Using pnpm
pnpm add @luispmoraisc/ds-mui @luispmoraisc/ds-tokens
```

## 🚀 Quick Start

```typescript
import React from 'react';
import { Card } from '@luispmoraisc/ds-mui';

function App() {
  return (
    <Card
      id="1234"
      title="Hello World!"
      subTitle="It's a subheader"
      description="This is a description of the card content that explains what this card is about."
      onBtnClick={(id) => alert(`ID ${id} was clicked.`)}
    />
  );
}

export default App;
```

## 📚 Documentation

Explore our design tokens in our interactive documentation:

🔗 **[View Token Gallery](https://luispmoraisc.github.io/siul.core/)**

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
