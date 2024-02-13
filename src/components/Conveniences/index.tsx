import Icons from '@/components/ui/Icons'

type ConveniencesProps = {
  airplane?: boolean
  wifi?: boolean
  breakfast?: boolean
  room?: boolean
}

const Conveniences = ({
  airplane,
  breakfast,
  room,
  wifi,
}: ConveniencesProps) => {
  return (
    <div className='flex items-center gap-2 text-gray-400'>
      {airplane && (
        <span className='flex items-center gap-1 text-xs font-book'>
          <Icons.TravelAirplane /> Passagem Aérea
        </span>
      )}
      {wifi && (
        <span className='flex items-center gap-1 text-xs font-book'>
          <Icons.Wifi />
          Wi-fi
        </span>
      )}
      {room && (
        <span className='flex items-center gap-1 text-xs font-book'>
          <Icons.Room />
          Quarto
        </span>
      )}
      {breakfast && (
        <span className='flex items-center gap-1 text-xs font-book'>
          <Icons.Breakfast /> Café de manhã
        </span>
      )}
    </div>
  )
}

export default Conveniences
