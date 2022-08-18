import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="./../../static/favicon-32x32.png"
              className="icon"
              alt="icon"
            />
            Heroes SPA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/marvel"
              >
                Marvel
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/dc"
              >
                DC
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/search"
              >
                Search
              </NavLink>
            </ul>

            <ul className="navbar-nav">
              <li className="navbar-nav ml-auto">
                <span className="nav-item nav-link text-primary">
                  {user?.name}
                </span>
                <button className="nav-item nav-link btn" onClick={onLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
