import axios from "axios"
import { useState,useEffect } from "react"
// import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom"


const Select4 = () => {
     // const {PostId}=useParams()
     const[cand,setCand]=useState([]);
     useEffect(()=>{
          axios.get("http://localhost:3000/selectcand")
          .then((res)=>{
               setCand(res.data)
          })
.catch((err)=>{
     console.log("failed")
})
     },[])
     const handleDelete=(PostId)=>{
          axios.delete(`http://localhost:3000/deletecand/${PostId}`)
          .then((res)=>{
               alert("user deleted")
               navigate("/select4")
               fetchData()
          })
          .catch((err)=>{
               console.log("failed");
               // alert("Failed to be deleted")
          })
     }
  return (
    <div>
<h2>List Of Candidates</h2>
<Link to="/insert4">Add New</Link>
<table border={1}>
   
<thead>
     <tr>
          <th>CandidateNationalId </th>
          <th>FirstName</th>
          <th>LastName </th>
          <th>Gender </th>
          <th>DateOfBirth </th>
          <th>PostId </th>
          <th>ExamDate</th>
          <th>PhoneNumber </th>
          <th>Marks</th>
        
          <th colSpan={2}>Operations</th>
     </tr>
</thead>
<tbody>
     {cand.map((data)=>
     <tr key={data.PostId}>
          <td>{data.PostId}</td>
          <td>{data.CandidateNationalId}</td>
          <td>{data.FirstName}</td>
          <td>{data.LastName }</td>
          <td>{data.Gender}</td>
          <td>{data.DateOfBirth}</td>
       
          <td>{data.ExamDate}</td>
          <td>{data.PhoneNumber}</td>
          <td>{data.Marks}</td>
          
        
          <td>
              
               
               <button onClick={() => handleDelete(data.PostId)}>Delete</button>
               <Link to={`/update4/${data.PostId}`}>Update</Link>



          </td>

     </tr>
     )}
</tbody>
</table>
    </div>
  )
}

export default Select4