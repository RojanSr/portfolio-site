import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

function App() {
  return (
    <Box>
      <Navbar />
      <Box width={"1200px"} mx={"auto"}>
        <Home />
        <About />
        <Contact />
      </Box>
    </Box>
  );
}

export default App;
