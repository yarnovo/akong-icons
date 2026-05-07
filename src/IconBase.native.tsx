/**
 * RN 端 IconBase · 用 lucide-react-native (peer dep · 可选)
 *
 * 用方装 lucide-react-native 才能用 · 不装则 import 报错 (peer optional)
 */

import { forwardRef, type ForwardRefExoticComponent, type RefAttributes } from 'react'
// @ts-expect-error · peer optional · 用方装才有
import type { LucideIcon } from 'lucide-react-native'

export interface IconProps {
  size?: number
  color?: string
  spin?: boolean   // RN 用 Animated 旋转 · 简化版 · 用方自己包 Animated.View
  rotate?: number
  strokeWidth?: number
  style?: object
  /** a11y */
  accessibilityLabel?: string
}

export function createIcon(Lucide: LucideIcon, displayName: string): ForwardRefExoticComponent<IconProps & RefAttributes<unknown>> {
  const Wrapped = forwardRef<unknown, IconProps>(function AkongIcon(props, ref) {
    const { size = 20, color, strokeWidth = 1.6, rotate, style, accessibilityLabel } = props
    const transformed = rotate
      ? { transform: [{ rotate: `${rotate}deg` }], ...style }
      : style
    return (
      <Lucide
        ref={ref}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        style={transformed}
        accessibilityLabel={accessibilityLabel}
      />
    )
  })
  Wrapped.displayName = `Akong${displayName}`
  return Wrapped
}
