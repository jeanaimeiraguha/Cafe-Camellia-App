import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Select4 = () => {
    const [cand, setCand] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/selectcand")
            .then((res) => {
                setCand(res.data);
            })
            .catch((err) => {
                console.log("Failed to fetch data");
            });
    }, []);

    const handleDelete = (PostId) => {
        axios.delete(`http://localhost:3000/deletecand/${PostId}`)
            .then(() => {
                alert("Candidate deleted successfully");
                setCand(cand.filter((candidate) => candidate.PostId !== PostId));
            })
            .catch((err) => {
                console.log("Failed to delete candidate");
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Candidate Report</h2>
            {/* <Link to="/insert4" className="btn btn-primary mb-3">Add New Candidate</Link> */}
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Candidate National Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Post ID</th>
                        <th>Exam Date</th>
                        <th>Phone Number</th>
                        <th>Marks</th>
                        <th>Post Name</th>
                        {/* <th>Operations</th> */}
                    </tr>
                </thead>
                <tbody>
                    {cand.map((data) => (
                        <tr key={data.PostId}>
                            <td>{data.CandidateNationalId}</td>
                            <td>{data.FirstName}</td>
                            <td>{data.LastName}</td>
                            <td>{data.Gender}</td>
                            <td>{data.DateOfBirth}</td>
                            <td>{data.PostId}</td>
                            <td>{data.ExamDate}</td>
                            <td>{data.PhoneNumber}</td>
                            <td>{data.Marks}</td>
                            <td>{data.PostName}</td>
                            {/*  */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Select4;
