import { Button } from "@chakra-ui/react";
import React from "react";

const PrimaryButton = ({ text, onClick }) => {
  return (
    <Button
      px={"1.5rem"}
      py={"1rem"}
      onClick={onClick}
      bg={"#ffbd39"}
      borderRadius={"50px"}
      color={"#000"}
      fontSize={"12px"}
      letterSpacing={"2px"}
      fontWeight={"bold"}
      transition={"transform 0.2s ease-in-out"}
      _hover={{
        backgroundColor: "#e5aa33",
      }}
      _active={{
        transform: "scale(0.95)",
      }}
    >
      {text}
    </Button>
  );
};
const SecondaryButton = ({ text, onClick }) => {
  return (
    <Button
      onClick={onClick}
      px={"1.5rem"}
      py={"1rem"}
      bg={"transparent"}
      borderRadius={"50px"}
      color={"#fff"}
      fontSize={"12px"}
      letterSpacing={"2px"}
      fontWeight={"bold"}
      border={"1px solid rgba(255, 255, 255, 0.5)"}
      transition={"transform 0.2s ease-in-out"}
      _hover={{
        backgroundColor: "rgba(255, 255, 255, 0.08)",
      }}
      _active={{
        transform: "scale(0.95)",
      }}
    >
      {text}
    </Button>
  );
};

export { PrimaryButton, SecondaryButton };
