import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { Home, Plus, Heart, ChevronLeft, Loader } from '../src'

describe('Icon · Web', () => {
  it('Home 默认渲染 + size 20 + currentColor', () => {
    const { container } = render(<Home aria-label="首页" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeTruthy()
    expect(svg).toHaveAttribute('width', '20')
    expect(svg).toHaveAttribute('aria-label', '首页')
  })

  it('size 自定义', () => {
    const { container } = render(<Plus size={32} />)
    expect(container.querySelector('svg')).toHaveAttribute('width', '32')
  })

  it('color 自定义', () => {
    const { container } = render(<Heart color="#e8456a" />)
    const svg = container.querySelector('svg')!
    // lucide forwards color as stroke
    expect(svg.getAttribute('stroke')).toBe('#e8456a')
  })

  it('rotate 加 transform', () => {
    const { container } = render(<ChevronLeft rotate={180} />)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('style')).toContain('rotate(180deg)')
  })

  it('spin 加 animation', () => {
    const { container } = render(<Loader spin />)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('style')).toContain('ak-icon-spin')
  })

  it('spin + rotate · spin 优先 · 不加 rotate', () => {
    const { container } = render(<Loader spin rotate={45} />)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('style')).toContain('ak-icon-spin')
    expect(svg.getAttribute('style')).not.toContain('rotate(45deg)')
  })

  it('aria-hidden 默认 true · ariaLabel 时反转 false', () => {
    const { container, rerender } = render(<Home />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')

    rerender(<Home aria-label="首页" />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'false')
  })

  it('strokeWidth 默认 1.6', () => {
    const { container } = render(<Plus />)
    expect(container.querySelector('svg')).toHaveAttribute('stroke-width', '1.6')
  })

  it('strokeWidth 自定义', () => {
    const { container } = render(<Plus strokeWidth={2.4} />)
    expect(container.querySelector('svg')).toHaveAttribute('stroke-width', '2.4')
  })

  it('onClick 触发', () => {
    const fn = vi.fn()
    const { container } = render(<Home aria-label="首页" onClick={fn} />)
    container.querySelector('svg')!.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(fn).toHaveBeenCalledOnce()
  })

  it('displayName 是 Akong 前缀', () => {
    expect((Home as unknown as { displayName: string }).displayName).toBe('AkongHome')
    expect((Plus as unknown as { displayName: string }).displayName).toBe('AkongPlus')
  })
})
