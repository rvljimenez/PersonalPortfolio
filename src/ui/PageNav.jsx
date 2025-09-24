import { NavLink } from "react-router-dom";
import NameLogo from "../ui/NameLogo";
import { GrProjects } from "react-icons/gr";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import rvlj from "./rvlj.pdf";

const linkhref = rvlj;

function PageNav() {
  return (
    <div className="bg-black fixed top-0 w-full z-10">
      <div className="h-[70px] mx-50 text-white flex items-center justify-between">
        <NameLogo />

        <div className="flex gap-8 opacity-100">
          <NavLink
            className="flex gap-2 items-center hover:underline"
            to={"/projects"}
          >
            <GrProjects />
            Projects
          </NavLink>
          <NavLink
            className="flex gap-2 items-center hover:underline"
            to={"/about"}
          >
            <MdOutlineQuestionAnswer /> About
          </NavLink>
          <a
            className="flex gap-2 items-center hover:underline"
            href={linkhref}
          >
            <IoDocumentTextSharp />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default PageNav;
