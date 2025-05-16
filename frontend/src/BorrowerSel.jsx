import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const BorrowerSel = () => {
  const [borrower, setBorrower] = useState([]);

  const handleDelete = (bid) => {
    axios.delete(`http://localhost:3000/deleteborrower/${bid}`)
      .then(() => {
        alert("Borrower removed successfully");
        setBorrower(borrower.filter(b => b.bid !== bid)); // ✅ fixed from setBooks to setBorrower
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  useEffect(() => {
    axios.get('http://localhost:3000/displayborrower')
      .then((res) => {
        setBorrower(res.data);
      })
      .catch((err) => {
        console.log("Failed to fetch borrowers", err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className='text-center ' style={{marginLeft:"343px"}}>Borrowers List</h2>
        <Link to="/addborrower" className="btn btn-success float-end" style={{marginTop:"43px"}}>Add New Borrower</Link>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center shadow-sm" style={{maxWidth:"743px" , marginLeft:"219px", marginTop:"90px"}}>
          <thead className="table-dark">
            <tr>
              <th>Borrower ID</th>
              <th>Name</th>
              <th>Borrow Date</th>
              <th>Return Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {borrower.length > 0 ? (
              borrower.map((data) => (
                <tr key={data.bid}>
                  <td>{data.bid}</td>
                  <td>{data.borrowername}</td>
                  <td>{data.b_date}</td>
                  <td>{data.return_d}</td>
                  <td>
                    <Link to={`/updborrower/${data.bid}`} className="btn btn-sm btn-warning me-2">Edit</Link>
                    <button onClick={() => handleDelete(data.bid)} className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No borrowers found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowerSel;
