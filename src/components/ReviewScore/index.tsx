import Typography from "../Typography"

type ReviewScoreProps = {
  score: number
  indicator: string
  label: string
}

const ReviewScore = ({ score = 10, indicator, label }: ReviewScoreProps) => {
  return (
    <button className='flex items-center gap-2 relative hover:bg-gray-200/50'>
      <div className='h-[30px] w-[250px] bg-[#D9D9D9] relative'>
        <div
          style={{
            width: score * 25,
          }}
          className='h-[30px]  bg-[#FFAD0D]'
          aria-label='Score indicator'
        />
        <div className='text-white absolute h-full top-0 flex items-center pl-2 left-0 z-10'>
          <Typography size='paragraphSmall'>{indicator}</Typography>
        </div>
      </div>
      <Typography size='paragraphSmall' className='text-gray-700'>
        {label}
      </Typography>
    </button>
  )
}

export default ReviewScore
