import "./nav.css";

import { Link } from "react-router-dom";

export default () => {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/display">Display</Link>
        </li>
      </ul>
    </nav>
  );
};
