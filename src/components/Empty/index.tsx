import Typography from "../Typography"

type EmptyProps = {
  onClick?: () => void
}

const Empty = ({ onClick }: EmptyProps) => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <Typography size='headingMedium' color='information'>
        Ops, parece que nenhum resultado foi encontrado.
      </Typography>
      <p className='text-center text-brand-color-blue/70'>
        Tente alterar os filtros
      </p>
      <button
        className='text-brand-color-blue/70 font-bold border border-brand-color-blue/70 px-4 py-2 rounded'
        onClick={onClick}
      >
        Limpar filtros
      </button>
    </div>
  )
}

export default Empty
