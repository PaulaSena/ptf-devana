import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 4 }}
      className="bubbleContainer"
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "We produce food for Hamsters",
            1000,
            "We produce food for Guinea Pigs"
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={20}
          //style={{ fontSize: "1.2em", display: "inline-block" }}
          //omitDeletionAnimation
          repeat={Infinity}
        />
      </div>

      <img src="/pedro-2.png" alt="" width={55} />
    </motion.div>
  );
};

export default Speech;
