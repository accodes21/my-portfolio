import React, {useRef} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { introHeaderVariants } from '@/app/framer'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_el9fwpc', 'template_6kn0ocl', form.current, 'Rmu2c5afxXOLdi4H1')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
          console.log("error");
      });
  };
  return (
    <AnimatePresence>
    <motion.section id='contact' className='contact bg-[#000] p-32'>
        <motion.h1 initial='hide' whileInView='show' exit='hide' variants={...introHeaderVariants('left')} className='text-[#f1cf29] font-bold text-2xl'>CONTACT ME</motion.h1>
        <div className="contact-div container mt-4 md:mt-32 px-6 mx-auto lg:w-2/3">
            <div className='container text-slate-800 md:px-12 relative'>
                <div className='block rounded-xl mt-[-100px] bg-[#111] shadow-xl py-10 md:py-12 px-4 md:px-6'>
                    <div>
                        <motion.form ref={form} onSubmit={sendEmail} initial='hide' whileInView='show' exit='hide' variants={...introHeaderVariants('right')}>
                            <div className='mb-6'>
                                <input type="text" className='form-control block w-full px-3 py-1.5 text-base font-normal text-zinc-200 bg-slate-800 bg-clip-padding border border-solid border-zinc-500 rounded transition ease-in-out m-0 focus:text-zinc-200 focus:bg-slate-600 focus:border-yellow-500 focus:outline-none' id='user_name' name='user_name' placeholder='Name' required autoComplete='on' />
                            </div>
                            <div className='mb-6'>
                                <input type="email" className='form-control block w-full px-3 py-1.5 text-base font-normal text-zinc-200 bg-slate-800 bg-clip-padding border border-solid border-zinc-500 rounded transition ease-in-out m-0 focus:text-zinc-200 focus:bg-slate-600 focus:border-yellow-500 focus:outline-none' id='user_email' name='user_email' placeholder='Email' required autoComplete='on' />
                            </div>
                            <div className="mb-6">
                                <textarea name="message" className='form-control block w-full px-3 py-1.5 text-base font-normal text-zinc-200 bg-gray-800  bg-clip-padding border border-solid border-zinc-500 rounded transition ease-in-out m-0 focus:text-zinc-200 focus:bg-slate-600 focus:border-yellow-500 focus:outline-none' id="message" cols="30" rows="10" placeholder='Write a Message...' autoComplete='off' required></textarea>
                            </div>
                            <input type="submit" value="Send" className=" w-full px-6 py-2.5 bg-gray-600 rounded-md text-zinc-200 font-medium text-sm leading-snug uppercase shadow-md hover:bg-[#f1cf29] hover:text-[#222] hover:shadow-lg focus:shadow-lg focus:outline-none cursor-pointer focus:ring-0 active:bg-[#f1cf29] active:shadow-lg transition-all"/>
                        </motion.form>
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
    </AnimatePresence>
  )
}

export default Contact