import "./About.scss";
import aboutSvg from "../../assets/about-img.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const About = () => {
  return (
    <div className="about">
      <span className="about__title">about me</span>
      <div className="about__container">
        <img src={aboutSvg} />
        <div className="about__content">
          <span className="about__me">I am</span>
          <p className="about__text">
            a self-taught front-end developer. I can develop responsive websites
            from scratch and raise them into modern user-friendly web
            experiences. Transforming my creativity and knowledge into a
            websites has been my passion for over a year. I always strive to
            learn about the newest technologies and frameworks.
          </p>
          <div className="about__availability">
            <span className="about__info">
              <LocationOnIcon />
              Buenos Aires, Argentina.
            </span>
            <span className="about__info">
              <span className="green-point"></span>Available for new projects
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
