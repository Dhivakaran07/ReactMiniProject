import React, { createContext, useState } from "react";


const Home = () => {
  const [theme, Settheme] = useState("light");
  const [chtheme, setchtheme] = useState("Darkmode");

  const themes = () => {
    Settheme(theme === "light" ? "dark" : "light");
  };

  const chnage = () => {
    setchtheme(chtheme === "lightmode" ? "darkmode" : "lightmode");
  };

  return (
    <div
      className={`${theme === "light" ? "bg-light text-dark" : "bg-dark text-white"}`}
     
    >
      <header>
        <nav
          className={`navbar navbar-expand-lg ${
            theme === "light"
              ? "navbar-light bg-light text-dark"
              : "navbar-dark bg-dark"
          } fixed-top`}
        >
          <div>
            <img
              src="https://www.achieversit.com/assets/images/logo-white.png"
              alt=""
            />
          </div>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={() => {
                    themes();
                    chnage();
                  }}
                >
                  {chtheme}
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      
      <div  style={{ minHeight: "100vh", paddingTop: "150px" ,width:'2000px',position:"relative",right:"800px"} }className="container-fluid">
        <h1>Welcome to Home Page</h1>
        <p>this is {theme}</p>
      </div>
    </div>
  );
};

export default Home;
