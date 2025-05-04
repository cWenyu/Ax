# Web + App

The web is using Next.js

App is using Expo + React Native to adapt iOS / Android

.turbo
这个目录看起来是与 Turbo（例如 TurboRepo）相关的，可能用于管理 monorepo（单仓库多项目结构）中的缓存、配置和依赖关系等。Turbo 是一个流行的工具，用于优化 monorepo 的构建和开发流程。

cache、cookies、daemon、preferences
这些目录可能与项目的缓存、用户数据存储、后台守护进程以及用户设置等相关。可能是用于处理用户会话、配置和其他状态数据的部分。

apps
这是项目中各个应用的根目录，包含了多个子目录：

docs
这个子目录看起来是文档相关的，可能是用于展示网站文档或者项目文档。目录结构中包含了 .next（可能是 Next.js 项目）、diagnostics、server（包含了关于页面、路由、应用的内容）等。

.next：看起来像是 Next.js 生成的构建目录，包含缓存、webpack、eslint 配置等。

diagnostics：可能包含调试和错误诊断的代码或配置。

server：包括服务端应用的代码和页面。

mobile
包含了移动端应用的资源，例如图片和其他静态资源。

web
包含了 Web 端应用，目录下也有 .next 目录，表示使用 Next.js 作为前端框架。缓存和构建工具（如 swc 和 webpack）也在此目录下。

packages
这是用于存放共享包或库的地方，包含了多个子目录：

backend：后端代码库。

eslint-config：ESLint 配置文件，可能用于代码质量和风格检查。

typescript-config：TypeScript 配置文件，可能用于整个项目的 TypeScript 设置。

ui：用户界面组件，可能包含共享的 UI 组件和样式。

src：UI 组件的源代码。

turbo/generators/templates：可能包含 TurboRepo 相关的模板文件。