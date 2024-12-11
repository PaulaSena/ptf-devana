import { motion } from "motion/react";
import { section } from "motion/react-client";

const Test = () => {
  return (
    <section
      style={{
        display: "flex",
        alingItems: "center",
        justifyContent: "center"
      }}
    >
      <motion.div
      initial={{x:0,y:-0, opacity:0}}
      animate={{x:0,y:-200, opacity:1}}
        style={{ width: 300, height: 300, background: "red" }}
      ></motion.div>
    </section>
  );
};

export default Test;
