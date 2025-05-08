import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

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

//     const handleDelete = (PostId) => {
//         axios.delete(`http://localhost:3000/deletecand/${PostId}`)
//             .then(() => {
//                 alert("Candidate deleted successfully");
//                 setCand(cand.filter((candidate) => candidate.PostId !== PostId));
//             })
//             .catch((err) => {
//                 console.log("Failed to delete candidate");
//             });
//     };

    return (
        <div>
            <h2>Report</h2>
            {/* <Link to="/insert4">Add New</Link> */}
            <table border={1}>
                <thead>
                    <tr>
                        <th>CandidateNationalId</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Gender</th>
                        <th>DateOfBirth</th>
                        <th>PostId</th>
                        <th>ExamDate</th>
                        <th>PhoneNumber</th>
                        <th>Marks</th>
                        <th>PostName</th>
                        <th colSpan={2}>Operations</th>
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
                            {/* <td>
                                <button onClick={() => handleDelete(data.PostId)}>Delete</button>
                                <Link to={`/update4/${data.PostId}`}>Update</Link>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Select4;
