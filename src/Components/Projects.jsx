import ProjectsData from "./ProjectsData";
import data from "../data/data";

function Projects() {
  const portfolio = data;

  return (
    <div className="h-screen px-50">
      <div className="font-bold text-6xl mb-10">PROJECTS</div>

      <div className="grid grid-cols-[1fr_1fr_1fr] h-150 gap-8">
        {portfolio.map((portfolio) => (
          <ProjectsData key={portfolio.title} portfolio={portfolio} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
