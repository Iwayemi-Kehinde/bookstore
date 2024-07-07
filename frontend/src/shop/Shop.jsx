import React, { useEffect, useState } from "react";

const Shop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:300/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h3 className="text-5xl font-bold text-center">All books are Here</h3>

      <div>{books?.map((book) => {
        return (
          <Card>
            <img src={book.imageURL} alt="img" className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{ book.bookTitle }</p>
            </h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam alias odio. A, quis asperiores.</p>
            </p>
            <button className="bg-blue-700 font-semibold text-white py-2 rounded">Buy Now</button>
          </Card>
        )
      })}</div>
    </div>
  );
};

export default Shop;
