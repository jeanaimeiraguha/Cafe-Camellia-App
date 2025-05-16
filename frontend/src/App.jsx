import React from 'react'
import Addbook from './Addbook'
import Displaybooks from './Displaybooks'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import UpdBook from './UpdBook'
import BorrowerSel from './BorrowerSel'
import Addborrower from './Addborower'
import Notfound from './NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import UpdBorrower from './UpdateBorrower'
import Login from './login'
import Createaccount from './Createaccount'

const App = () => {
  return (
    <div>
     <BrowserRouter>
   
     <Routes>    <Route path='/' element={<Home/>}/>
      <Route path='/displaybooks' element={<Displaybooks/>}/>
      <Route path='*' element={<Notfound/>}/>
      <Route path='/borrowersel' element={<BorrowerSel/>}/>
      <Route path='/Addbook' element={<Addbook/>}/>
      <Route path='/addborrower' element={<Addborrower/>}/>
      <Route path='/updbook/:id' element={<UpdBook/>}/>
      <Route path='/updborrower/:bid' element={<UpdBorrower/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/createaccount' element={<Createaccount/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
