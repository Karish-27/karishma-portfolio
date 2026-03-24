import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiFramer,
  SiNextdotjs,
  SiMongodb,
  SiGsap,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Tech Stack:",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          SiGsap,
          TbBrandThreejs,
          // FaWordpress,
          SiTypescript,
          SiExpress,
          SiMongodb,
          FaNodeJs,
          FaGitAlt
        ],
      },
     
    ],
  },
 
  {
    title: "experience",
    info: [
      {
        title: "Software Engineer 1 - Pardy Panda Studios",
        stage: "Dec 2023 - Present",
      },
      {
        title: "MERN Developer - Marwiz Tech Pvt. Ltd.",
        stage: "Sep 2023 - Nov 2023",
      },
      {
        title: "Software Developer - Collab Softech",
        stage: "Jul 2023 - Aug 2023",
      },
      {
        title: "Full-stack Developer - Pardy Panda Studios",
        stage: "Jan 2023 - Mar 2023",
      },
      {
        title: "Freelance Web Developer",
        stage: "Jan 2021 - Dec 2022",
      },
    ],
  },
 
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-primary/30 text-center xl:text-left xl:h-full">
      <Circles />

      <div className="container mx-auto flex flex-col items-center xl:flex-row xl:items-start gap-x-6 pt-[100px] pb-[100px] xl:pt-32 xl:pb-32 xl:h-full">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center xl:justify-start xl:pt-1">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[28px] md:text-[38px] leading-tight font-semibold mb-4"
          >
            Creative Developer Focused on {" "}
            <span className="text-accent">Performance,</span> Precision, <br />
            and Product Impact
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Full-Stack MERN Developer | Crafting Scalable Web Platforms & High-Performance Web Applications | 4+ Years Specializing in SaaS Development & Custom Web Solutions
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex gap-x-10">
              {/* experience */}
              <div className="relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 pr-10">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] xl:h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col gap-y-2 text-center xl:text-left text-white/60"
              >
                {/* title + stage on one line */}
                <div className="flex items-center gap-x-2 justify-center xl:justify-start">
                  <div className="font-light">{item.title}</div>
                  {item.stage && <><div>-</div><div>{item.stage}</div></>}
                </div>

                {/* icons on next line */}
                {item.icons && (
                  <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 justify-center xl:justify-start">
                      {item.icons.slice(0, 6).map((Icon, iconI) => (
                        <div key={iconI} className="text-2xl text-white">
                          <Icon />
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-x-4 justify-center xl:justify-start">
                      {item.icons.slice(6).map((Icon, iconI) => (
                        <div key={iconI} className="text-2xl text-white">
                          <Icon />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
