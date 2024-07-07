import React from 'react'
import {Link} from "react-router-dom"
import FavBookImg from "../assets/favouritebook.jpg"

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justofy-between items-center gap-12'>
      <div className="md:w-1/2">
        <img src={FavBookImg} alt="img" className='rounded md:w-10/12' />
      </div>

      <div className="md:w-1/2 space-y-6">
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>FIND YOUR FAVOURITE <span className='text-blue-700'>BOOK HERE!</span></h2>
        <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perspiciatis exercitationem dignissimos omnis laborum! Vel facere, dignissimos eius aliquam exercitationem excepturi. Velit nesciunt tempore, illum sed aspernatur veniam possimus perferendis.</p>
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
            <h3 className='text-3xl font-bold'>800+</h3>
            <p className='text-base'>Book Listing</p>
          </div>

          <div>
            <h3 className='text-3xl font-bold'>550+</h3>
            <p className='text-base'>Registered Users</p>
          </div>

          <div>
            <h3 className='text-3xl font-bold'>1200+</h3>
            <p className='text-base'>PDF downloaded</p>
          </div>
        </div>
        <Link to="/shop" className="mt-12 block"><button className='bg-blue-700 text-white font-bold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More!</button></Link>
      </div>
    </div>
  )
}

export default FavBook
