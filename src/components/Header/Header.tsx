import "./Header.scss";

const Header = () => {
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
        <button className="header__btn-darkmode">light</button>
        <button className="header__btn-black">get started</button>
      </div>
    </div>
  );
};

export default Header;
