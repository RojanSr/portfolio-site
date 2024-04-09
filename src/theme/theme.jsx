import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)"
};

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: `'Poppins', sans-serif`,
        scrollBehavior: "smooth"
      },
      a: {
        color: "teal.500"
      },
      "::selection": {
        background: "#333333",
        color: "#ffffff"
      },
      "::-moz-selection": {
        background: "#333333",
        color: "#ffffff"
      }
    }
  },
  colors: {
    white: {
      400: "#999999",
      500: "#f8f9fa",
      900: "#fff"
    },
    yellow: {
      800: "#ffbd39"
    },
    black: {
      900: "#000",
      400: "rgba(255, 255, 255, 0.1)"
    }
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top"
            }
          }
        }
      }
    }
  }
});

export default theme;
