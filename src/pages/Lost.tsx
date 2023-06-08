import "./../assets/lost.css";
import { Link } from "react-router-dom";

function Lost() {
  return (
    <div className="lost">
      <div className="text">
        <h1>Looks like you're lost</h1>
        <Link to="http://localhost:5173/1">Click here to get back home</Link>
      </div>
    </div>
  );
}

export default Lost;
