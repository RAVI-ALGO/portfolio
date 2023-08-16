import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Mobile e-commerce Frontend(ReactJs)",
    description:
      "The application Mobile e-commerce frontend development involves creating the user interface and user experience for online shopping applications specifically designed for mobile devices.",
    link: "Learn more",
    links: "https://coffeee-mobile-ecommerce.netlify.app/",
  },

  {
    name: "Crypto Tracker ",
    description:
      "Developed a fully responsive Crypto Tracker which works on API to get all crypto tokens price,index,charts, volume etc.",
    link: "Learn more",
    links: "https://crypto-tracker464.netlify.app/",
  },
  {
    name: "Todo webApp",
    description:
      "Developed a fully responsive todo app in MERN stack with Redux and REST API allows users to add their daily tasks.",
    link: "Learn more",
    links: "https://todo-list-ugwp.onrender.com",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* TEXT & IMAGE */}
          <motion.div
            variants={fadeIn("", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              {" "}
              I'm an aspiring and Freelance Full-stack Developer
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* SERVICES*/}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/*SERVICES LISTS */}
            <div>
              {services.map((service, index) => {
                const { name, description, link, links } = service;
                return (
                  <div
                    key={index}
                    className="border-b border-white/20 h-[146px] mb-[38px] flex "
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 ">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight  ">
                        {description}
                      </p>
                      
                    
                      <a href={links} className="text-accent ">
                        Click for Live Project
                      </a>
                   
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[47px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href={links} className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
