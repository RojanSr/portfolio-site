import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import ProfileImg from "../../assets/profile.png";
import { PrimaryButton, SecondaryButton } from "../../components/button";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box
      id="home"
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      gap={"30px"}
      mb={"50px"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
        <Text
          fontWeight={"bold"}
          fontSize={"14px"}
          letterSpacing={"3px"}
          color={"#ffbd39"}
          textTransform={"uppercase"}
        >
          HELLO!
        </Text>
        <Box fontWeight={"bolder"} fontSize={"60px"} lineHeight={1.1}>
          <Text>
            I'm{" "}
            <Text as={"span"} color={"#ffbd39"}>
              Ajay Pudasaini
            </Text>
          </Text>
        </Box>
        <Box>
          <Text fontSize={"40px"} fontWeight={"bold"}>
            A Software Engineer{" "}
          </Text>
          <Text fontSize={"18px"} color={"rgba(255, 255, 255, 0.7)"}>
            AI | ML | DL Enthusiast
          </Text>
        </Box>
        <Box display={"flex"} gap={8}>
          <PrimaryButton
            text={"HIRE ME"}
            onClick={() =>
              window.open("mailto:ajayapudasaini999@gmail.com", "_blank")
            }
          />
          <SecondaryButton text={"MY WORKS"} />
        </Box>
      </Box>
      <Box width={"600px"} height={"300px"} mt={"-370px"}>
        <Image src={ProfileImg} borderRadius={"40%"} />
      </Box>
    </Box>
  );
};

export default Home;
