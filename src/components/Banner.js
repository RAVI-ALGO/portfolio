import React from "react";
import { FaGithub } from "react-icons/fa";
import lap1 from "../assets/lap1.png";
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex-col flex gap-y-8 lg:flex-row items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[100px]"
            >
              RAVINDRA <span>KUSHWAHA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Coder", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Web development is a dynamic and constantly evolving field that involves creating, building, and maintaining websites. It encompasses a range of skills, including front-end development, back-end development, and database management. Front-end development focuses on the user interface and user experience, utilizing HTML, CSS, and JavaScript to create visually appealing and interactive websites. Back-end development involves server-side programming and database management, enabling websites to handle data, process user requests, and interact with databases. 
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
             <Link to="contact">
                <button className="btn btn-lg">Contact Me</button>
              </Link>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/*SOCIALS */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:max-0"
            >
              <a href="https://github.com/RAVI-ALGO">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/ravindra-kushwaha-b87a211a2/">
                <BsLinkedin />
              </a>
              <a href="https://www.instagram.com/rkkushwaha3650/">
                <BsInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100008548654854">
                <BsFacebook />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={lap1} className="h-[450px] w-[450px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
