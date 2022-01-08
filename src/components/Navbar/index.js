import "./index.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_interior">
        <ul className="navbar_items">
          <li>
            <Link to="/" className="navbar_link">
              Home
            </Link>{" "}
          </li>
          |
          <li>
            <Link to="/profile" className="navbar_link">
              Profile
            </Link>
          </li>
          |
          <li>
            <Link to="/listings" className="navbar_link">
              Listings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
