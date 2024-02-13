import Icons from '../ui/Icons'

type FavoriteProps = {
  onClick: () => void
  isFavorite: boolean
}
const Favorite = ({ isFavorite, onClick }: FavoriteProps) => {
  return (
    <button
      className='active:scale-95'
      onClick={onClick}
      aria-label='Favorite'
      name='Favorite'
      type='button'
      aria-pressed={isFavorite}
    >
      <Icons.Heart fill={isFavorite} />
    </button>
  )
}

export default Favorite
