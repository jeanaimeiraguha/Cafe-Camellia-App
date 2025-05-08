import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // ✅ Needed to access :id from the URL

const Update = () => {
  const { PostId } = useParams(); // ✅ Extracts ID from the route
//   const [username, setUsername] = useState("");
  const [PostName, setPostName] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/selectposts/${PostId}`)
      .then((res) => {
     //    setUsername(res.data.us); // ✅ Should match API response keys
        setPostName(res.data.PostName);
      })
      .catch((err) => {
        alert("Data failed to be fetched");
      });
  }, [PostId]);

  const handleUpdate = () => {
    axios.put(`http://localhost:3000/updateposts/${PostId}`, {
      PostName
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
        {/* User Name: <input type="text" value={username} onChange={e => setUsername(e.target.value)} /><br /> */}
        Post Name: <input type="text" value={PostName} onChange={e => setPostName(e.target.value)} /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
