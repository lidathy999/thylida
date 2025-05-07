import { Button } from "@mui/material";
import "./App.css";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";
import ContactMe from "./components/ContactMe";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

type RowType = {
  label: string;
  id: string;
};
function App() {
  const menus = [
    { label: "Home", id: "home" },
    // { label: "About", id: "aboutMe" },
    { label: "Resume", id: "resume" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contactMe" },
  ];

  const handleClickMenu = (row: RowType) => {
    const element = document.getElementById(row.id) as any;
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <div className="App bg-amber-50" id="home">
      <div className="w-[80%] pb-10 justify-center mx-auto">
        <div className="flex min-h-screen overflow-scroll mb-6 h-screen justify-between flex-col h-[100%]">
          <div className="flex flex-row gap-2 justify-end pr-5 pt-3">
            {menus.map((menu) => (
              <Button
                key={menu.id}
                onClick={() => handleClickMenu(menu)}
                variant="outlined"
                color="warning"
                className="p-2"
              >
                {menu?.label}
              </Button>
            ))}
          </div>
          <div className="flex flex-col h-[100%] self-center justify-center items-center">
            <div className="flex flex-col items-center scale-up-center mb-8">
              <div className="w-[150px] h-[150px]">
                <img
                  className="rounded-full"
                  src="../../images/avarta.png"
                  alt="profile"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Hello, I'm Lyda!</h1>
                <p className="text-xl">
                  I'm a{" "}
                  <span className="text-primary-500 text-2xl">
                    Front-end Developer
                  </span>
                </p>
              </div>
            </div>
            <div className="text-center text-lg leading-8 shadow-drop-center fade-in w-1/2">
              A highly experienced Front-End Web Developer with over 6 years of
              expertise in creating responsive, user-friendly websites with
              optimized performance and cross-browser compatibility. Skilled in
              UI design with responsive, testing, and debugging, I excel both
              independently and in team collaborations. I love to challenge and
              drive innovation.
            </div>
          </div>
          <div className="mb-2">
            <KeyboardDoubleArrowDownIcon className="text-primary-500 animate-bounce justify-center" />
          </div>
        </div>
      </div>
      {/* <AboutMe /> */}

      <ProjectList />
      <ContactMe />
      <div className="bg-primary-500 mt-8 h-[100px] p-4 text-center">
        <span>Power By LYDA THY@2025</span>
        <div className="flex gap-3 mt-2 justify-center">
          <a href="https://gitlab.com/Thylida">
            <img
              width={30}
              height={30}
              src="../../images/gitlab.png"
              alt="gitlab"
            />
          </a>
          <a href="https://www.linkedin.com/in/lyda-thy-475381229">
            <img
              width={30}
              height={30}
              src="../../images/linkedin.png"
              alt="linkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
