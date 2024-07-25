import HeroSvg from "../../assets/Hero-img.svg";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <span className="hero__pre">I am</span>
        <h1 className="hero__name">Julian Aquino</h1>
        <span className="hero__skill-1">I design websites</span>
        <span className="hero__skill-2">I develop websites</span>
        <div className="hero__buttons">
          <button className="hero__btn-contact">get in touch</button>
          <button className="hero__btn-work">view examples</button>
        </div>
      </div>
      <img src={HeroSvg} alt="hero img" />
    </div>
  );
};

export default Hero;
