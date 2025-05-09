import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Select = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/selectposts")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch data", err);
      });
  }, []);

  const handleDelete = (PostId) => {
    axios.delete(`http://localhost:3000/deleteposts/${PostId}`)
      .then(() => {
        alert("User deleted");
        setUsers((prevUsers) => prevUsers.filter((user) => user.PostId !== PostId));
      })
      .catch((err) => {
        console.error("Failed to delete user", err);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">List of Posts</h2>
      <Link to="/insert2" className="btn btn-success mb-3">Add New</Link>
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Post Name</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data) => (
            <tr key={data.PostId}>
              <td>{data.PostId}</td>
              <td>{data.PostName}</td>
              <td>
                <Link className="btn btn-primary me-2" to={`/update2/${data.PostId}`}>Update</Link>
                <button className="btn btn-danger" onClick={() => handleDelete(data.PostId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Select;
