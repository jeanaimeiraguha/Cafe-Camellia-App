import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Addborrower = () => {
  const navigate = useNavigate();
  const [borrowername, setBorrowername] = useState("");
  const [b_date, setB_date] = useState("");
  const [return_d, setReturn_d] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/addborrower', { borrowername, b_date, return_d })
      .then(() => {
        alert("New Borrower added successfully");
        navigate('/borrowersel');
      })
      .catch((err) => {
        console.log("Failed to add borrower", err);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Borrower</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Borrower Name</label>
          <input
            type="text"
            className="form-control"
            value={borrowername}
            onChange={e => setBorrowername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Borrow Date</label>
          <input
            type="date"
            className="form-control"
            value={b_date}
            onChange={e => setB_date(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Return Date</label>
          <input
            type="date"
            className="form-control"
            value={return_d}
            onChange={e => setReturn_d(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">Add New</button>
      </form>
    </div>
  );
};

export default Addborrower;
