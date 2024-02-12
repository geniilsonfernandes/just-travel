import Filter from '@/components/Filter'
import Header from '@/components/Header'
import Search from '@/components/Search'

const Home = () => {
  return (
    <div>
      <div className='bg-white'>
        <Header />
        <Search />
      </div>

      <div className='container py-9 h-full grid grid-cols-12 gap-4 '>
        <div className='col-span-4 '>
          <Filter />
        </div>
      </div>
    </div>
  )
}

export default Home
