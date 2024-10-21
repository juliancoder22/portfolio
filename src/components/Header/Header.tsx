import React, { useContext } from "react";
import "./Header.scss";
import { DarkModeContext } from "../../DarkModeContext";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header: React.FC = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("DarkModeContext must be used within a DarkModeProvider");
  }

  const { darkMode, toggleDarkMode } = context;

  return (
    <div className="header">
      <div className="header__links">
        <a className="header__link" href="#">
          Home
        </a>
        <a className="header__link" href="#">
          About
        </a>
        <a className="header__link" href="#">
          Skills
        </a>
        <a className="header__link" href="#">
          Experience
        </a>
        <a className="header__link" href="#">
          Examples
        </a>
      </div>

      <div className="header__buttons">
        <button className="header__btn-darkmode" onClick={toggleDarkMode}>
          {darkMode ? (
            <LightModeIcon className="header__icon" />
          ) : (
            <ModeNightIcon className="header__icon" />
          )}
        </button>
        <button className="header__btn-black">Get Started</button>
      </div>
    </div>
  );
};

export default Header;
