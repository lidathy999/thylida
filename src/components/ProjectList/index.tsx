import "../../App.css";

type ProjectTypes = {
  name: string;
  cover: string;
  gitlab_url: string;
  className?: string;
};

function ProjectList() {
  const projects: ProjectTypes[] = [
    {
      name: "RokKru",
      cover: "../../images/portfolio_cover.png",
      gitlab_url: "https://gitlab.com/Thylida/thylida",
    },
    {
      name: "Todo List",
      cover: "",
      gitlab_url: "",
    },
    {
      name: "Portfolio",
      cover: "",
      gitlab_url: "",
    },
    {
      name: "API",
      cover: "",
      gitlab_url: "",
    },
    {
      name: "Camemis App",
      cover: "../../images/camemis-app.png",
      gitlab_url: "",
      className: "bg-sky-100",
    },
    {
      name: "Camemis Library",
      cover: "../../images/camemis-e-library.webp",
      gitlab_url: "",
      className: "bg-sky-100",
    },
    {
      name: "UNT Wholesale",
      cover: "../../images/unt-wholesale.png",
      gitlab_url: "",
    },
    {
      name: "API",
      cover: "",
      gitlab_url: "",
    },
  ];
  return (
    <div>
      <div className="bg-primary-500 h-[400px]" id="projects">
        <div className="h-full flex flex-col py-8 items-center">
          <h2 className="text-3xl text-center font-bold text-white global-padding-b">
            A collection of projects I've worked on 🌸
          </h2>
          <div className="text-lg w-1/2">
            Below is a list of projects I've worked on, including both personal
            initiatives and professional experiences from my previous work.
          </div>
        </div>
      </div>

      <div className="mx-auto w-[80%] mt-[-200px] global-padding-t bg-primary-50 p-6 rounded-t-lg shadow-md">
        <div className="grid grid-cols-2 gap-6">
          {projects.map((project: ProjectTypes) => (
            <div
              className={`h-[300px] bg-white rounded-md shadow-md relative ${project.className}`}
              key={project.name}
            >
              {project.cover && (
                <img
                  src={project.cover}
                  alt="portfolio"
                  className="absolute z-10 bottom-0 top-0 left-0 right-0 m-auto object-cover h-full inset-shadow-2xs p-1"
                />
              )}
              <div className=" none hover:block z-20 bottom-0 h-full">
                {project.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
