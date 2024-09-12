import "./Contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";


const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error,setError] = useState(false)
  const [success,setSuccess] = useState(false)

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k6pvzi8', '__ejs-test-mail-service__', formRef.current, {
        publicKey: 'Eg9hzYHesoD2NllGe' ,
      })
      .then((result) => {
          setSuccess(true)
        }, (error) => {
          setError(true)
        });
  };
  
  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate" // Correct usage
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item">
          <h2>Mail</h2>
          <span>dushimemethucella03@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Kacyiru street Kigali</span>
        </motion.div>
        <motion.div className="item">
          <h2>Phone</h2>
          <span>+250 784 728 508</span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-phone-call"
            width="100"
            height="100"
          >
            <path
              d="M15.05 5a5 5 0 0 1 3.94 3.94m1.43 4.09a2 2 0 
                0 1-2.18 1.62 13.05 13.05 0 0 1-5.75-2.32 13 13 0 0 1
                -4.8-4.8 13.05 13.05 0 0 1-2.32-5.75A2 2 0 0 1 4.93 
                2.59l2.67-.45a2 2 0 0 1 2.3 1.28L10.66 6a2 2 0 0 1-.42 
                2.18L8.88 9.88a16 16 0 0 0 7.24 7.24l1.71-1.36a2 2 0 0
                1 2.18-.42l2.58.65a2 2 0 0 1 1.28 2.3l-.45 2.67z"
            />
          </svg>
        </motion.div>

        <motion.form
        ref={formRef}
        onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
