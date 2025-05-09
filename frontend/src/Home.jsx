import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-primary d-flex justify-content-end " style={{fontFamily:"roboto",fontSize:"18px"}}>
        <Link to="/" style={{ textDecoration: "none", padding: "23px", color: "white" }}>
          Home
        </Link>
        <Link to="/select" style={{ textDecoration: "none", padding: "20px", color: "white" }}>
          Users
        </Link>
        <Link to="/select4" style={{ textDecoration: "none", padding: "20px", color: "white" }}>
          Candidates
        </Link>
        <Link to="/select3" style={{ textDecoration: "none", padding: "20px", color: "white" }}>
          Posts
        </Link>
        <Link to="/report" style={{ textDecoration: "none", padding: "20px", color: "white" }}>
          Report
        </Link>

        <Link to="/login" className="text-danger" style={{ textDecoration: "none", padding: "20px", color: "white" }}>
         Logout
        </Link>
      </div>

      <h2 className=" text-center" style={{ marginTop: "210px",color:"black" ,fontFamily:"roboto" ,fontSize:"53px"}}>
        Welcome TO Camellia Cafe
      </h2>

      <div style={{ backgroundColor: "black", marginTop: "  9289px", padding: "72px" }}></div>
    </>
  );
};

export default Home;
