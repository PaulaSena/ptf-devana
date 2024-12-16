import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import Shape from "./Shape";

import { motion } from "motion/react";
import { Suspense } from "react";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.2
    }
  }
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 0.2
    }
  }
};

const certificateVariants = {
  initial: {
    y: -100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 0.2
    }
  }
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* title */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="hTitle"
        >
          Hey There
          <br />
          <span>I'm Ana Paula!</span>
        </motion.h1>

        {/* networks or awards */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}> Top Rated Designer </motion.h2>
          <motion.p variants={awardVariants}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus.{" "}
          </motion.p>
          <motion.div variants={awardVariants} className="awardList">
            <motion.img
              variants={awardVariants}
              src="/public/award1.png"
              alt=""
            />
            <motion.img
              variants={awardVariants}
              src="/public/award2.png"
              alt=""
            />
            <motion.img
              variants={awardVariants}
              src="/public/award3.png"
              alt=""
            />
          </motion.div>
        </motion.div>

        {/* Scroll Svg */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              d="M12 5v8"
              stroke="white"
              strokeWidth="1"
              stketLinecap="round"
            />
          </svg>
        </motion.a>
      </div>

      <div className="hSection right">
        {/* Follow */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="/">
            <img src="/public/instagram.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/public/facebook.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/public/youtube.png" alt="" />
          </motion.a>
          <motion.div className="followTextContainer">
            <div className="followText"> Follow Me </div>
          </motion.div>
        </motion.div>

        {/* Bubble */}
        <Speech />

        {/* Certificate*/}
        <motion.div
          variants={certificateVariants}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2 }}
          className="certificate"
        >
          <motion.img
            src="/public/baja-california-2.png"
            alt="certificado intercâmbio"
          />
          CERTIFICADO DE INTERCAMBIO DE INMERSIÓN EN EL IDIOMA ESPAÑOL
        </motion.div>

        {/* CONTACT BUTTON */}
        <motion.a
          href="/#contact"
          // variants={contactLinkVariants}
          animate={{
            x: [200, 0],
            opacity: [0, 1]
          }}
          transition={{ duration: 2 }}
          className="contactLink"
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/public/Ricc2a.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
