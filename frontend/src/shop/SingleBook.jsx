import React from 'react'

const SingleBook = () => {
  const {_id, bookTitle, imageURL} = useLoaderData()
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={imageURL} alt="img" />
      <h2>{bookTitle}</h2>
    </div>
  )
}

export default SingleBook
