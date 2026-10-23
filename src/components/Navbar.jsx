import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active fw-semibold" : "");

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Employee Dashboard</Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/employee-form" className={linkClass}>Employee Form</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}