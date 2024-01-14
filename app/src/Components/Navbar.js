import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import { Link,useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Проверяем наличие токена в локальном хранилище
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem('isEmployee');
    sessionStorage.removeItem("token");
    sessionStorage.removeItem('isEmployee');
    setIsAuthenticated(false);

    /*if (!localStorage.getItem("token")) {
      sessionStorage.clear();
    }*/
    window.location.reload();
  };
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/home">
          Health <span className="navbar-sign">+</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/services" className="navbar-links">
              Услуги
          </Link>
        </li>
        <li>
          <Link to="/prices" className="navbar-links">
              Цены
          </Link>
        </li>
        <li>
          <Link to="/doctors" className="navbar-links">
              Врачи
          </Link>
        </li>
        <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={() => {
        navigate("/appointment");
        window.location.reload()}}
      >Онлайн заявка</button>
      </ul>
      {isAuthenticated ? (
      <ul className = "navbar-items">
      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={() => {
        navigate("/profile");
        window.location.reload()}}
      >Профиль</button>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleLogoutClick}
      >Выйти</button>

      </ul>
      ):(
        <li>
          <button
            className="navbar-btn"
            type="button"
            onClick={() => {
              navigate("/login"); // Предположим, что есть страница входа по пути "/login"
            }}
          >
            Войти
          </button>
        </li>
      )}


      {/*
      {/* Mobile }
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          {/*<li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
            </li>}
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <Link onClick={openNav} to="/service">
              Услуги
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon }
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
        </div>*/}
    </div>
  );
}

export default Navbar;