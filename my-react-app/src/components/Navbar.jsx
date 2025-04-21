import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <div className="nav-content">
        <Link to="/" className="nav-brand">
          Book Explorer
        </Link>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? " Light " : " Dark "}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
