
import axios from 'axios'
import { useState,useEffect } from 'react'
const insert = () => {
     // const[PostId,setPostId]=useState("")
     const[PostName,setPostName]=useState("")
     const handleSubmit=(event)=>{
event.preventDefault();

axios.post("http://localhost:3000/insertpost",{PostName})
.then((res)=>{
     alert("Post Added successfully")
})
.catch((err)=>{
     console.log("Error occured in insertion")
     alert("Failed ")
})
     }
  return (
    <div>

     <h2>Add Posts</h2>

     <form onSubmit={handleSubmit} >
          {/* Post Id<input type="text" value={PostId} onChange={e=>setPostId(e.target.value)} /> <br /> */}
          Post Name<input type="text" value={PostName} onChange={e=>setPostName(e.target.value)} /> <br />
          <button type='submit'>Add New </button>
     </form>
    </div>
  )
}

export default insert