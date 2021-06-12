  import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { OverlayTrigger,Tooltip } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";
function Navbar() {
  let history = useHistory();
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState('')
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
  };
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  const updateChange = (event) => {
    setSearch(event.target.value)
  }
  const updateSearch = (event) =>{
    event.preventDefault()
    closeMobileMenu()
    history.push(`/NewsForYou/search/${search}`);
  }
  window.addEventListener("scroll", changeNavbarColor);
  const popover = (
    <Tooltip id="tooltip" className="tooltip">
      <ul className="tooltip-dropdown">
        <li className="mynav-item">
          <NavLink
            exact
            to="/NewsForYou/sports"
            className="mynav-links"
            activeClassName="active"
            onClick={closeMobileMenu}
            data-after="blog"
          >
            <i className="fas fa-table-tennis"></i> sports
          </NavLink>
        </li>
        <li className="mynav-item">
          <NavLink
            exact
            to="/NewsForYou/tech"
            className="mynav-links"
            activeClassName="active"
            onClick={closeMobileMenu}
            data-after="Pricing"
          >
            <i className="fas fa-microchip"></i> technology
          </NavLink>
        </li>
        <li className="mynav-item">
          <NavLink
            exact
            to="/NewsForYou/science"
            className="mynav-links"
            activeClassName="active"
            onClick={closeMobileMenu}
            data-after="contact"
          >
            <i className="fas fa-atom"></i> science
          </NavLink>
        </li>
        <li className="mynav-item">
          <NavLink
            exact
            to="/NewsForYou/health"
            className="mynav-links"
            activeClassName="active"
            onClick={closeMobileMenu}
            data-after="about"
          >
            <i className="fas fa-heartbeat"></i> health &nbsp;
            <span className="badge bg-danger text-dark text-white">
              Trending
            </span>
          </NavLink>
        </li>
        <li className="mynav-item">
          <NavLink
            exact
            to="/NewsForYou/entertainment"
            className="mynav-links"
            activeClassName="active"
            onClick={closeMobileMenu}
            data-after="about"
          >
            <i className="fas fa-photo-video"></i> entertainment
          </NavLink>
        </li>
      </ul>
    </Tooltip>
  );
  return (
    <>
      <section id="header">
        <div
          className={colorChange ? "header colorChange headerChange" : "header"}
        >
          <div className="nav-bar">
            <div className="brand">
              <a href="#hero" className="brand">
                <h1>NewsForYou.com</h1>
              </a>
            </div>
            <div className="nav-list">
              <div className="hamburger" onClick={handleClick}>
                <i className={click ? "fa fa-times" : "fa fa-bars"} />
              </div>
              <ul className={click ? "mynav-menu active" : "mynav-menu"}>
                <li className="mynav-item">
                  <NavLink
                    exact
                    to="/NewsForYou"
                    className="mynav-links"
                    activeClassName="active"
                    onClick={closeMobileMenu}
                    data-after="home"
                  >
                    <i className="fas fa-home"></i> Home
                  </NavLink>
                </li>
                <li className="mynav-item">
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={popover}
                    rootClose
                  >
                    <div className="mynav-links" data-after="all services">
                      <i className="fas fa-list"></i> Categories
                    </div>
                  </OverlayTrigger>
                </li>
                <li className="mynav-item">
                  <NavLink
                    exact
                    to="/NewsForYou/live-tv"
                    className="mynav-links"
                    activeClassName="active"
                    onClick={closeMobileMenu}
                    data-after="home"
                  >
                    <i className="fas fa-tv"></i> Live Tv
                  </NavLink>
                </li>
                <li>
                  <form
                    action=""
                    className="news-serch-form"
                    onSubmit={updateSearch}
                  >
                    <input
                      type="text"
                      className="news-search-bar"
                      placeholder=" Type To Search"
                      onChange={updateChange}
                    />
                    <button className="search-btn">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
