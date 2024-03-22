import { Box, Text, Image, Input, Button, Textarea } from "@chakra-ui/react";
import React from "react";
import profileImg from "../../assets/profile.png";

const Contact = () => {
  return (
    <Box
      id="contact"
      display={"flex"}
      justifyContent={"center"}
      width={"inherit"}
      mb={"100px"}
    >
      <Box>
        <Text
          fontSize={"3.1rem"}
          fontWeight={"bolder"}
          position={"relative"}
          textAlign={"center"}
          _before={{
            content: '"Contact"',
            position: "absolute",
            fontSize: "7vw",
            fontWeight: "900",
            color: "rgba(255, 255, 255, 0.1)",
            top: "-5px",
            left: "-15px",
          }}
          mb={"10px"}
        >
          Contact Me
        </Text>

        <Text>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </Text>

        <Box display={"flex"} gap={"90px"}>
          <Box>
            <Text fontSize={"2rem"} fontWeight={"bolder"}>
              Address
            </Text>
            <Text fontSize={"1.1rem"} fontWeight={"500ms"}>
              Manmaiju, Kathmandu
            </Text>
          </Box>
          <Box>
            <Text fontSize={"2rem"} fontWeight={"bolder"}>
              Contact Number
            </Text>
            <Text fontSize={"1.1rem"} fontWeight={"500ms"}>
              +977-9843809941
            </Text>
          </Box>
          <Box>
            <Text fontSize={"2rem"} fontWeight={"bolder"}>
              Email Address
            </Text>
            <Text fontSize={"1.1rem"} fontWeight={"500ms"}>
              ajayapudasaini999@gmail.com
            </Text>
          </Box>
        </Box>

        <Box display={"flex"} gap={"90px"}>
          <Box h={"640px"} mb={"10px"}>
            <Image
              h={"inherit"}
              src={profileImg}
              alt="Profile Picture"
              mb={5}
              borderRadius={"40%"}
            />
          </Box>
          <Box
            maxW={"500px"}
            background={"red"}
            display={"flex"}
            flexDir={"column"}
          >
            <Input variant="outline" placeholder="Your Name" size="md" />
            <Input variant="outline" placeholder="Your Email" size="md" />
            <Input variant="outline" placeholder="Subject" size="md" />
            <Textarea variant="outline" placeholder="Your Message" />
            <Button colorScheme="orange">Send Message</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
