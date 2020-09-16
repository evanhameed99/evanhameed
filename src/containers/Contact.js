import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
const Contact = () => {
  const pageVariant = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: '20vh',
    },
  };
  const pageTransition = {
    duration: 1,
    ease: 'easeOut',
  };
  const pageVariant2 = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: '20vh',
    },
  };
  const pageTransition2 = {
    duration: 1,
    ease: 'easeOut',
  };
  const [showAlert, setShowAlert] = useState(false);
  const [name, setName] = useState('');
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_vhkzrek',
        e.target,
        'user_1YwCqzQCHCHdjaPlCKCJO'
      )
      .then(
        (result) => {
          setShowAlert(true);
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <motion.div
      exit='out'
      animate='in'
      initial='out'
      variants={pageVariant}
      transition={pageTransition}
      className='relative mx-auto flex flex-col items-center '
    >
      {showAlert ? (
        <motion.div
          class='  bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'
          role='alert'
          exit='out'
          animate='in'
          initial='out'
          variants={pageVariant}
          transition={pageTransition}
        >
          <p class='font-bold'>Email Has been sent successfully!</p>
          <p class='text-sm'>
            Thank you for contacting us. We will reach out to you as soon as
            possible
          </p>
        </motion.div>
      ) : null}
      <br />
      <br />
      <br />
      <form onSubmit={sendEmail} className='md:w-3/6 w-11/12'>
        <label class='block my-4'>
          <span class='text-secondary font-medium'>Name</span>
          <input
            autoComplete='off'
            class='form-input mt-1 block w-full'
            placeholder='Jane Doe'
            value={name}
            onChange={(e) => setName(e.target.value)}
            name='name'
            required
          />
        </label>
        <label class='block my-4'>
          <span class='text-secondary font-medium'>Your email</span>
          <input
            type='email'
            autoComplete='off'
            class='form-input mt-1 block w-full'
            placeholder='john@example.com'
            name='email'
            required
          />
        </label>
        <label class='block my-4'>
          <span class='text-secondary font-medium'>Message</span>
          <textarea
            class='form-textarea mt-1 block w-full'
            autoComplete='off'
            rows='3'
            placeholder='Enter some long form content.'
            name='message'
            required
          ></textarea>
        </label>
        <button className='hover:bg-white hover:text-secondary transition-all duration-200 ease-in-out ml-2 font-body text-white font-bold bg-secondary px-2 py-2  shadow-md'>
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
