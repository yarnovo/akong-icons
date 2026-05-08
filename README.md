# @akong/icons

> ← 回 [akong design system](https://yarnovo.github.io/akong-core/) 总站

封装 lucide · antd 风统一 props · 跨端（Web + React Native）。

## 安装

```bash
# Web
npm i github:yarnovo/akong-icons lucide-react

# RN (额外装)
npm i lucide-react-native react-native-svg
```

## 用法

```tsx
import { Home, Search, Plus, Heart, Loader } from '@akong/icons'
import '@akong/icons/style.css'  // 给 spin 动画用 · 不用 spin 可不引

<Home size={24} />
<Plus size={20} color="var(--ak-accent)" />
<Heart aria-label="点赞" />
<Loader spin />
<ChevronLeft rotate={180} />
```

## Props (antd 风统一)

| prop | type | default | 说明 |
|---|---|---|---|
| size | number / string | 20 | px 或 css 单位 ('1em') |
| color | string | currentColor | 跟父字色 |
| spin | boolean | false | 1s 旋转 (loading 用) |
| rotate | number | — | 度数 (跟 spin 互斥 · spin 优先) |
| strokeWidth | number | 1.6 | 跟 akong design system 对齐 |
| className | string | — | |
| style | CSSProperties | — | |
| aria-label | string | — | 功能性 icon 必填 |
| aria-hidden | boolean | auto | 默认装饰性 (没 aria-label 时 true) |
| onClick | (e) => void | — | |

## icon 列表（v0.1）

**导航**: Home / Search / Bell / User / MessageSquare / ShoppingBag / ShoppingCart / Settings
**方向**: ChevronLeft / ChevronRight / ChevronDown / ChevronUp
**动作**: Plus / X / Check / Edit / Trash / Send / Filter / ArrowLeftRight / MoreHorizontal / MoreVertical
**互动**: Heart / Bookmark / Share / Star
**媒体**: Camera / Image
**状态**: Loader / Eye / EyeOff
**其他**: At / Hash

总 30 个 · 后续按需补 (lucide 1500+ 全有 · 我们按需 wrap)。

## 加新 icon

1. `src/index.ts` 顶部加 `import { NewIcon as LNewIcon } from 'lucide-react'`
2. 文件中部加 `export const NewIcon = createIcon(LNewIcon, 'NewIcon')`
3. `src/index.native.ts` 同步加（一样写法 · 来源 lucide-react-native）
4. PR

## 跟 antd 对比

| 维度 | antd | akong |
|---|---|---|
| 数量 | 700+ | 30 (v0.1) · 按需扩 |
| 主题 | outlined / filled / twoTone 三套 | 只 outlined (lucide stroke 风) |
| 跨端 | Web only (要 RN 自己包) | Web + RN 一份 import |
| API | size / spin / rotate / style | 同 + color / strokeWidth + a11y |

## License

MIT · 基于 lucide (ISC)
