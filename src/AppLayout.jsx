import { NavLink } from "react-router-dom";
import NameLogo from "./NameLogo";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import { VscGithubProject } from "react-icons/vsc";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { IoMdDocument } from "react-icons/io";

function AppLayout() {
  return (
    <div>
      <header className="flex justify-between px-50 py-5 bg-black text-white fixed top-0 right-0 left-0">
        <div>
          <NavLink to="/">
            <NameLogo />
          </NavLink>
        </div>

        <div className="flex gap-15 items-center justify-between">
          <NavLink
            to="/projects"
            className="flex items-center gap-2 opacity-50 hover:opacity-100 duration-150"
          >
            <VscGithubProject /> Projects
          </NavLink>
          <NavLink
            to="/about"
            className="flex items-center gap-2 opacity-50 hover:opacity-100 duration-150"
          >
            <RiQuestionAnswerLine /> About
          </NavLink>
          <NavLink
            to="/resume"
            className="flex items-center gap-2 opacity-50 hover:opacity-100 duration-150"
          >
            <IoMdDocument />
            Resume
          </NavLink>
        </div>
      </header>
      <main>
        <Home />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
