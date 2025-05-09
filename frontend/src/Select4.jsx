import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Select4 = () => {
  const [cand, setCand] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/selectcand")
      .then((res) => {
        setCand(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch data", err);
      });
  }, []);

  const handleDelete = (PostId) => {
    axios.delete(`http://localhost:3000/deletecand/${PostId}`)
      .then(() => {
        alert("User deleted");
        setCand((prevCand) => prevCand.filter((item) => item.PostId !== PostId));
      })
      .catch((err) => {
        console.error("Failed to delete user", err);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">List of Candidates</h2>
      <Link to="/insert4" className="btn btn-success mb-3">Add New</Link>
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>CandidateNationalId</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Gender</th>
            <th>DateOfBirth</th>
            <th>PostId</th>
            <th>ExamDate</th>
            <th>PhoneNumber</th>
            <th>Marks</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {cand.map((data) => (
            <tr key={data.PostId}>
              <td>{data.CandidateNationalId}</td>
              <td>{data.FirstName}</td>
              <td>{data.LastName}</td>
              <td>{data.Gender}</td>
              <td>{data.DateOfBirth}</td>
              <td>{data.PostId}</td>
              <td>{data.ExamDate}</td>
              <td>{data.PhoneNumber}</td>
              <td>{data.Marks}</td>
              <td>
                <Link className="btn btn-primary me-2" to={`/update4/${data.PostId}`}>Update</Link>
                <button className="btn btn-danger" onClick={() => handleDelete(data.PostId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Select4;