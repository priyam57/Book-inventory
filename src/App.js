import React, { useState } from 'react';
import AddBookPage from './components/AddBookPage.js';
import ListBooksPage from './components/ListBookPage.js';
import BookDetailPage from './components/BookDetailPage.js';
import EditBookPage from './components/EditBookPage.js';

import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

function App() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };
  const handleDeleteBook = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };
  const handleDeleteAllBooks = () => {
    setBooks([]);
  };
  const handleEditBook = (updatedBooks) => {
    setBooks(updatedBooks);
  };

  return (
  <>
   
        <Router>
       
       
        <nav className='nav'> 
           <ul>
              <li><Link to='/home'><button className='clx'>Add</button></Link></li>
              <li><Link to='/list'><button className='clx'>List</button></Link></li>
          </ul>
        </nav>
        <Routes>
         <Route exact path='/home' element={<AddBookPage onAddBook={handleAddBook} />}> </Route>
         <Route exact path='/list' element={<ListBooksPage books={books} 
         onDeleteBook={handleDeleteBook} onDeleteAllBooks={handleDeleteAllBooks}
         onEditBook={handleEditBook}/>}> </Route>
        <Route exact path="/view/:bookID" element={<BookDetailPage books={books} />}>  </Route>
        <Route exact path="/edit/:bookId" element={<EditBookPage books={books} onEditBooks={handleEditBook}/>}> </Route>
          
      
     </Routes>
          
      </Router> 
      
      
  </>
  ); 
}

export default App;
