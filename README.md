# Sparrowhawk

[![CI](https://github.com/your-username/sparrowhawk/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/sparrowhawk/actions/workflows/ci.yml)
[![Release](https://github.com/your-username/sparrowhawk/actions/workflows/release.yml/badge.svg)](https://github.com/your-username/sparrowhawk/actions/workflows/release.yml)
[![CodeQL](https://github.com/your-username/sparrowhawk/actions/workflows/codeql.yml/badge.svg)](https://github.com/your-username/sparrowhawk/actions/workflows/codeql.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<div align="right">
  <a href="README.md">中文</a> | <a href="README.en.md">English</a>
</div>

现代化的Vue 3 + TypeScript前端项目模板，集成了多种实用功能和最佳实践。

## ✨ 特性

- 🔧 **Vue 3 + TypeScript** - 基于Vue 3的Composition API和TypeScript，提供类型安全和更好的开发体验
- ⚡ **Vite构建** - 使用Vite作为构建工具，提供极速的开发服务器和优化的生产构建
- 📦 **Pinia状态管理** - 集成Pinia状态管理，提供简单直观的状态管理解决方案
- 🧭 **Vue Router** - 内置Vue Router，支持路由守卫和动态路由
- 🌐 **国际化支持** - 集成Vue I18n，支持多语言切换
- 🔌 **API集成** - 预配置的API服务，支持请求拦截、错误处理和认证

## 🚀 快速开始

### 使用此模板

#### 方法1：通过GitHub界面使用模板

1. 点击仓库页面顶部的 "Use this template" 按钮
2. 输入新仓库的名称和描述
3. 选择公开或私有仓库
4. 点击 "Create repository from template"

#### 方法2：克隆并手动设置

```bash
# 克隆仓库
git clone https://github.com/your-username/sparrowhawk.git my-project

# 进入项目目录
cd my-project

# 删除原有的Git历史
rm -rf .git

# 初始化新的Git仓库
git init
git add .
git commit -m "Initial commit from Sparrowhawk template"

# 链接到你的远程仓库（如果有）
git remote add origin https://github.com/your-username/my-project.git
git push -u origin main
```

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 📁 项目结构

```
src/
├── api/            # API相关代码
│   ├── config/     # API配置
│   ├── helpers/    # API辅助函数
│   └── services/   # API服务
├── assets/         # 静态资源
├── components/     # Vue组件
├── config/         # 应用配置
├── i18n/           # 国际化
│   └── locales/    # 语言文件
├── layouts/        # 布局组件
├── routes/         # 路由配置
├── stores/         # Pinia状态存储
├── styles/         # 全局样式
├── types/          # TypeScript类型定义
├── utils/          # 工具函数
└── views/          # 页面组件
```

## 🛠️ 技术栈

- [Vue.js 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vue I18n](https://vue-i18n.intlify.dev/)

## 🔧 自定义配置

### 环境变量

创建 `.env.local` 文件来设置本地环境变量：

```
VITE_API_BASE_URL=http://localhost:3000/api
```

### 添加新的语言

1. 在 `src/i18n/locales/` 目录下创建新的语言文件
2. 在 `src/i18n/index.ts` 中导入并注册新语言

## 🔄 CI/CD

本项目配置了完整的CI/CD流程，确保代码质量和自动化部署：

### 持续集成 (CI)

每次推送到主分支或创建Pull Request时，会自动运行以下检查：

- **代码风格检查**：使用ESLint确保代码风格一致
- **类型检查**：使用TypeScript编译器验证类型安全
- **构建测试**：确保项目可以成功构建

### 安全分析

- **CodeQL分析**：自动检测代码中的安全漏洞

### 持续部署 (CD)

- **自动发布**：当创建新的版本标签（如`v1.0.0`）时，会自动构建项目并创建GitHub Release

### 本地运行CI检查

在提交代码前，你可以在本地运行以下命令来模拟CI检查：

```bash
# 代码风格检查
npm run lint

# 类型检查
npm run typecheck

# 构建测试
npm run build
```

## 📄 许可证

[MIT](LICENSE)
