import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/select/${id}`)
      .then((res) => {
        setUsername(res.data.username);
        setPassword(res.data.password);
      })
      .catch((err) => {
        alert("Failed to fetch data");
        console.error(err);
      });
  }, [id]);

  const handleUpdate = () => {
    axios.put(`http://localhost:3000/update/${id}`, {
      username,
      password
    })
      .then((res) => {
        alert("Updated successfully!");
      })
      .catch((err) => {
        console.error("Update failed", err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Update User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">User Name:</label>
            <input 
              type="text" 
              className="form-control" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input 
              type="password" 
              className="form-control" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary w-100"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
