import Typography from '../Typography'

type TicketInformationProps = {
  title: string
  price: string
}
const TicketInformation = ({ price, title }: TicketInformationProps) => {
  return (
    <div className='flex justify-between'>
      <Typography as='p' size='paragraphNormal' className='text-gray-400'>
        {title}
      </Typography>
      <Typography as='p' size='paragraphNormal' className='text-gray-400'>
        {price}
      </Typography>
    </div>
  )
}
export default TicketInformation
