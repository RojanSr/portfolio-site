import { Text } from "@chakra-ui/react";

const FadebackText = ({ text, fadeback, center = false, style }) => {
  const contentText = "'" + fadeback + "'";
  return (
    <Text
      as={"span"}
      fontSize={"3.1rem"}
      fontWeight={"bolder"}
      position={"relative"}
      _before={{
        content: contentText,
        position: "absolute",
        fontSize: "7vw",
        fontWeight: "900",
        color: "rgba(255, 255, 255, 0.1)",
        top: "-5px",
        left: center ? "50%" : "-15px",
        transform: center ? "translateX(-50%)" : "translateX(0)"
      }}
      mb={"10px"}
      {...style}
    >
      {text}
    </Text>
  );
};

export default FadebackText;
