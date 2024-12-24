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
            1000,
            "Custom-made websites to make your business stand out.",
            //"Websites feitos sob medida para destacar o seu negócio.",
            1000,
            "Are you looking for a creative and functional website? Let's bring your vision to the web!"
            //"Está procurando um site criativo e funcional? Vamos trazer sua visão para a web!"
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={20}
          //style={{ fontSize: "1.2em", display: "inline-block" }}
          //omitDeletionAnimation
          repeat={Infinity}
        />
      </div>

      <img src="/pedro-2.png" color="rgb(247, 131, 73);" alt="" width={55} />
    </motion.div>
  );
};

export default Speech;
