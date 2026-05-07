import { forwardRef, type CSSProperties, type ForwardRefExoticComponent, type RefAttributes } from 'react'
import type { LucideIcon } from 'lucide-react'

/** 统一 props · antd 风 */
export interface IconProps {
  /** 默认 20 (跟 ak token text-lg 对齐) · 也接 string ('1em') */
  size?: number | string
  /** 默认 currentColor · 跟父字色 */
  color?: string
  /** 转动 · 1s 旋转 (跟 spin · loading 用) */
  spin?: boolean
  /** 旋转角度 · 0/90/180/270 (跟 spin 互斥 · spin 优先) */
  rotate?: number
  /** stroke 粗细 · 默认 1.6 (跟 akong design system 对齐) */
  strokeWidth?: number
  className?: string
  style?: CSSProperties
  /** a11y · 装饰性 icon 不传 · 功能性 icon 必填 */
  'aria-label'?: string
  /** 装饰性 (默认 true · 跳过 screen reader) · 设 false 让 SR 念 */
  'aria-hidden'?: boolean
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void
}

/** 把一个 lucide icon 包成 akong icon · 统一 props + 默认值 */
export function createIcon(
  Lucide: LucideIcon,
  displayName: string,
): ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>> {
  const Wrapped = forwardRef<SVGSVGElement, IconProps>(function AkongIcon(props, ref) {
    const {
      size = 20,
      color,
      spin,
      rotate,
      strokeWidth = 1.6,
      className,
      style,
      'aria-label': ariaLabel,
      'aria-hidden': ariaHidden,
      onClick,
    } = props

    const transform = spin
      ? undefined
      : rotate
        ? `rotate(${rotate}deg)`
        : undefined

    const merged: CSSProperties = {
      ...(transform ? { transform } : {}),
      ...(spin ? { animation: 'ak-icon-spin 1s linear infinite' } : {}),
      ...style,
    }

    return (
      <Lucide
        ref={ref}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        className={className}
        style={merged}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden ?? !ariaLabel}
        onClick={onClick}
      />
    )
  })
  Wrapped.displayName = `Akong${displayName}`
  return Wrapped
}
