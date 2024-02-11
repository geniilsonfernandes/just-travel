import { cva, type VariantProps } from 'class-variance-authority'

const TypographyStyles = cva(['font-sans '], {
  variants: {
    size: {
      display: 'font-bold text-[55px] line-height-[55px]',
      //   headings
      headingLarge: 'font-bold text-[40px] line-height-[45px]',
      headingMedium: 'font-bold text-[24px] line-height-[30px]',
      headingNormal: 'font-medium text-[22px] line-height-[28px]',
      //   paragraphs
      paragraphLarge: 'font-book text-[20px] line-height-[26px]',
      paragraphMedium: 'font-book text-[16px] line-height-[22px]',
      paragraphNormal: 'font-book text-[14px] line-height-[18px]',
      paragraphSmall: 'font-book text-[12px] line-height-[16px]',
    },
    color: {
      white: 'text-white',
      black: 'text-info',
      message: 'text-message',
      success: 'text-success',
      error: 'text-error',
      information: 'text-info',
      brandBlue: 'text-brand-color-blue',
      brandGreen: 'text-brand-color-green',
      brandBlack: 'text-brand-color-black',
    },
  },
  defaultVariants: {
    size: 'headingMedium',
    color: 'black',
  },
})

type Variants = VariantProps<typeof TypographyStyles>
type TypographyProps = {
  children: React.ReactNode
  className?: string
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4'
  size?: Variants['size']
} & Variants

const Typography = ({
  children,
  as = 'h1',
  size = 'headingMedium',
  color = 'black',
  className,
}: TypographyProps) => {
  const Tag = as as keyof JSX.IntrinsicElements

  return (
    <Tag className={TypographyStyles({ size: size, color: color, className })}>
      {children}
    </Tag>
  )
}

export default Typography
