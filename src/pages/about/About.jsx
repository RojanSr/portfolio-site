import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import profileImg from "../../assets/profile.png";

const MY_INFO = {
  name: "Ajay Pudasaini",
  date_of_birth: "January 01, 1987",
  address: "San Francisco CA 97987 USA",
  zip_code: "1000",
  email: "ajaypudasaini.gmail.com",
  phone: "+1-2234-5678-9-0",
};

const About = () => {
  return (
    <Box id="about" display={"flex"} mt={"100px"} gap={"90px"}>
      <Box h={"640px"} mb={"10px"}>
        <Image h={"inherit"} src={profileImg} alt="Profile Picture" mb={5} />
      </Box>
      <Box maxW={"500px"}>
        <Text fontSize={"3.1rem"} fontWeight={"bolder"}>
          About Me
        </Text>
        <Text color={"#999999"} fontSize={"16px"} py={10}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual.
        </Text>
        <Box display={"flex"} gap={"18px"}>
          <Box>
            {Object.keys(MY_INFO).map((key) => {
              return <Text fontWeight={"bold"}>{key}:</Text>;
            })}
          </Box>
          <Box>
            {Object.keys(MY_INFO).map((key) => {
              return <Text>{MY_INFO[key]}</Text>;
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
