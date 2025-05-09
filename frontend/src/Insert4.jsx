import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Insert4 = () => {
    const [CandidateNationalId, setCandidateNationalId] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Gender, setGender] = useState("");
    const [DateOfBirth, setDateOfBirth] = useState("");
    const [PostId, setPostId] = useState("");
    const [ExamDate, setExamDate] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Marks, setMarks] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const regex = /^[A-Za-z0-9]{18}$/;
        if (!regex.test(CandidateNationalId)) {
            alert("National ID should be exactly 18 alphanumeric characters.");
            return;
        }

        axios.post("http://localhost:3000/insertcandidates", {
            CandidateNationalId, FirstName, LastName, DateOfBirth, Gender, PostId, ExamDate, PhoneNumber, Marks
        })
        .then((res) => {
            alert("User added successfully");
            navigate('/select4');
        })
        .catch((err) => {
            console.log("Error occurred in insertion");
            alert("Failed");
        });
    };

    return (
        <div className="container d-flex flex-column align-items-center py-5 bg-light min-vh-100">
            <h2 className="display-4 mb-4 text-dark">Add Candidate</h2>
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-4 shadow w-100" style={{ maxWidth: '500px' }}>
                <div className="mb-3">
                    <label className="form-label text-dark">Candidate National ID</label>
                    <input 
                        type="text" 
                        value={CandidateNationalId} 
                        onChange={e => setCandidateNationalId(e.target.value)} 
                        className="form-control" 
                        placeholder="Enter National ID" 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">First Name</label>
                    <input 
                        type="text" 
                        value={FirstName} 
                        onChange={e => setFirstName(e.target.value)} 
                        className="form-control" 
                        placeholder="Enter First Name" 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">Last Name</label>
                    <input 
                        type="text" 
                        value={LastName} 
                        onChange={e => setLastName(e.target.value)} 
                        className="form-control" 
                        placeholder="Enter Last Name" 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">Gender</label>
                    <input 
                        type="text" 
                        value={Gender} 
                        onChange={e => setGender(e.target.value)} 
                        className="form-control" 
                        placeholder="Enter Gender" 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">Date of Birth</label>
                    <input 
                        type="date" 
                        value={DateOfBirth} 
                        onChange={e => setDateOfBirth(e.target.value)} 
                        className="form-control" 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">Post ID</label>
                    <input 
                        type="text" 
                        value={PostId} 
                        onChange={e => setPostId(e.target.value)} 
                        className="form-control" 
                        placeholder="Enter Post ID" 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">Exam Date</label>
                    <input 
                        type="date" 
                        value={ExamDate} 
                        onChange={e => setExamDate(e.target.value)} 
                        className="form-control" 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">Phone Number</label>
                    <input 
                        type="text" 
                        value={PhoneNumber} 
                        onChange={e => setPhoneNumber(e.target.value)} 
                        className="form-control" 
                        placeholder="Enter Phone Number" 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">Marks</label>
                    <input 
                        type="text" 
                        value={Marks} 
                        onChange={e => setMarks(e.target.value)} 
                        className="form-control" 
                        placeholder="Enter Marks" 
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">Add New Candidate</button>
            </form>
        </div>
    );
};

export default Insert4;
