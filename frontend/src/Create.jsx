import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:3000/insert", { username, password })
            .then((res) => {
                alert("Account created successfully");
                navigate('/')
            })
            .catch((err) => {
                console.log("Error occurred in insertion");
               //  alert("Failed");
            });
    };

    return (
        <div className="container d-flex flex-column align-items-center py-5 bg-light min-vh-100">
            <h2 className="display-4 mb-4 text-dark">Add Users</h2>
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-4 shadow w-100" style={{ maxWidth: '400px' }}>
                <div className="mb-3">
                    <label className="form-label text-dark">Username</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="form-control" 
                        placeholder="Enter your username"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="form-control" 
                        placeholder="Enter your password"
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary w-100 py-2 fw-bold"
                >
                    Add New User
                </button>
            </form>
        </div>
    );
};

export default Create;