import Link from 'next/link'
import Typography from '../Typography'

export type ReviewTagProps = {
  review: number
  label: string
  link: string
  reviewsCount: number
}

const ReviewTag = ({
  label = 'no rating',
  link = '#',
  review = 0,
  reviewsCount = 0,
}: ReviewTagProps) => {
  return (
    <div
      className='flex items-center gap-2'
      role='listitem'
      aria-label='Rating'
    >
      <div className='flex items-center justify-center rounded gap-1 h-[38px] w-[40px] bg-brand-color-blue text-white'>
        {review}
      </div>
      <Typography size='paragraphNormal' as='span' color='brandBlack'>
        {label}
      </Typography>
      <Link
        href={link}
        className='text-gray-400 hover:underline font-book text-sm px-2'
      >
        ({reviewsCount} Reviews)
      </Link>
    </div>
  )
}
export default ReviewTag
