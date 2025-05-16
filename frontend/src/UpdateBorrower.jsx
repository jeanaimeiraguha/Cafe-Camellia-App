import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported

const UpdBorrower = () => {
  const [borrowername, setBorrowername] = useState("");
  const [b_date, setB_date] = useState("");
  const [return_d, setReturn_d] = useState("");

  const navigate = useNavigate();
  const { bid } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/getborrower/${bid}`)
      .then((res) => {
        setBorrowername(res.data.borrowername);
        setB_date(res.data.b_date);
        setReturn_d(res.data.return_d);
      })
      .catch((err) => {
        console.log("Failed to fetch data for updation", err);
      });
  }, [bid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3000/updateborrower/${bid}`, {
      borrowername,
      b_date,
      return_d
    })
    .then((res) => {
      alert("Borrower Details updated successfully");
      navigate("/");
    })
    .catch((err) => {
      console.log("Failed to update data", err);
    });
  };

  return (
    <div className="container ">
      <h2 className=" text-center">Update Borrower Details</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light container" style={{marginBottom:"43px", maxWidth:"374px"}}>
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

        <button type="submit" className="btn btn-primary w-100">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdBorrower;
