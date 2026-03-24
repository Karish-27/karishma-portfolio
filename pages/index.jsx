import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="h-full">
      {/* text */}
      <div className="w-full xl:h-full">
        <div className="text-center flex flex-col justify-center xl:justify-start xl:pt-40 xl:text-left min-h-full xl:h-full container mx-auto pt-[90px] pb-[120px] xl:pt-0 xl:pb-0">
          {/* title */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-6"
          >
            <h1 className="text-[42px] md:text-[64px] xl:text-[76px] font-bold uppercase leading-none tracking-tight">
              Karishma
            </h1>
            <h1 className="text-[28px] md:text-[44px] xl:text-[52px] font-semibold uppercase leading-none tracking-tight mt-1">
              Kumavat
            </h1>
            {/* divider line */}
            <div className="w-1/2 h-[1px] bg-white/20 my-5 mx-auto xl:mx-0" />
            {/* subtitle */}
            <div className="flex flex-col gap-[6px]">
              <span className="text-accent text-xs md:text-sm uppercase tracking-[3px] font-medium">
                A Creative
              </span>
              <span className="text-white text-base md:text-lg uppercase tracking-[2px] font-bold">
                Web Developer
              </span>
            </div>
          </motion.div>

          {/* mobile: btn + avatar stacked */}
          <div className="flex xl:hidden flex-col items-center gap-6">
            <div className="relative">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full max-w-[320px] h-[420px]"
            >
              <Avatar />
            </motion.div>
          </div>

          {/* desktop btn */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex justify-start mt-auto xl:mb-10"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* desktop: particles + avatar absolutely positioned */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0 hidden xl:block">
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>

      {/* mobile particles (behind everything) */}
      <div className="xl:hidden absolute inset-0 pointer-events-none">
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
