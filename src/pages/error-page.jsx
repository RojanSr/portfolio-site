import { Box, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box
      id="error-page"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      h={"100vh"}
    >
      <Text fontSize={"xxx-large"} fontWeight={"bold"} mt={"-100px"}>
        Oops!
      </Text>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>
        <Text as={"i"}>{error.statusText || error.message}</Text>
      </Text>
    </Box>
  );
}
