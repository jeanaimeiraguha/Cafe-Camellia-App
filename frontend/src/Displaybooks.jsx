import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Displaybooks = () => {
  const [books, setBooks] = useState([]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/deleteb/${id}`)
      .then(() => {
        alert("Book removed successfully");
        setBooks(books.filter(book => book.id !== id));
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  useEffect(() => {
    axios.get('http://localhost:3000/displaybooks')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log("Failed to fetch books", err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Books List</h2>
        <Link to="/addbook" className="btn btn-success">Add New Book</Link>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>Book ID</th>
              <th>Book Name</th>
              <th>Borrower Name</th>
              <th>Publisher</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.bookname}</td>
                  <td>{data.borrowername}</td>
                  <td>{data.publisher}</td>
                  <td>
                    <Link to={`/updbook/${data.id}`} className="btn btn-sm btn-warning me-2">Edit</Link>
                    <button onClick={() => handleDelete(data.id)} className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No books found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Displaybooks;
