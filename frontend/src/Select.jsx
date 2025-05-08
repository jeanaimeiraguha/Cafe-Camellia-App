import axios from "axios"
import { useState,useEffect } from "react"
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom"


const Select = () => {
     const {id}=useParams()
     const[users,setUsers]=useState([]);
     useEffect(()=>{
          axios.get("http://localhost:3000/select")
          .then((res)=>{
               setUsers(res.data)
          })
.catch((err)=>{
     console.log("failed")
})
     },[id])
     const handleDelete=(id)=>{
          axios.delete(`http://localhost:3000/delete/${id}`)
          .then((res)=>{
               alert("user deleted")
               fetchData()
          })
          .catch((err)=>{
               console.log("failed");
               // alert("Failed to be deleted")
          })
     }
  return (
    <div>
<h2>List Of users</h2>
<Link to="/insert">Add New</Link>
<table border={1}>
   
<thead>
     <tr>
          <th>ID</th>
          <th>UserName</th>
          <th>Password</th>
          <th colSpan={2}>Operations</th>
     </tr>
</thead>
<tbody>
     {users.map((data)=>
     <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.username}</td>
          <td>{data.password}</td>
          <td>
              
               
               <button onClick={() => handleDelete(data.id)}>Delete</button>
               <Link to={`/update/${data.id}`}>Update</Link>



          </td>

     </tr>
     )}
</tbody>
</table>
    </div>
  )
}

export default Select