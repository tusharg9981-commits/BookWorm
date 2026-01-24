import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";

export default function Header() {
  return (
    <header className="bw-header">
      
      {/* LEFT */}
      <div className="bw-header-left">
        <img src={logo} alt="Bookworm Logo" className="bw-logo-img" />
      </div>

      {/* CENTER */}
      <nav className="bw-header-center">
        <Link to="/home" className="active">Home</Link>
        <Link to="/home">Browse</Link>
        <Link to="/home">My Shelf</Link>
        <Link to="/home">Library</Link>
      </nav>

      {/* RIGHT */}
      <div className="bw-header-right">
        <Link to="/cart" className="bw-icon">🛒</Link>
        <span className="bw-icon">🌙</span>
        <div className="bw-avatar">JD</div>
      </div>

    </header>
  );
}
