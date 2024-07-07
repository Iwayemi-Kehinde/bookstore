import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCard'

const FavouriteBooks = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0, 8)))
  })
  return (
    <div>
      {/* book title
      author name
      image url
      category
      bookdescription
      bookpdfurl */}
      <BookCards books={books} headline="best seller books"/>
    </div>
  )
}

export default FavouriteBooks
