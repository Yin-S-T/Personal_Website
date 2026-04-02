# TSY Web

个人科研主页（React + Vite + TypeScript），包含：
- 首页主视觉 + Claude Code Crab 动画
- 可拖拽水晶球场景交互
- 项目、博客、关于我、联系页面
- 右上角桌宠足球互动
- 中英文切换

---

## 1) 本地开发

```bash
npm install
npm run dev
```

构建与预览：

```bash
npm run build
npm run preview
```

---

## 2) 技术栈

- `React 18`
- `TypeScript`
- `Vite`
- `react-router-dom`
- `framer-motion`
- `Tailwind`（当前主要使用自定义 CSS）

---

## 3) 项目结构与模块清单

```text
src/
  App.tsx
  main.tsx
  i18n.tsx
  components/
    Navigation.tsx
    LanguageDock.tsx
    Footer.tsx
    Mascot.tsx
    PetLabPanel.tsx
    InteractiveOrb.tsx
    ProjectCard.tsx
    SocialLinks.tsx
  pages/
    Home.tsx
    About.tsx
    Projects.tsx
    Blog.tsx
    Contact.tsx
  data/
    projects.ts
    socialLinks.ts
  styles/
    globals.css
    animations.css
public/
  assets/
    messi-avatar.jpg
    messi-microworld.jpg
```

### 3.1 入口与路由
- `src/main.tsx`：应用入口，挂载路由与 i18n Provider。
- `src/App.tsx`：全局布局与路由配置（`/`, `/about`, `/projects`, `/blog`, `/contact`）。

### 3.2 全局能力
- `src/i18n.tsx`：中英文词典与语言切换逻辑（全站文案统一入口）。
- `src/styles/globals.css`：全站视觉风格、布局、组件样式。
- `src/styles/animations.css`：全站动画补充样式。

### 3.3 页面模块（pages）
- `src/pages/Home.tsx`：首页；包含主标题、Crab 动画区、水晶球交互区、快捷入口。
- `src/pages/About.tsx`：个人介绍、研究兴趣、时间线。
- `src/pages/Projects.tsx`：项目列表、分类筛选、弹窗详情。
- `src/pages/Blog.tsx`：博客列表、标签筛选、访客说明。
- `src/pages/Contact.tsx`：联系页容器。

### 3.4 组件模块（components）
- `Navigation.tsx`：顶部导航与品牌文案。
- `LanguageDock.tsx`：左侧语言切换悬浮按钮。
- `Footer.tsx`：页脚。
- `Mascot.tsx`：桌宠（足球射门/扑救/横梁/弧线动作）。
- `PetLabPanel.tsx`：像素 Crab 动画与对话场景。
- `InteractiveOrb.tsx`：水晶球拖拽交互、场景映射、话术展示。
- `ProjectCard.tsx`：项目卡片。
- `SocialLinks.tsx`：联系方式和平台链接展示。

### 3.5 数据模块（data）
- `projects.ts`：项目数据源（中英标题、描述、技术栈、链接）。
- `socialLinks.ts`：邮箱/平台链接数据源。

### 3.6 资源模块（public/assets）
- `messi-avatar.jpg`：桌宠头像。
- `messi-microworld.jpg`：水晶球背景场景图。

---

## 4) 内容修改指南（最常改）

### 4.1 修改全站文案（推荐入口）
- 文件：`src/i18n.tsx`
- 适用：导航、按钮、标题、副标题、提示文案等中英文文本。

### 4.2 修改首页核心内容
- 文件：`src/pages/Home.tsx`
- 适用：首页结构、按钮跳转、快捷入口。

### 4.3 修改 Crab 动画/台词/动作
- 文件：`src/components/PetLabPanel.tsx`
- 适用：场景时长、对话内容、像素动作、表情、装饰元素。

### 4.4 修改水晶球拖拽交互
- 文件：`src/components/InteractiveOrb.tsx`
- 适用：拖拽范围、场景阈值、回弹参数、场景话术。

### 4.5 修改桌宠足球互动
- 文件：`src/components/Mascot.tsx`
- 适用：动作类型、触发节奏、状态文案。

### 4.6 修改项目与博客
- 项目数据：`src/data/projects.ts`
- 博客内容：`src/pages/Blog.tsx` 中 `posts` 数组

### 4.7 修改联系方式
- 文件：`src/data/socialLinks.ts`

---

## 5) 上线部署

> 这是 Vite 静态站点，本质只需要托管 `dist/`。

### 方案 A（最省心，推荐）
1. `Vercel`
2. `Netlify`
3. `Cloudflare Pages`

优点：
- 不需要自己维护服务器
- 自动 HTTPS
- 自动 CI/CD（连接 GitHub 即可）
- 对前端站点最友好

### 方案 B（你提到的“租服务器”）
推荐系统：`Ubuntu 22.04 LTS`

常见 VPS 选择：
- `Hetzner`（性价比高）
- `Vultr` / `DigitalOcean`（易上手）
- 国内可考虑阿里云/腾讯云轻量

最简上线流程：
1. 本地构建：`npm run build`
2. 服务器安装 `Nginx`
3. 上传 `dist/` 到 `/var/www/tsy-web`
4. Nginx 指向该目录并配置 `try_files`
5. 域名解析到服务器 IP
6. 用 `certbot` 配置 HTTPS

Nginx 单页应用关键配置（history 路由）：

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 6) GitHub 上传前检查

- [ ] `src/data/socialLinks.ts` 中邮箱/链接是否为你最终版本
- [ ] `src/data/projects.ts` 中仓库链接是否真实可访问
- [ ] `src/i18n.tsx` 中中英文文案是否定稿
- [ ] `npm run build` 是否通过
- [ ] 是否已移除临时测试文案

---

## 7) 未来扩展建议

- 把博客数据从 `Blog.tsx` 抽到 `src/data/blogPosts.ts`
- 增加 `siteContent.ts` 统一管理首页/关于页文案
- 接入简单 CMS（如 Notion/Contentlayer）做博客自动化更新
