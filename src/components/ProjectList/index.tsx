import "../../App.css";

type ProjectTypes = string[];

function ProjectList() {
  const projects = ["RokKru", "Todo List", "Portfolio", "API"] as ProjectTypes;
  return (
    <div className="global-padding-t" id="projects">
      <div className="">
        <h2 className="text-3xl text-left font-bold text-primary-500 global-padding-b">
          A collection of projects I've worked on 🌸
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {projects.map((project: string) => (
          <div
            className="h-[300px] bg-primary-100 rounded-md shadow-md"
            key={project}
          >
            <div className="text-center justify-center self-center h-full">
              {project}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
