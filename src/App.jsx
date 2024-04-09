import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Reveal from "./components/framerMotion/Reveal";
import Resume from "./pages/resume/Resume";
import Skills from "./pages/skills/Skills";

function App() {
  return (
    <Box>
      <Navbar />
      <Box width={"1200px"} mx={"auto"}>
        <Reveal>
          <Home />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Resume />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal revealAmount={0.2}>
          <Contact />
        </Reveal>
      </Box>
    </Box>
  );
}

export default App;
