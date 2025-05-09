import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
  const { PostId } = useParams();
  const [PostName, setPostName] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/selectposts/${PostId}`)
      .then((res) => {
        setPostName(res.data.PostName);
      })
      .catch((err) => {
        alert("Data failed to be fetched");
        console.error(err);
      });
  }, [PostId]);

  const handleUpdate = () => {
    axios.put(`http://localhost:3000/updateposts/${PostId}`, {
      PostName
    })
      .then(() => {
        alert("Updated successfully!");
      })
      .catch((err) => {
        console.error("Failed to update", err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Update Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Post Name:</label>
            <input type="text" className="form-control" value={PostName} onChange={e => setPostName(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
