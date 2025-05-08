
import axios from 'axios'
import { useState,useEffect } from 'react'
const insert = () => {
     const[CandidateNationalId,setCandidateNationalId]=useState("")
     const[FirstName,setFirstName]=useState("")
     const[LastName,setLastName]=useState("")
     const[Gender,setGender]=useState("")
     const[DateOfBirth,setDateOfBirth]=useState("")
     const[PostId,setPostId]=useState("")
     const[ExamDate,setExamDate]=useState("")
     const[PhoneNumber,setPhoneNumber]=useState("")
     const[Marks,setMarks]=useState("")
     const handleSubmit=(event)=>{
event.preventDefault();

axios.post("http://localhost:3000/insertcandidates",{    CandidateNationalId   ,     FirstName     ,      LastName   ,             DateOfBirth  ,    Gender  ,PostId,ExamDate,PhoneNumber,           Marks



})
.then((res)=>{
     alert("user Added successfully")
})
.catch((err)=>{
     console.log("Error occured in insertion")
     alert("Failed ")
})
     }
  return (
    <div>

     <h2>Add Users</h2>

     <form onSubmit={handleSubmit} >
          User Name<input type="text" value={username} onChange={e=>setUsername(e.target.value)} /> <br />
          Password<input type="text" value={password} onChange={e=>setPassword(e.target.value)} /> <br />
          <button type='submit'>Add New </button>
     </form>
    </div>
  )
}

export default insert