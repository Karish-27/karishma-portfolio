import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiArrowDownTray, HiEye } from "react-icons/hi2";

import { fadeIn } from "../../variants";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Karish-27",
    Icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/karishma-kumavat-480891241",
    Icon: FaLinkedinIn,
    external: true,
  },
  {
    label: "Mail Me",
    href: "mailto:karishmakumavat27@gmail.com",
    Icon: HiOutlineMail,
    external: false,
  },
];

const Contact = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="bg-primary/30 xl:h-full">
      <div className="container mx-auto pt-[100px] pb-[100px] xl:py-32 text-center xl:text-left flex items-center justify-center xl:h-full">
        <div className="flex flex-col w-full max-w-[700px] items-center">
          {/* heading */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-4"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-white/60 text-center mb-12 max-w-[400px]"
          >
            Feel free to reach out via any of the platforms below.
          </motion.p>

          {/* icons grid */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-2 gap-6 w-full max-w-[400px]"
          >
            {contactLinks.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer noopener" : undefined}
                className="flex flex-col items-center gap-y-3 p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-accent hover:text-accent transition-all duration-300 group"
              >
                <Icon className="text-4xl group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm uppercase tracking-widest font-medium">
                  {label}
                </span>
              </a>
            ))}

            {/* Resume card */}
            <div className="relative">
              <button
                onClick={() => setResumeOpen((prev) => !prev)}
                className="w-full flex flex-col items-center gap-y-3 p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-accent hover:text-accent transition-all duration-300 group"
              >
                <HiArrowDownTray className="text-4xl group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm uppercase tracking-widest font-medium">
                  Resume
                </span>
              </button>

              <AnimatePresence>
                {resumeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-0 right-0 flex flex-col gap-y-2 z-10"
                  >
                    <a
                      href="/karishma_kumavat.pdf"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-center gap-x-2 py-3 px-4 rounded-xl border border-white/10 bg-white/10 hover:border-accent hover:text-accent transition-all duration-300 text-sm font-medium"
                      onClick={() => setResumeOpen(false)}
                    >
                      <HiEye className="text-lg" />
                      View
                    </a>
                    <a
                      href="/resume.pdf"
                      download="Karishma_Kumavat_Resume.pdf"
                      className="flex items-center justify-center gap-x-2 py-3 px-4 rounded-xl border border-white/10 bg-white/10 hover:border-accent hover:text-accent transition-all duration-300 text-sm font-medium"
                      onClick={() => setResumeOpen(false)}
                    >
                      <HiArrowDownTray className="text-lg" />
                      Download
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
