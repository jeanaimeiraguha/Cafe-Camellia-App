import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // ✅ Needed to access :PostId from the URL

const Update = () => {
  const { PostId } = useParams(); // ✅ Extracts PostId from the route

  // State variables for candidate data
  const [CandidateNationalId, setCandidateNationalId] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Gender, setGender] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [ExamDate, setExamDate] = useState("");
  const [Marks, setMarks] = useState("");
  const navigate=useNavigate()
  const [DateOfBirth, setDateOfBirth] = useState("");

  // Fetch candidate data on component mount
  useEffect(() => {
    axios.get(`http://localhost:3000/selectcand/${PostId}`)
      .then((res) => {
        // Ensure the response structure matches the expected keys
     //  res.data;
        setCandidateNationalId(res.data.CandidateNationalId );
        setFirstName(res.data.FirstName );
        setLastName(res.data.LastName);
        setGender(res.data.Gender);
        setPhoneNumber(res.data.PhoneNumber );
        setExamDate(res.data.ExamDate );
        setMarks(res.data.Marks );
        setDateOfBirth(res.data.DateOfBirth);
      })
      .catch((err) => {
        alert("Failed to fetch data");
        console.error(err);
      });
  }, [PostId]);

  // Handle update submission
  const handleUpdate = () => {
    axios.put(`http://localhost:3000/updatecand/${PostId}`, {
      CandidateNationalId,
      FirstName,
      LastName,
      DateOfBirth,
      Gender,
      PhoneNumber,
      ExamDate,
      Marks,
    })
      .then((res) => {
        alert("Updated successfully!");
        navigate('/select4')
      })
      .catch((err) => {
        alert("Failed to update data");
        console.error(err);
      });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
  };

  // Render form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Candidate National ID:</label>
        <input type="text" value={CandidateNationalId} onChange={e => setCandidateNationalId(e.target.value)} /> <br />

        <label>First Name:</label>
        <input type="text" value={FirstName} onChange={e => setFirstName(e.target.value)} /> <br />

        <label>Last Name:</label>
        <input type="text" value={LastName} onChange={e => setLastName(e.target.value)} /> <br />

        <label>Gender:</label>
        <input type="text" value={Gender} onChange={e => setGender(e.target.value)} /> <br />

        <label>Date of Birth:</label>
        <input type="date" value={DateOfBirth} onChange={e => setDateOfBirth(e.target.value)} /> <br />

        <label>Post ID:</label>
        <input type="text" value={PostId} readOnly /> <br />

        <label>Exam Date:</label>
        <input type="date" value={ExamDate} onChange={e => setExamDate(e.target.value)} /> <br />

        <label>Phone Number:</label>
        <input type="text" value={PhoneNumber} onChange={e => setPhoneNumber(e.target.value)} /> <br />

        <label>Marks:</label>
        <input type="text" value={Marks} onChange={e => setMarks(e.target.value)} /> <br />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
