import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const Select = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/select")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("Failed to fetch data");
      });
  }, [id]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/delete/${id}`)
      .then((res) => {
        alert("User deleted successfully!");
        setUsers(users.filter(user => user.id !== id)); // Update state directly
      })
      .catch((err) => {
        console.log("Failed to delete user");
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">List of Users</h2>
      <Link to="/insert" className="btn btn-primary mb-3">Add New User</Link>
      
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Password</th>
            <th colSpan={2}>Operations</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.username}</td>
              <td>{data.password}</td>
              <td>
                <button 
                  className="btn btn-danger me-2"
                  onClick={() => handleDelete(data.id)}
                >
                  Delete
                </button>
                <Link 
                  to={`/update/${data.id}`} 
                  className="btn btn-warning"
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Select;
