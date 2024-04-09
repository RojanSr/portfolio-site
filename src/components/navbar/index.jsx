import { Box, ListItem, Text, UnorderedList, Link } from "@chakra-ui/react";
import { useState } from "react";

const NAVLIST = [
  { to: "#home", name: "Home" },
  { to: "#about", name: "About" },
  { to: "#resume", name: "Resume" },
  { to: "#skills", name: "Skills" },
  { to: "#projects", name: "Projects" },
  { to: "#my_blogs", name: "My Blogs" },
  { to: "#contact", name: "Contact" }
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  console.log("active", active);
  return (
    <Box
      as={"header"}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={9}
      backdropFilter={"blur(10px)"}
    >
      <Box
        as={"nav"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"1200px"}
        mx={"auto"}
        py={"15px"}
      >
        <Text
          as={"span"}
          textTransform={"uppercase"}
          fontWeight={"900"}
          fontSize={"24px"}
        >
          Ajay
        </Text>
        <UnorderedList display={"flex"}>
          {NAVLIST.map((el) => {
            return (
              <Link
                href={el.to}
                key={el.name}
                px={"20px"}
                position={"relative"}
                display={"inline-block"}
                _before={{
                  content: `""`,
                  width: "0",
                  height: "2px",
                  position: "absolute",
                  left: "50%",
                  backgroundColor: "#ffbd39",
                  transition: "all 0.3s ease-in-out",
                  bottom: "-4px"
                }}
                _after={{
                  content: `""`,
                  width: "0",
                  height: "2px",
                  position: "absolute",
                  right: "50%",
                  backgroundColor: "#ffbd39",
                  transition: "all 0.3s ease-in-out",
                  bottom: "-4px"
                }}
                _hover={{
                  "&::before, &::after": {
                    width: "50%"
                  }
                }}
                onClick={() => setActive(el.name.toLocaleLowerCase())}
              >
                <ListItem
                  listStyleType={"none"}
                  color={
                    active === el.name.toLocaleLowerCase() ? "#ffbd39" : "#fff"
                  }
                >
                  {el.name}
                </ListItem>
              </Link>
            );
          })}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Navbar;
