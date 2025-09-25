import { IoLogoGithub } from "react-icons/io";
import { HiComputerDesktop } from "react-icons/hi2";

function ProjectsData({ portfolio }) {
  const { title, description, demoLink, repositoryLink, type } = portfolio;
  return (
    <ul
      key={portfolio.title}
      className="grid grid-rows-[auto_1fr_auto_auto] hover:scale-105 duration-30 "
    >
      <div className="text-lg my-2 font-bold h-12">{title}</div>
      <div className="text-base my-2">{description}</div>
      <div className="text-gray-400 my-2 text-sm">{type}</div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <a
            href={demoLink}
            className="flex items-center gap-2 hover:underline"
          >
            <HiComputerDesktop /> Demo
          </a>
        </div>
        <div>
          <a
            href={repositoryLink}
            className=" flex items-center gap-2 hover:underline"
          >
            <IoLogoGithub /> Repository
          </a>
        </div>
      </div>
    </ul>
  );
}

export default ProjectsData;
