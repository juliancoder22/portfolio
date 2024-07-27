// Importamos los logos
import CssLogo from "./assets/css.svg";
import FigmaLogo from "./assets/figma.svg";
import HtmlLogo from "./assets/html.svg";
import JavaLogo from "./assets/java.svg";
import JestLogo from "./assets/jest.svg";
import JsLogo from "./assets/js.svg";
import NodeLogo from "./assets/node.svg";
import ReactLogo from "./assets/reactjs.svg";
import ReduxLogo from "./assets/redux.svg";
import ScssLogo from "./assets/scss.svg";
import SpringLogo from "./assets/spring.svg";
import StorybookLogo from "./assets/storybook.svg";
import TsLogo from "./assets/ts.svg";
import VsCodeLogo from "./assets/vs.svg";

interface Skill {
  name: string;
  url: string;
}

export const skillsObjects: Skill[] = [
  {
    name: "CSS",
    url: CssLogo,
  },
  {
    name: "Figma",
    url: FigmaLogo,
  },
  {
    name: "HTML",
    url: HtmlLogo,
  },
  {
    name: "Spring",
    url: SpringLogo,
  },
  {
    name: "Jest",
    url: JestLogo,
  },
  {
    name: "JavaScript",
    url: JsLogo,
  },
  {
    name: "Node.js",
    url: NodeLogo,
  },
  {
    name: "React",
    url: ReactLogo,
  },
  {
    name: "Redux",
    url: ReduxLogo,
  },
  {
    name: "SCSS",
    url: ScssLogo,
  },
  {
    name: "Java",
    url: JavaLogo,
  },
  {
    name: "Storybook",
    url: StorybookLogo,
  },
  {
    name: "TypeScript",
    url: TsLogo,
  },
  {
    name: "VS Code",
    url: VsCodeLogo,
  },
];
