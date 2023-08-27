import React from 'react';
import { Link } from 'react-router-dom';


function ListBooksPage({ books,onDeleteBook,onDeleteAllBooks}) {
  return (
    <div>
      <h2 className='listt'>List of Books</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
            <th>Quantity</th>
            <th>Type</th>
          </tr>
        </thead>
         <tbody>
          {books.map((book, index) => (
            <tr key={index}>
            <td>{book.name}</td>
            <td><a href={book.url} target="_blank" rel="noopener noreferrer">Link</a></td>
            <td>{book.quantity}</td>
            <td>{book.type}</td>
            <td>
            <button className='try' onClick={() => onDeleteBook(index)}>Delete</button>
            </td>
            <td>
            <Link to={`/view/${book.id}`}><button className='view'>View</button></Link>
            <Link to={`/edit/${book.id}`}><button className='edit'>Edit</button></Link>
            </td>
           
          </tr>
             ))}
        </tbody>
      </table>
      <button className='btn' onClick={onDeleteAllBooks}>Delete All</button>
    </div>
  );
}

export default ListBooksPage;
