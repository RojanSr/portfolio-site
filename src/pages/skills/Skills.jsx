import { Box, Text } from "@chakra-ui/react";
import FadebackText from "../../components/common/FadebackText/FadebackText";

const Skills = () => {
  return (
    <Box
      id="skills"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      pt={"50px"}
    >
      <FadebackText text={"My Skills"} fadeback={"Skills"} center />
      <Text>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </Text>

      <Box display={"flex"} flexDir={"column"}>
        <Box display={"flex"} gap={"90px"}></Box>
        <Box display={"flex"} gap={"90px"}></Box>
        <Box display={"flex"} gap={"90px"}></Box>
      </Box>
    </Box>
  );
};

export default Skills;
