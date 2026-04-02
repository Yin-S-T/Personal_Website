# TSY Web

Hi,I'm yin.This is my personal web with lots of funny things on and to be explored.


                        _ooOoo_
                       o8888888o
                       88" . "88
                       (| -_- |)
                        O\ = /O
                    ____/`---'\____
                  .   ' \\| |// `.
                   / \\||| : |||// \
                 / _||||| -:- |||||- \
                   | | \\\ - /// | |
                 | \_| ''\---/'' | |
                  \ .-\__ `-` ___/-. /
               ___`. .' /--.--\ `. . __
            ."" '< `.___\_<|>_/___.' >'"".
           | | : `- \`.;`\ _ /`;.`/ - ` : | |
             \ \ `-. \_ __\ /__ _/ .-` / /
     ======`-.____`-.___\_____/___.-`____.-'======
                        `=---='

     .............................................
             If you have a interest in me
             just explore my web on
             https://www.songyintang.com
                                                

                                                  
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

## A. 在 Vercel 上部署（5 分钟）

1. 打开 https://vercel.com
2. 点 `Sign Up` -> 选 `Continue with GitHub`
3. 授权 GitHub 账号
4. 回到 Vercel，点 `Add New Project`
5. 找到 `Personal_Website` 仓库，点 `Import`
6. 框架自动识别为 `Vite`，确认：
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. 点 `Deploy`，等待完成（通常 1~3 分钟）
8. 部署成功后，你会看到一个临时域名（如 `personal-website-xxx.vercel.app`）

---

## B. 绑定你的域名 `songyintang.com`

在 Vercel 项目页面：

1. 点 `Settings` -> `Domains`
2. 输入 `songyintang.com`，点 `Add`
3. Vercel 会给你一个 DNS 记录（通常是 `A` 记录或 `CNAME`）

---

## C. 在 Namecheap 配置 DNS

1. 登录 Namecheap
2. 找到 `songyintang.com` -> 点 `Manage`
3. 找 `Nameservers` 或 `DNS Settings`
4. 改成 Vercel 的 nameservers（Vercel 会告诉你具体值）

   或者用 `CNAME` 方式（推荐）：
   - 找 `Advanced DNS` 或 `DNS Records`
   - 添加一条 `CNAME` 记录：
     - Host: `@`（或 `songyintang.com`）
     - Value: `cname.vercel-dns.com`（Vercel 会给你确切值）

5. 保存

---

## D. 等待 DNS 生效 + 验证

- DNS 生效通常 5~30 分钟（最慢几小时）
- 回到 Vercel，刷新 Domains 页面，看是否显示 `✓ Valid Configuration`
- 打开 `https://songyintang.com` 测试

---

## 完整流程总结

```
GitHub 代码 ✅
    ↓
Vercel 导入 GitHub 仓库
    ↓
Vercel 自动部署到 vercel.app 临时域名
    ↓
Vercel 生成 DNS 记录
    ↓
Namecheap 配置 DNS 指向 Vercel
    ↓
DNS 生效（5~30 分钟）
    ↓
https://songyintang.com 上线 ✅
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
- 优化页面内容、不断更新个人网页
