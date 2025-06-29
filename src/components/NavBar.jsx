import { NavLink, useNavigate } from "react-router-dom";

import { removeToken } from "../utils/token";
import Logo from "./Logo";
import "./styles/NavBar.css";

function NavBar({ setIsLoggedIn }) {
  const navigate = useNavigate();

  function signOut() {
    removeToken();
    navigate("/login");
    setIsLoggedIn(false);
  }

  return (
    <nav className="navbar">
      {/* ... */}
      <ul>
        {/* Add the onClick listener. */}
        <li>
          <button onClick={signOut} className="navbar__link navbar__button">
            Sign Out
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
