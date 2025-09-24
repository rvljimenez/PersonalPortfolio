import { IoLogoGithub } from "react-icons/io";
import { HiComputerDesktop } from "react-icons/hi2";

function ProjectsData({ portfolio }) {
  const { title, description, demoLink, repositoryLink, type } = portfolio;
  return (
    <ul
      key={portfolio.title}
      className="flex flex-col hover:scale-105 duration-300"
    >
      <div className="text-lg font-bold h-12">{title}</div>
      <div className="text-sm h-40">{description}</div>
      <div className="text-gray-400 text-sm">{type}</div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
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
      </div>
    </ul>
  );
}

export default ProjectsData;
