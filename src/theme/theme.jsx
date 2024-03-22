import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

const theme = {
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: `'Poppins', sans-serif`,
        scrollBehavior: "smooth",
      },
      a: {
        color: "teal.500",
      },
      "::selection": {
        background: "#333333",
        color: "#ffffff",
      },
      "::-moz-selection": {
        background: "#333333",
        color: "#ffffff",
      },
    },
  },
};

export default theme;
