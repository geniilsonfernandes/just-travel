import { cn } from '@/utils'

type TypographyProps = {
  children: React.ReactNode
  className?: string
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4'
}

const Typography = ({ children, as = 'p', className }: TypographyProps) => {
  const Tag = as as keyof JSX.IntrinsicElements

  return (
    <Tag className={cn('font-book text-xs text-[#3C4C70]', className)}>
      {children}
    </Tag>
  )
}

export default Typography
