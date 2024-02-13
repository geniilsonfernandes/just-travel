import Typography from '../Typography'
import Icons from '../ui/Icons'

type TicketProps = {
  title: string
  label: string
  icon: JSX.Element
}
const TicketOption = ({ icon, label, title }: TicketProps) => {
  return (
    <div className='flex  gap-4'>
      <span className='text-brand-color-blue'>{icon}</span>
      <div className='flex justify-between items-center gap-1 flex-1'>
        <div>
          <Typography
            as='h3'
            color='brandBlack'
            size='paragraphMedium'
            className='font-bold '
          >
            {title}
          </Typography>
          <Typography as='p' size='paragraphNormal' className='text-gray-400'>
            {label}
          </Typography>
        </div>
        <button className='text-gray-900 w-6 h-6'>
          <Icons.CaretDown />
        </button>
      </div>
    </div>
  )
}

export default TicketOption
