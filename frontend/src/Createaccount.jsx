import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Createaccount = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/addadmin', { name, password })
      .then((res) => {
       alert("Account created successfully !");
        navigate('/login')
      })
      .catch((err) => {
       
     //    console.error("Login failed", err);
     navigate('/login')
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Admin  Create Account</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">Create Account</button>
      </form>
    </div>
  );
};

export default Createaccount;
