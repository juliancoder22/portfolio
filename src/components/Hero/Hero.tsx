import React, { useContext } from "react";
import HeroSvg from "../../assets/Hero-img.svg";
import "./Hero.scss";
import { DarkModeContext } from "../../DarkModeContext";

const Hero: React.FC = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("DarkModeContext must be used within a DarkModeProvider");
  }

  const { darkMode } = context;

  return (
    <div className={`hero ${darkMode ? "dark-mode" : ""}`}>
      <div className="hero__content">
        <span className="hero__pre">I am</span>
        <h1 className="hero__name">Julian Aquino</h1>
        <span className="hero__skill-1">I design websites</span>
        <span className="hero__skill-2">I develop websites</span>
        <div className="hero__buttons">
          <button className="hero__btn-contact">Get in touch</button>
          <button className="hero__btn-work">View examples</button>
        </div>
      </div>
      <img src={HeroSvg} alt="hero img" />
    </div>
  );
};

export default Hero;
