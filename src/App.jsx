import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Box>
      <Navbar />
      <Box width={"1200px"} mx={"auto"}>
        <Home />
        <Contact />
      </Box>
    </Box>
  );
}

export default App;
