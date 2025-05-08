import axios from "axios"
import { useState,useEffect } from "react"
// import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom"


const Select = () => {
     // const {PostId}=useParams()
     const[users,setUsers]=useState([]);
     useEffect(()=>{
          axios.get("http://localhost:3000/selectposts")
          .then((res)=>{
               setUsers(res.data)
          })
.catch((err)=>{
     console.log("failed")
})
     },[])
     const handleDelete=(PostId)=>{
          axios.delete(`http://localhost:3000/deleteposts/${PostId}`)
          .then((res)=>{
               alert("user deleted")
               // fetchData()
          })
          .catch((err)=>{
               console.log("failed");
               // alert("Failed to be deleted")
          })
     }
  return (
    <div>
<h2>List Of Posts</h2>
<Link to="/insert2">Add New</Link>
<table border={1}>
   
<thead>
     <tr>
          <th>ID</th>
          <th>Post Name</th>
        
          <th colSpan={2}>Operations</th>
     </tr>
</thead>
<tbody>
     {users.map((data)=>
     <tr key={data.PostId}>
          <td>{data.PostId}</td>
          <td>{data.PostName}</td>
        
          <td>
              
               
               <button onClick={() => handleDelete(data.PostId)}>Delete</button>
               <Link to={`/update2/${data.PostId}`}>Update</Link>



          </td>

     </tr>
     )}
</tbody>
</table>
    </div>
  )
}

export default Select