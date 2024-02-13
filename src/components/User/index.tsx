import { CaretDown } from "@phosphor-icons/react"
import Typography from "../Typography"

type UserProps = {
  userName?: string
}
const User = ({ userName }: UserProps) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='w-[43px] h-[43px] bg-[#FDD25C] rounded-full'></div>
      <Typography
        as='h2'
        size='paragraphMedium'
        className='font-bold'
        color='brandBlack'
      >
        {userName}
      </Typography>
      <button className='hover:bg-brand-color-blue/10 transition-colors duration-300 rounded-full p-0.5'>
        <CaretDown size={16} className='text-brand-color-black' />
      </button>
    </div>
  )
}

export default User
