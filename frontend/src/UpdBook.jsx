import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const UpdBook = () => {
  const [bookname, setBookname] = useState("");
  const [borrowername, setBorrowername] = useState("");
  const [publisher, setPublisher] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/selectupd/${id}`)
      .then((res) => {
        setBookname(res.data.bookname);
        setBorrowername(res.data.borrowername);
        setPublisher(res.data.publisher);
      })
      .catch((err) => {
        console.log("Failed to fetch data for updation", err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
  }

  const handleUpdate = () => {
    axios.put(`http://localhost:3000/updateb/${id}`, {
      bookname,
      borrowername,
      publisher
    })
    .then((res) => {
      alert("Book Details updated successfully");
      navigate("/"); // optional
    })
    .catch((err) => {
      console.log("Failed to update data", err);
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Book Name: <input type="text" value={bookname} onChange={e => setBookname(e.target.value)} /><br />
        Borrower: <input type="text" value={borrowername} onChange={e => setBorrowername(e.target.value)} /><br />
        Publisher: <input type="text" value={publisher} onChange={e => setPublisher(e.target.value)} /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdBook;
