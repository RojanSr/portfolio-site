import { Box, Grid, GridItem, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import profileImg from "../../assets/profile.png";
import { PrimaryButton } from "../../components/button";
import pdfFile from "../../assets/pdf/frontend_developer_rojan_rai.pdf";
import { debounce } from "lodash";
import Counter from "react-number-increment";

const MY_INFO = {
  name: "Ajay Pudasaini",
  date_of_birth: "January 01, 1987",
  address: "San Francisco CA 97987 USA",
  zip_code: "1000",
  email: "ajaypudasaini.gmail.com",
  phone: "+1-2234-5678-9-0",
};

// Create function for file download
const downloadFile = (fileName) => {
  const link = document.createElement("a");
  link.href = pdfFile;
  link.download = fileName;
  link.click();
  link.remove();
};

const handleDownloadCV = debounce(() => {
  downloadFile("rojan_rai_frontend_dev_portfolio");
}, 500); // 500ms of debouncing

const About = () => {
  return (
    <Box id="about" display={"flex"} gap={"90px"}>
      <Box h={"640px"} mb={"10px"}>
        <Image
          h={"inherit"}
          src={profileImg}
          alt="Profile Picture"
          mb={5}
          borderRadius={"40%"}
        />
      </Box>
      <Box maxW={"500px"}>
        <Text
          fontSize={"3.1rem"}
          fontWeight={"bolder"}
          position={"relative"}
          _before={{
            content: '"About"',
            position: "absolute",
            fontSize: "7vw",
            fontWeight: "900",
            color: "rgba(255, 255, 255, 0.1)",
            top: "-5px",
            left: "-15px",
          }}
        >
          About Me
        </Text>
        <Text color={"#999999"} fontSize={"16px"} py={"18px"}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual.
        </Text>
        <Grid
          gridTemplateColumns={"repeat(2, 1fr)"}
          fontSize={"16px"}
          rowGap={"16px"}
          my={"22px"}
          maxW={"340px"}
        >
          {Object.keys(MY_INFO).map((info) => {
            return (
              <>
                <GridItem textTransform={"capitalize"} fontWeight={"600"}>
                  {info.replaceAll("_", " ")}:
                </GridItem>
                <GridItem color={"#999999"}>{MY_INFO[info]}</GridItem>
              </>
            );
          })}
        </Grid>
        <Box
          display={"flex"}
          gap={"6px"}
          alignItems={"center"}
          fontSize={"18px"}
          my={"10px"}
        >
          <Counter
            start={0} // starting
            end={20} // ends
            speed={0.6} // 100ms
            increment // in case if you want to decrement
            style={{ fontWeight: 700 }} // add custom style
            threshold={1} // viewport 1=100%,
            child="+" // add childs ie + , - , *
            offset={1} // increments by 5
            seperate="," // seperates number in comma
          />
          <Text as={"span"}>Personal Projects Completed</Text>
        </Box>

        <PrimaryButton text={"DOWNLOAD CV"} onClick={handleDownloadCV} />
      </Box>
    </Box>
  );
};

export default About;
