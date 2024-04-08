import { Box, Text } from "@chakra-ui/react";
import FadebackText from "../../components/common/FadebackText/FadebackText";

const Resume = () => {
  return (
    <Box
      id="resume"
      my={"100px"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      px={"100px"}
      pt={"50px"}
    >
      <FadebackText text={"Resume"} fadeback={"Resume"} center />
      <Text textAlign={"center"}>
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia. It is a paradisematic country, in which roasted
        parts of sentences fly into your mouth.
      </Text>
    </Box>
  );
};

export default Resume;
