import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // ✅ Needed to access :id from the URL

const Update = () => {
  const { id } = useParams(); // ✅ Extracts ID from the route
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/select/${id}`)
      .then((res) => {
        setUsername(res.data.username); // ✅ Should match API response keys
        setPassword(res.data.password);
      })
      .catch((err) => {
        alert("Data failed to be fetched");
      });
  }, [id]);

  const handleUpdate = () => {
    axios.put(`http://localhost:3000/update/${PostId}`, {
      username,
      password
    })
      .then((res) => {
        alert("Updated successfully!");
      })
      .catch((err) => {
        console.log("Failed", err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        User Name: <input type="text" value={username} onChange={e => setUsername(e.target.value)} /><br />
        Password: <input type="text" value={password} onChange={e => setPassword(e.target.value)} /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
