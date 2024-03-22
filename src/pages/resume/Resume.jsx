import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Resume = () => {
  return (
    <Box id="resume" mb={"100px"}>
      <Box>
        <Text
          fontSize={"3.1rem"}
          fontWeight={"bolder"}
          position={"relative"}
          textAlign={"center"}
          _before={{
            content: '"Resume"',
            position: "absolute",
            fontSize: "7vw",
            fontWeight: "900",
            color: "rgba(255, 255, 255, 0.1)",
            top: "-5px",
            left: "-15px",
          }}
          mb={"10px"}
        >
          Resume
        </Text>

        <Text>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </Text>
      </Box>
    </Box>
  );
};

export default Resume;
