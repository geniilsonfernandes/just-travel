import Image from "next/image"
import Typography from "../Typography"

import brazilFlag from "@/assets/brazil_flag.png"
import { formatCurrency } from "@/utils"
import { Question } from "@phosphor-icons/react"
const ExchangeRate = () => {
  const dolar = 5.53

  return (
    <div className='flex items-center gap-2'>
      <Typography
        as='p'
        size='paragraphSmall'
        color='information'
        className='mr-2'
      >
        Cotação dólar hoje: {formatCurrency(dolar)}
      </Typography>
      <button>
        <Image src={brazilFlag} alt='brazil-flag' width={30} height={20} />
      </button>
      <button
        className='hover:bg-brand-color-blue/10 transition-colors duration-300 rounded-full p-0.5'
        name='Question button'
        aria-label='Question button'
        title='Question button'
      >
        <Question size={21} className='text-brand-color-blue' />
      </button>
    </div>
  )
}

export default ExchangeRate
