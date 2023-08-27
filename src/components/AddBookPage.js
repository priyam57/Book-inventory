import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


function AddBookPage({ onAddBook }) {
  const naviGate = useNavigate()
  const [book, setBook] = useState({
    id:new Date().getUTCMilliseconds(),
     name: '',
    url: '',
    quantity: '',
    type: '' 
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  const handleAddBook = () => {
    if (!book.name.trim() || !book.url.trim() || !book.quantity || !book.type.trim()) {
      alert('Please fill all the required fields.');
    } else {
      onAddBook(book);
      setBook({id:'', name: '', url: '', quantity: '', type: '' });
    }
    naviGate("/list")
  };

  const bookTypes = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Mystery', 'Other'];

  const commonUrls = [
    'https://www.example.com/book1',
    'https://www.example.com/book2',
    'https://www.example.com/book3',
  ];

    return (
      <div>
        <h2 className='add'>Add Book</h2>
        <form className='form'>
          <label className="label"> 
            Book Name: <br/>
            <select name="name" value={book.name} onChange={handleInputChange}>
              <option value=""></option>
              <option value="Harry potter">Harry Potter</option>
              <option value="Jane Eyre">Jane Eyre</option>
              <option value="Lolita">Lolita</option>
              <option value="catch-22">catch-22</option>
              <option value="Beloved">Beloved</option>
            </select>
          </label>
          <br />
          <label className='label'>
          Book URLs:
          <select name="url" value={book.url} onChange={handleInputChange}>
            <option value=""></option>
            {commonUrls.map((url, index) => (
              <option key={index} value={url}>
                {url}
              </option>
            ))}
          </select>
        </label>
          <br />

          <label className='label'>
            Quantity: <br/>
            <input type="number" name="quantity" value={book.quantity} onChange={handleInputChange} />
          </label>
          <br />
          <label className='label'>
            Book Type:
            <br/>
            <select name="type" value={book.type} onChange={handleInputChange}>
              <option value=""></option> 
              {bookTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <br />
          <button type="button" className='btnn' onClick={handleAddBook}>Add Book</button>
        </form>
      </div>
    );
  }


export default AddBookPage;
