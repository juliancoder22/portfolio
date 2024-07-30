import { useEffect, useState } from "react";
import "./Experience.scss";
import MadcaveSvg from "../../assets/madcave.svg";
import AnthosSvg from "../../assets/anthos.svg";

const Experience = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (position / docHeight) * 100;

    const easedPercent = Math.pow(scrollPercent / 100, 2) * 100;

    setScrollPosition(easedPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="experience">
      <span className="experience__title">Experience</span>
      <div className="experience__anthos">
        <div className="content">
          <h2 className="experience__box-title">Anthos</h2>
          <h3 className="experience__subtitle">
            Frontend and Backend Developer at Loop3
          </h3>
          <p className="experience__text">
            I developed the frontend of Forge, a comprehensive micro-service for
            Anthos. I did the implementation of the user interface, ensuring an
            intuitive and seamless user experience. I collaborated closely with
            the backend development team to effectively integrate
            functionalities and ensure product consistency. I participated in
            planning meetings and code reviews to ensure quality and meet
            deadlines.
          </p>
        </div>
        <div className="experience__img-container">
          <img src={AnthosSvg} alt="" />
        </div>
      </div>
      <div className="experience__bar-container">
        <div
          className="experience__bar"
          style={{
            height: `${scrollPosition}%`,
            backgroundColor: `rgba(140, 129, 230, ${scrollPosition / 100})`,
          }}
        ></div>
        <div className="experience__circle experience__circle--start"></div>
        <div
          className="experience__date experience__date--start"
          style={{
            color: scrollPosition > 0 ? "rgba(140, 129, 230, 1)" : "#666",
          }}
        >
          Jun 2023
        </div>
        <div
          className="experience__date experience__date--end"
          style={{
            color: scrollPosition >= 99 ? "rgba(140, 129, 230, 1)" : "#666",
          }}
        >
          Jun 2024
        </div>
        <div className="experience__circle experience__circle--end"></div>
      </div>
      <div className="experience__madcave">
        <div className="experience__img-container">
          <img src={MadcaveSvg} alt="" />
        </div>
        <div className="content">
          <h2 className="experience__box-title">Madcave</h2>
          <h3 className="experience__subtitle">Frontend Developer at Loop3</h3>
          <p className="experience__text">
            I contributed to the development of MadCave, a comic reading
            platform, focusing on frontend development. I designed and developed
            key features of the user interface to enhance accessibility and
            reading experience. I worked closely with the design team to ensure
            visual consistency and overall usability of the product. I conducted
            thorough testing to identify and fix errors, thereby improving
            system stability and performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
