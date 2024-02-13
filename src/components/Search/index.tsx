import { useAppDispatch } from "@/store"
import { searchTickets } from "@/store/reducers/tickets/ticketsSlice"
import { MagnifyingGlass, MapPin } from "@phosphor-icons/react/dist/ssr"
import { useState } from "react"

const Search = () => {
  const dispatch = useAppDispatch()
  const [searchValue, setSearchValue] = useState("")

  const handleSearch = () => {
    dispatch(searchTickets(searchValue))
  }

  return (
    <div className='py-9 '>
      <div className='container relative'>
        <div className='border border-gray-10 h-12  flex items-center'>
          <button className='h-full w-12 flex items-center justify-center'>
            <MapPin size={21} className='text-brand-color-blue' />
          </button>
          <input
            type='text'
            name='Search input'
            placeholder='Busque por atração'
            className='w-full h-full placeholder:text-gray-300 placeholder:text-sm bg-transparent outline-none text-gray-500'
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <button
            className='h-full w-12 flex items-center justify-center border-l border-gray-10 hover:bg-gray-10'
            type='submit'
            aria-label='search button'
            onClick={handleSearch}
          >
            <MagnifyingGlass size={21} className='text-gray-300 ' />
          </button>
        </div>
        {/* <div className='absolute top-16 left-0 w-full  shadow-xl z-50 bg-white border border-gray-10 rounded p-4'>
          ...
        </div> */}
      </div>
    </div>
  )
}

export default Search
