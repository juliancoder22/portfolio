import "./Skills.scss";
import { skillsObjects } from "../../skills";

const Skills = () => {
  const firstRowSkills = skillsObjects.slice(0, 7);
  const secondRowSkills = skillsObjects.slice(7);

  return (
    <div className="skills">
      <div className="skills__container">
        <span className="skills__title">skills</span>
        <h2 className="skills__subtitle">
          The skills, tools and technologies I am{" "}
          <span className="skills__violet-background">really </span>good at:
        </h2>
        <div className="skills__content">
          <div className="skills__row">
            {firstRowSkills.map((skill, index) => (
              <div key={index} className="skills__item">
                <img
                  src={skill.url}
                  alt={`${skill.name} logo`}
                  className="skills__logo"
                />
                <p className="skills__name">{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="skills__row">
            {secondRowSkills.map((skill, index) => (
              <div key={index} className="skills__item">
                <img
                  src={skill.url}
                  alt={`${skill.name} logo`}
                  className="skills__logo"
                />
                <p className="skills__name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
