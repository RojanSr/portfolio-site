import { Box, Image, Text } from "@chakra-ui/react";
import ProfileImg from "../../assets/profile.png";
import { PrimaryButton, SecondaryButton } from "../../components/button";

const Home = () => {
  return (
    <Box
      id="home"
      display={"flex"}
      alignItems={"center"}
      gap={"30px"}
      pt={"70px"}
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
            I&apos;m{" "}
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

      <Box height={"700px"}>
        <Image
          src={ProfileImg}
          objectFit={"contain"}
          h={"inherit"}
          w={"inherit"}
        />
      </Box>
    </Box>
  );
};

export default Home;
