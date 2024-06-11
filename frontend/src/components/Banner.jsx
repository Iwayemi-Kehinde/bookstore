import React from 'react'
import BannerCard from "../home/BannerCard"

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex item-center'>
      <div className='flex w-full flex-col md:flex-row justify-between item-center gap-12 py-40'>
        {/* left side */}
        <div className='md:w-1/2 space-y-8 h-full'>
          <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-500'>for the best prices</span></h2>
          <p className='md:w-4/5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore necessitatibus repellat tenetur rem distinctio animi esse minima vero, laboriosam ratione accusamus reiciendis quae aperiam tempore cumque debitis, ullam, reprehenderit aut.</p>
          <div>
            <input type="text" name='search' id='search' placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none' />
            <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
          </div>
        </div>

        {/*Right side*/}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  )
}

export default Banner
