import Typography from '../Typography'

type ErrorMessageProps = {
  error: string
  onClick: () => void
}

const ErrorMessage = ({ error, onClick }: ErrorMessageProps) => {
  return (
    <div className='flex flex-col gap-4 items-center py-9'>
      <Typography size='headingMedium' color='information'>
        Ocorreu um erro ao carregar os dados
      </Typography>
      <Typography>{error}</Typography>
      <button
        onClick={onClick}
        className='text-brand-color font-bold bg-slate-300 p-3'
      >
        Tentar Novamente
      </button>
    </div>
  )
}

export default ErrorMessage
