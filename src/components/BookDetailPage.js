import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookDetailPage(props) {
  const params = useParams()
  const { bookID } = params

  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
     const book = props.books.find((book) => book.id === parseInt(bookID));
    setSelectedBook(book);
    
    console.log(bookID);
    console.log(props.books);
  }, [props.books, bookID]);

  console.log(params);

  return (
    <div className='bookpage'>
      <h1>Book Details</h1>
      {selectedBook ? (
        <div className='fill'>
          <p>Name :   {selectedBook.name}</p>
          <p>Url:   {selectedBook.url}</p>
          <p>Quantity:   {selectedBook.quantity}</p>
          <p>Type:    {selectedBook.type}</p>
        </div>
      ) : (
        <p>Book not found.</p>
      )}
    </div>
  );
}

export default BookDetailPage;
