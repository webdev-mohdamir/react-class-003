import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found 404</h1>

      <Link to="/">Go Home</Link>
    </div>
  );
};

export default PageNotFound;
