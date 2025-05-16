import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Home.css'

const Home = () => {
  return (
    <>
    <div className="d-flex justify-content-end p-2 bg-white">
      
      <nav className="nav">
       
        <Link to="/" className="nav-link text-primary">Home</Link>
        <Link to="/displaybooks" className="nav-link text-primary">Books</Link>
        <Link to="/borrowersel" className="nav-link text-primary">Borrower</Link>
        <Link to="/" className="nav-link text-primary">Publisher</Link>
        <Link to="/" className="nav-link text-primary">Supplier</Link>
        <Link to="/login" className="nav-link text-danger">Logout</Link>
      </nav>

    </div>

    <h2 className='text-center' style={{marginTop:"246px", fontFamily:"Roboto"}}>Welcome To XYZ library</h2>
    </>
  );
};

export default Home;
