import "./Footer.scss";
import logoSvg from "../../assets/logo.svg";
import { LinkedIn, Email, GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <img src={logoSvg} alt="Julian Aquino Logo" />
        <ul className="footer__links">
          <li>
            <a href="#" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
              Experience
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
              Examples
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__bottom">
        <span>© 2024 Julian Aquino | Freelance Web Developer</span>
        <ul>
          <li>
            <a href="#">
              <LinkedIn className="footer__icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <Email className="footer__icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <GitHub className="footer__icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
