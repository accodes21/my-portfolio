import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { introHeaderVariants } from "@/app/framer";
import experiences from "@/data/experiences";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

function PortfolioExperience() {
  const [selectedExp, setSelectedExp] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <AnimatePresence>
      <motion.hr
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={introHeaderVariants("left")}
        className="lg:h-px h-[1.8px] border-t-0 bg-gradient-to-r from-transparent via-[#f1cf29] to-transparent opacity-100"
      />
      <motion.section
        id="experience"
        className="min-h-screen bg-gradient-to-br from-[#111] to-black text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-20 pb-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          ></motion.div>
          <h2 className="about-head text-[#f1cf29] text-3xl font-scotch font-bold">
            EXPERIENCE
          </h2>
          <h3 className="font-lora text-xl mb-6">
            Building impactful solutions, one line of code at a time
          </h3>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 pb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row gap-12"
          >
            {/* Left: Experience Cards */}
            <motion.div
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={introHeaderVariants("left")}
              className="lg:w-2/5"
            >
              <div className="sticky top-8 space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    onClick={() => {
                      setSelectedExp(index);
                      setSelectedImage(0);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 ${
                      selectedExp === index
                        ? "border-[#f1cf29] bg-gradient-to-br from-[#f1cf29]/10 to-transparent shadow-lg shadow-[#f1cf29]/20"
                        : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        exp.type === "Full Time"
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      }`}
                    >
                      {exp.type}
                    </span>

                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <div className="flex items-center">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[#f1cf29] hover:underline text-lg font-semibold inline-flex items-center gap-2"
                      >
                        {exp.company}
                        <span className="text-sm">→</span>
                      </a>
                      <p className="text-gray-400 text-sm ms-2">{exp.period}</p>
                    </div>

                    <div className="space-y-2">
                      {exp.highlights.slice(0, 2).map((highlight, hIndex) => (
                        <div
                          key={hIndex}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <span className="text-[#f1cf29] mt-1">▹</span>
                          <span className="line-clamp-2">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-700">
                      <span className="text-xs text-gray-400">
                        {exp.images.length} project showcase
                        {exp.images.length > 1 ? "s" : ""}
                      </span>
                      <div className="flex gap-1">
                        {exp.images.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              selectedExp === index &&
                              selectedImage === imgIndex
                                ? "w-6 bg-[#f1cf29]"
                                : "w-1.5 bg-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Interactive Work Showcase */}
            <motion.div
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={introHeaderVariants("right")}
              className="lg:w-3/5"
            >
              <div className="bg-zinc-950 rounded-2xl p-2 md:p-8 border border-gray-700">
                <div className="hidden md:block mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#f1cf29] rounded-full animate-pulse" />
                    Click each milestone to explore:
                  </h3>
                  <div className="space-y-2">
                    {experiences[selectedExp].images.map((img, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                          selectedImage === index
                            ? "bg-[#f1cf29]/10 border-l-4 border-[#f1cf29]"
                            : "bg-gray-800/50 border-l-4 border-transparent hover:bg-gray-700/50"
                        }`}
                      >
                        <div className="flex-1">
                          <div
                            className={`font-semibold ${
                              selectedImage === index
                                ? "text-white"
                                : "text-gray-300"
                            }`}
                          >
                            {img.title}
                          </div>
                          <AnimatePresence>
                            {selectedImage === index && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-sm text-gray-400 mt-1"
                              >
                                {img.description}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedExp}-${selectedImage}`}
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="relative"
                  >
                    <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden">
                      <img
                        src={
                          experiences[selectedExp].images[selectedImage].image
                        }
                        alt={
                          experiences[selectedExp].images[selectedImage].title
                        }
                        className="w-full h-full object-cover"
                        onClick={() =>
                          setSelectedImage((prev) =>
                            prev < experiences[selectedExp].images.length - 1
                              ? prev + 1
                              : 0
                          )
                        }
                      />

                      <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                        <h4 className="text-xl font-bold text-[#f1cf29] mb-2">
                          {experiences[selectedExp].images[selectedImage].title}
                        </h4>
                        <p className="text-sm text-gray-300">
                          {
                            experiences[selectedExp].images[selectedImage]
                              .description
                          }
                        </p>
                      </div>
                    </div>

                    <div className="flex md:hidden gap-4 mt-4">
                      <button
                        onClick={() =>
                          setSelectedImage((prev) =>
                            prev > 0
                              ? prev - 1
                              : experiences[selectedExp].images.length - 1
                          )
                        }
                        className="cursor-pointer bg-gray-400 bg-opacity-50 z-20 p-2 rounded-[8px] flex items-center justify-center"
                      >
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 12.5H5"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M12 19.5L5 12.5L12 5.5"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <button
                        onClick={() =>
                          setSelectedImage((prev) =>
                            prev < experiences[selectedExp].images.length - 1
                              ? prev + 1
                              : 0
                          )
                        }
                        className="cursor-pointer bg-gray-400 bg-opacity-50 z-20 p-2 rounded-[8px] flex items-center justify-center"
                      >
                        <svg
                          class="transform rotate-180"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 12.5H5"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M12 19.5L5 12.5L12 5.5"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>

                    <div className="md:hidden mt-4 p-2 rounded-lg">
                      <h4 className="text-xl font-bold text-[#f1cf29] mb-2">
                        {experiences[selectedExp].images[selectedImage].title}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {
                          experiences[selectedExp].images[selectedImage]
                            .description
                        }
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 space-y-3 bg-gray-900/50 rounded-lg p-2 md:p-6 border-none md:border border-gray-700">
                  <h4 className="font-semibold text-[#f1cf29] mb-3">
                    Key Achievements
                  </h4>
                  {experiences[selectedExp].highlights.map(
                    (highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-[#f1cf29] mt-1 text-lg">▹</span>
                        <span>{highlight}</span>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.hr
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={introHeaderVariants("left")}
          className="lg:h-px h-[1.8px] border-t-0 bg-gradient-to-r from-black via-[#f1cf29] to-black opacity-100"
        />
      </motion.section>
    </AnimatePresence>
  );
}

export default PortfolioExperience;
