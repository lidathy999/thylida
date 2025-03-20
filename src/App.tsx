import { Button } from "@mui/material";
import "./App.css";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";
import ContactMe from "./components/ContactMe";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function App() {
  const menus = ["Home", "About", "Resume", "Portfolio", "Services", "Contact"];
  return (
    <div className="App bg-amber-50">
      <div className="w-[80%] pb-10 justify-center mx-auto">
        <div className="flex min-h-screen overflow-scroll mb-6 h-screen justify-between flex-col h-[100%]">
          <div className="flex flex-row gap-2 justify-end pr-5 pt-3">
            {menus.map((menu) => (
              <Button variant="outlined" color="warning" className="p-2">
                {menu}
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
                <h1 className="text-3xl font-bold">Hello, I'm Lyda!</h1>
                <p className="text-xl">
                  I'm a{" "}
                  <span className="text-primary-500">Front-end Developer</span>
                </p>
              </div>
            </div>
            <div className="text-center text-lg leading-8 shadow-drop-center fade-in">
              Detail-oriented Front-End Developer with more than 5 years
              experience working with HTML, CSS, Javascript, JQuery, and
              TypeScript. Highly adept at both independent and collaborative
              projects, with an emphasis on landing page and website
              development.
            </div>
          </div>
          <div className="mb-5">
            <KeyboardDoubleArrowDownIcon className="text-primary-500 animate-bounce justify-center" />
          </div>
        </div>
        <AboutMe />
        <ProjectList />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
