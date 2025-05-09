import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5>About Camellia Cafe</h5>
                        <p>Camellia Cafe offers the best coffee and pastries, serving our community with fresh flavors and a cozy atmosphere.</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
                            <li><Link to="/select" className="text-light text-decoration-none">Users</Link></li>
                            <li><Link to="/select4" className="text-light text-decoration-none">Candidates</Link></li>
                            <li><Link to="/select3" className="text-light text-decoration-none">Posts</Link></li>
                            <li><Link to="/report" className="text-light text-decoration-none">Report</Link></li>
                            <li><Link to="/login" className="text-danger text-decoration-none">Logout</Link></li>
                        </ul>
                    </div>
                    <div className="" >
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>Email: contact@camelliacafe.com</li>
                            <li>Phone: +250 788 123 456</li>
                            <li>Address: Bugesera, Kigali, Rwanda</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>&copy; {new Date().getFullYear()} Camellia Cafe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
