import { createContext } from "react";
import About from "../about/about";
import Contact from "../contact/contact";
import Home from "../home/home";
import Portfolio from "../portfolio/skills/portfolio";
import Skills from "../skills/skills";
import styles from "./body.module.css";

export interface IIds {
  home: string;
  about: string;
  skills: string;
  portfolio: string;
  contact: string;
}
const ids: IIds = {
  home: "home",
  about: "about",
  skills: "skills",
  portfolio: "portfolio",
  contact: "contact",
};
export const Context = createContext(ids);
export default function Body() {
  return (
    <div className={`${styles.container} mt-5`}>
      <Home />
      <hr className="hr hr-blurry" />
      <About />
      <hr className="hr hr-blurry" />
      <Skills />
      <hr className="hr hr-blurry" />
      <Portfolio />
      <hr className="hr hr-blurry" />
      <Contact />
    </div>
  );
}
