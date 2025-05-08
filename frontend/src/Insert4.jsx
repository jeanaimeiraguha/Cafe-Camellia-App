
import axios from 'axios'
import { useState,useEffect } from 'react'
const insert4 = () => {
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
     CandidateNationalId <input type="text" value={CandidateNationalId} onChange={e=>setCandidateNationalId(e.target.value)} /> <br />
     FirstName<input type="text" value={FirstName} onChange={e=>setFirstName(e.target.value)} /> <br />
          
     LastName <input type="text" value={LastName} onChange={e=>setLastName(e.target.value)} /> <br />
     Gender <input type="text" value={Gender} onChange={e=>setGender(e.target.value)} /> <br />
          
     DateOfBirth <input type="date" value={DateOfBirth} onChange={e=>setDateOfBirth(e.target.value)} /> <br />
     PostId   <input type="text" value={PostId} onChange={e=>setPostId(e.target.value)} /> <br />
     ExamDate<input type="date" value={ExamDate} onChange={e=>setExamDate(e.target.value)} /> <br />
     PhoneNumber <input type="text" value={PhoneNumber} onChange={e=>setPhoneNumber(e.target.value)} /> <br />
     Marks<input type="text" value={Marks} onChange={e=>setMarks(e.target.value)} /> <br />
          <button type='submit'>Add New </button>
     </form>
    </div>
  )
}

export default insert4