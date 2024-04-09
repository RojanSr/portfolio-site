import { Box, Text, Image, Button, Textarea, Center } from "@chakra-ui/react";
import profileImg from "../../assets/profile.png";
import FadebackText from "../../components/common/FadebackText/FadebackText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignsPost,
  faPhone,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import InputField from "../../components/common/InputField/InputField";
import emailjs from "@emailjs/browser";

const CONTACT_INFO = {
  address: {
    value: "198 West 21th Street, Suite 721 New York NY 10016",
    icon: <FontAwesomeIcon icon={faSignsPost} />
  },
  contact_number: {
    value: "+ 1235 2355 98",
    icon: <FontAwesomeIcon icon={faPhone} />
  },
  email_address: {
    value: "info@yoursite.com",
    icon: <FontAwesomeIcon icon={faPaperPlane} />
  }
};

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_ceqtec9",
      "template_qynl3dm",
      e.target,
      "34OyMZHvHFFbKJ0W9"
    );
  };
  return (
    <Box
      id="contact"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"inherit"}
      mb={"100px"}
      pt={"50px"}
    >
      <FadebackText text={"Contact Me"} fadeback={"Contact"} center />

      <Text color={"white.400"}>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </Text>

      <Box display={"flex"} gap={"90px"} mt={"100px"} justifyContent={"center"}>
        {Object.keys(CONTACT_INFO).map((key) => {
          return (
            <Box
              key={key}
              w={"255px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={"20px"}
            >
              <Center
                p={"12px"}
                bg={"black.400"}
                height={"100px"}
                width={"100px"}
                borderRadius={"50%"}
                color={"yellow.800"}
                fontSize={"30px"}
              >
                {CONTACT_INFO[key].icon}
              </Center>
              <Text
                textTransform={"uppercase"}
                fontSize={"17px"}
                fontWeight={"500"}
              >
                {key.replaceAll("_", " ")}
              </Text>
              <Text color={"white.400"} textAlign={"center"}>
                {CONTACT_INFO[key].value}
              </Text>
            </Box>
          );
        })}
      </Box>

      <Box display={"flex"} my={"60px"} h={"640px"}>
        <Box mb={"10px"} bg={"black.400"} h={"inherit"} w={"100%"}>
          <Image
            h={"inherit"}
            objectFit={"contain"}
            src={profileImg}
            alt="Profile Picture"
            mb={5}
            borderRadius={"40%"}
          />
        </Box>
        <form
          style={{
            background: "white",
            padding: "45px",
            height: "inherit",
            color: "#36454F",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%"
          }}
          onSubmit={sendEmail}
        >
          <InputField name={"name"} type="text" label={"Your Name"} />
          <InputField name={"email"} type="email" label={"Your Email"} />
          <InputField name={"subject"} type="text" label={"Subject"} />
          <Textarea
            name="message"
            variant="outline"
            placeholder="Your Message"
            my={"12px"}
            minH={"200px"}
            _placeholder={{
              opacity: 1
            }}
          />
          {/* <InputField label={"Your Name"} />
          <Input
            variant="outline"
            placeholder="Your Email"
            size="md"
            border={"1px solid #ced4da"}
            _placeholder={{
              color: "gray.500",
            }}
            my={"12px"}
          />
          <Input
            variant="outline"
            placeholder="Subject"
            size="md"
            border={"1px solid #ced4da"}
            _placeholder={{
              color: "gray.500",
            }}
          />
          <Textarea
            variant="outline"
            placeholder="Your Message"
            my={"12px"}
            minH={"200px"}
          /> */}
          <Button bg={"yellow.800"} type="submit">
            Send Message
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
