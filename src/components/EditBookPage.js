import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function EditBookPage({ books, onEditBooks }) {
  const naviGate = useNavigate()
  const { bookId } = useParams();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    url: '',
    quantity: '',
    type: ''
  });

  useEffect(() => {
    const book = books.find(book => book.id === parseInt(bookId, 10));
    if (book) {
      setFormData({
        id: book.id,
        name: book.name,
        url: book.url,
        quantity: book.quantity,
        type: book.type
      });
    }
  }, [books, bookId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleEdit = () => {
    const updatedBook = {
      id: formData.id,
      name: formData.name,
      url: formData.url,
      quantity: formData.quantity,
      type: formData.type
    };
    

    const updatedBooks = books.map(book =>
      book.id === updatedBook.id ? updatedBook : book
    );

    onEditBooks(updatedBooks);
    setFormData({
      id: '',
      name: '',
      url: '',
      quantity: '',
      type: ''
    });
    naviGate("/list")
    
    
  };
  

  return (
    <div className="edit-1">
      <h2>Edit Book</h2>
      <label> Name:  </label>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      <br/><br/>

      <label> Url:  </label>
      <input
        type="text"
        name="url"
        value={formData.url}
        onChange={handleInputChange}
      />
      <br/><br/>

      <label> Quantity:  </label>
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleInputChange}
      />
      <br/><br/>

      <label> Type:  </label>
      <select name="type" value={formData.type} onChange={handleInputChange}>
        <option value="fiction">Fiction</option>
        <option value="non-fiction">Non-Fiction</option>
        <option value="fantasy">Fantasy</option>
        <option value="mystery">Mystery</option>
        <option value="other">Other</option>
      </select>
      <br/><br/>

      <button className="onee" onClick={handleEdit}>save Book</button>
      <Link to="/list"><button className="onw"> Cancel </button></Link>
    </div>
  );
}

export default EditBookPage;
