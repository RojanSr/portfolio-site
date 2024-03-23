import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.jsx";
import { StepsProvider } from "react-step-builder";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <StepsProvider>
        <RouterProvider router={router} />
      </StepsProvider>
    </ChakraProvider>
  </React.StrictMode>
);
