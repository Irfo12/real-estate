import React from "react";
export default function NavBar() {
  return (
    <div>
      <nav
        className="navbar navbar-light navbar-expand-lg navbar-black light-color pt-4 pb-4"
        style={{ color: "black" }}
      >
        <a
          exact="true"
        
          to="/"
          className="navbar-brand"
          href="/"
          style={{ paddingLeft: "180px" }}
        >
          Studio
        </a>
        <button 
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="basicExampleNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                exact="true"         
                 href="/"
                className="nav-link"
                style={{ paddingLeft: "30px" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                exact="true"         
                 href="/about"
                className="nav-link"
                style={{ paddingLeft: "30px" }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                exact="true"         
                 href="/portfolio"
                className="nav-link"
                style={{ paddingLeft: "30px" }}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                exact="true"         
                 href="/contact"
                className="nav-link"
                style={{ paddingLeft: "30px" }}
              >
                Contact
              </a>
            </li>
          </ul>
          <form className="form-inline">
            <div className="md-form my-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}
