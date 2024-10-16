import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { introHeaderVariants } from "@/app/framer";
import emailjs from "@emailjs/browser";
import P5Project from "@/components/P5";

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log("error");
        }
      );

    setSubmitted(true);
  };
  return (
    <AnimatePresence>
      <motion.section id="contact" className="contact bg-[#000] p-32">
        <motion.div
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={introHeaderVariants("left")}
        >
          <h1 className="text-[#f1cf29] font-scotch font-bold text-3xl mb-2">
            CONTACT ME
          </h1>
          <h1 className="font-lora text-xl mb-6">
            Let's collaborate and make creative products.
          </h1>
        </motion.div>
        <div className="flex flex-col justify-center items-center md:flex-row gap-4">
          <motion.div
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={introHeaderVariants("left")}
          >
            <P5Project />
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={introHeaderVariants("right")}
            className="contact-div container mt-4 md:mt-32 px-6 mx-auto lg:w-2/3"
          >
            <div className="container text-slate-800 md:px-12 relative">
              <div className="block rounded-xl mt-[-100px] bg-[#111] border border-solid border-[#f1cf29]/60  py-10 md:py-12 px-4 md:px-6">
                <div>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-zinc-200 bg-slate-800 bg-clip-padding border border-solid border-zinc-500 rounded transition ease-in-out m-0 focus:text-zinc-200 focus:border-yellow-500 focus:outline-none"
                        id="user_name"
                        name="user_name"
                        placeholder="What is your Name?"
                        required
                        autoComplete="on"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="email"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-zinc-200 bg-slate-800 bg-clip-padding border border-solid border-zinc-500 rounded transition ease-in-out m-0 focus:text-zinc-200 focus:border-yellow-500 focus:outline-none"
                        id="user_email"
                        name="user_email"
                        placeholder="What is your Email?"
                        required
                        autoComplete="on"
                      />
                    </div>
                    <div className="mb-6">
                      <textarea
                        name="message"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-zinc-200 bg-gray-800 bg-clip-padding border border-solid border-zinc-500 rounded transition ease-in-out m-0 focus:text-zinc-200 focus:border-yellow-500 focus:outline-none"
                        id="message"
                        cols="8"
                        rows="6"
                        placeholder="Write a Message..."
                        autoComplete="off"
                        required
                      ></textarea>
                    </div>
                    <motion.input
                      type="submit"
                      value={submitted ? "Thank You" : "Send"}
                      disabled={submitted}
                      className="font-lora w-auto px-6 py-2.5 bg-gray-800 rounded-md text-zinc-200 font-semibold text-sm leading-snug uppercase shadow-md border border-solid border-zinc-500 hover:bg-[#f1cf29] hover:text-[#222] hover:border-transparent hover:shadow-lg focus:shadow-lg focus:outline-none cursor-pointer focus:ring-0 active:bg-[#f1cf29] active:shadow-lg transition-all"
                      whileTap={{ scale: 0.7 }}
                      transition={{ type: "spring", stiffness: 50, damping: 6 }}
                    />
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Contact;
