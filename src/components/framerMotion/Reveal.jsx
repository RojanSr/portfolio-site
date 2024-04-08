import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Box } from "@chakra-ui/react";

const Reveal = ({ children, width = "inherit", revealAmount = 0.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: revealAmount
  });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Fire the animation
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <Box ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default Reveal;
