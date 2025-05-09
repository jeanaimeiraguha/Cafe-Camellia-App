import axios from 'axios';
import { useState } from 'react';

const InsertPost = () => {
    const [PostName, setPostName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:3000/insertpost", { PostName })
            .then((res) => {
                alert("Post added successfully");
            })
            .catch((err) => {
                console.log("Error occurred in insertion");
                alert("Failed");
            });
    };

    return (
        <div className="container d-flex flex-column align-items-center py-5 bg-light min-vh-100">
            <h2 className="display-4 mb-4 text-dark">Add Post</h2>
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-4 shadow w-100" style={{ maxWidth: '400px' }}>
                <div className="mb-3">
                    <label className="form-label text-dark">Post Name</label>
                    <input 
                        type="text" 
                        value={PostName} 
                        onChange={e => setPostName(e.target.value)} 
                        className="form-control" 
                        placeholder="Enter Post Name"
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary w-100 py-2 fw-bold"
                >
                    Add New Post
                </button>
            </form>
        </div>
    );
};

export default InsertPost;