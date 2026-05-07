/**
 * akong icons (Web)
 *
 * 用法:
 *   import { Home, Search, Plus } from '@akong/icons'
 *   import '@akong/icons/style.css'   // 给 spin 动画用 (可选 · 不用 spin 就不用引)
 *
 *   <Home size={24} />
 *   <Plus size={20} color="var(--ak-accent)" />
 *   <Loader spin />
 *   <ChevronLeft rotate={180} />
 */

import {
  Home as LHome,
  Search as LSearch,
  Heart as LHeart,
  Plus as LPlus,
  Bell as LBell,
  User as LUser,
  MessageSquare as LMessageSquare,
  ShoppingBag as LShoppingBag,
  ChevronLeft as LChevronLeft,
  ChevronRight as LChevronRight,
  ChevronDown as LChevronDown,
  ChevronUp as LChevronUp,
  MoreHorizontal as LMoreHorizontal,
  MoreVertical as LMoreVertical,
  Bookmark as LBookmark,
  Share2 as LShare,
  X as LX,
  Check as LCheck,
  ArrowLeftRight as LArrowLeftRight,
  Loader as LLoader,
  Settings as LSettings,
  Camera as LCamera,
  Image as LImage,
  Send as LSend,
  Filter as LFilter,
  ShoppingCart as LShoppingCart,
  Star as LStar,
  Eye as LEye,
  EyeOff as LEyeOff,
  Edit as LEdit,
  Trash2 as LTrash,
  AtSign as LAt,
  Hash as LHash,
} from 'lucide-react'

import { createIcon } from './IconBase'

// === 导航 ===
export const Home = createIcon(LHome, 'Home')
export const Search = createIcon(LSearch, 'Search')
export const Bell = createIcon(LBell, 'Bell')
export const User = createIcon(LUser, 'User')
export const MessageSquare = createIcon(LMessageSquare, 'MessageSquare')
export const ShoppingBag = createIcon(LShoppingBag, 'ShoppingBag')
export const ShoppingCart = createIcon(LShoppingCart, 'ShoppingCart')
export const Settings = createIcon(LSettings, 'Settings')

// === 方向 ===
export const ChevronLeft = createIcon(LChevronLeft, 'ChevronLeft')
export const ChevronRight = createIcon(LChevronRight, 'ChevronRight')
export const ChevronDown = createIcon(LChevronDown, 'ChevronDown')
export const ChevronUp = createIcon(LChevronUp, 'ChevronUp')

// === 动作 ===
export const Plus = createIcon(LPlus, 'Plus')
export const X = createIcon(LX, 'X')
export const Check = createIcon(LCheck, 'Check')
export const Edit = createIcon(LEdit, 'Edit')
export const Trash = createIcon(LTrash, 'Trash')
export const Send = createIcon(LSend, 'Send')
export const Filter = createIcon(LFilter, 'Filter')
export const ArrowLeftRight = createIcon(LArrowLeftRight, 'ArrowLeftRight')
export const MoreHorizontal = createIcon(LMoreHorizontal, 'MoreHorizontal')
export const MoreVertical = createIcon(LMoreVertical, 'MoreVertical')

// === 互动 ===
export const Heart = createIcon(LHeart, 'Heart')
export const Bookmark = createIcon(LBookmark, 'Bookmark')
export const Share = createIcon(LShare, 'Share')
export const Star = createIcon(LStar, 'Star')

// === 媒体 ===
export const Camera = createIcon(LCamera, 'Camera')
export const Image = createIcon(LImage, 'Image')

// === 状态 ===
export const Loader = createIcon(LLoader, 'Loader')
export const Eye = createIcon(LEye, 'Eye')
export const EyeOff = createIcon(LEyeOff, 'EyeOff')

// === 其他 ===
export const At = createIcon(LAt, 'At')
export const Hash = createIcon(LHash, 'Hash')

export type { IconProps } from './IconBase'
