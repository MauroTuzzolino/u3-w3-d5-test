import { BsHouseDoorFill, BsBookFill } from "react-icons/bs";
import logo from "../assets/logo/logo.png";

const SideBar = () => {
  return (
    <aside className="col-2">
      <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className="list-unstyled" style={{ lineHeight: 2.2 }}>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center " href="#">
                    <BsHouseDoorFill className="me-2 fs-4" />
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <BsBookFill className="me-2 fs-4" />
                    Your Library
                  </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-secondary btn-sm" type="button">
                      GO
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn mt-3 d-flex flex-column gap-2 px-3">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <div className="text-muted mt-2">
            <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
