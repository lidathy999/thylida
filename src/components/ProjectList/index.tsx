import { Button } from "@mui/material";
import "../../App.css";

type ProjectTypes = string[];

function ProjectList() {
  const projects = ["RokKru", "Todo List", "Portfolio", "API"] as ProjectTypes;
  return (
    <div className="pt-8" id="projects">
      <h2 className="text-3xl text-left font-bold text-primary-500 mb-6">
        My Projects 🌸
      </h2>
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
