import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Addbook = () => {
  const navigate = useNavigate();
  const [bookname, setBookname] = useState("");
  const [borrowername, setBorrowername] = useState("");
  const [publisher, setPublisher] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/addbook', { bookname, borrowername, publisher })
      .then(() => {
        alert("New Book added successfully");
        navigate('/displaybooks');
      })
      .catch((err) => {
        console.log("Failed to add book", err);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Book Name</label>
          <input
            type="text"
            className="form-control"
            value={bookname}
            onChange={e => setBookname(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Borrower</label>
          <input
            type="text"
            className="form-control"
            value={borrowername}
            onChange={e => setBorrowername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Publisher</label>
          <input
            type="text"
            className="form-control"
            value={publisher}
            onChange={e => setPublisher(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">Add New</button>
      </form>
    </div>
  );
};

export default Addbook;
