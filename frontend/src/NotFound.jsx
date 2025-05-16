
import './NotFound.css';

const Notfound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <p className="display-1 text-danger">404</p>
        <h2 className="h3 text-muted">Page Requested Not Found</h2>
      </div>
    </div>
  );
};

export default Notfound;
