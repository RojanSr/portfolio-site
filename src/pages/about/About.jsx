import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import profileImg from "../../assets/profile.png";

const About = () => {
  return (
    <Box id="about" display={"flex"} mt={"100px"} gap={"90px"}>
      <Box h={"640px"} bg={"white"} mb={"10px"}>
        <Image h={"inherit"} src={profileImg} alt="Profile Picture" mb={5} />
      </Box>
      <Box maxW={"500px"}>
        <Text fontSize={"3.1rem"} fontWeight={"bolder"}>
          About Me
        </Text>
        <Text>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual.
        </Text>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default About;
