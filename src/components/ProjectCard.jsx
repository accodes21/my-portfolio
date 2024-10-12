import React from "react";
import Image from "next/image";
import { BsGithub, BsLink } from "react-icons/bs";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { introHeaderVariants, projectVariants } from "@/app/framer";
import Tilt from "react-parallax-tilt";

const ProjectCard = ({ title, image, link, githubLink, skills }) => {
  return (
    <AnimatePresence>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.25}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        transitionSpeed={1000}
        scale={1.05}
        transitionEasing="cubic-bezier(0.19, 1.0, 0.22, 1.0)"
        glareBorderRadius="1.25rem"
      >
        <motion.div
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={projectVariants}
          className="card m-4 rounded-xl"
        >
          <div className="content h-full w-full rounded-xl md:rounded-3xl">
            <Image
              src={`/${image}`}
              alt={title}
              width={1000}
              height={500}
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="thumbnail rounded-xl md:rounded-3xl"
            />
            <div className="faded">
              <div className="title flex md:flex-row flex-col gap-2">
                <Link
                  className="link"
                  target="_blank"
                  href={`https://github.com/accodes21/${githubLink}`}
                >
                  <BsGithub />
                </Link>
                <Link className="link" target="_blank" href={`${link}`}>
                  <BsLink />
                </Link>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-3">{title}</h2>
          <div className="mt-3 mb-6">
            <p className="text-small italic">{skills}</p>
          </div>
        </motion.div>
      </Tilt>
    </AnimatePresence>
  );
};

export default ProjectCard;
