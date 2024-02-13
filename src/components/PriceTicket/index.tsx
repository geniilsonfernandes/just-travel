import Typography from "../Typography"

type PriceTicketProps = {
  price: number
  promotionalPrice?: number
  currency: string
}
const PriceTicket = ({
  price = 0,
  currency = "R$",
  promotionalPrice,
}: PriceTicketProps) => {
  return (
    <div className='min-w-[100px]'>
      {promotionalPrice && (
        <Typography size='paragraphNormal' as='p' className='text-gray-400'>
          de {currency} {price} por
        </Typography>
      )}

      <div className='flex items-start gap-1'>
        <Typography size='paragraphNormal' as='span' color='black'>
          {currency}
        </Typography>
        <Typography size='headingMedium' as='h2' color='brandBlue'>
          {promotionalPrice ? promotionalPrice : price}
        </Typography>
      </div>
    </div>
  )
}

export default PriceTicket
