import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  return (
    <Box id="skills" mb={"100px"}>
      <Box>
        <Text
          fontSize={"3.1rem"}
          fontWeight={"bolder"}
          position={"relative"}
          textAlign={"center"}
          _before={{
            content: '"Skills"',
            position: "absolute",
            fontSize: "7vw",
            fontWeight: "900",
            color: "rgba(255, 255, 255, 0.1)",
            top: "-5px",
            left: "-15px",
          }}
          mb={"10px"}
        >
          My Skills
        </Text>

        <Text>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </Text>

        <Box display={"flex"} flexDir={"column"}>
          <Box display={"flex"} gap={"90px"}>

          </Box>
          <Box display={"flex"} gap={"90px"}></Box>
          <Box display={"flex"} gap={"90px"}></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
