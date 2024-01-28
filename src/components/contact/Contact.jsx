import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

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
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_94y20xo",
        "template_v10u2oh",
        formRef.current,
        "pX_2hasGmGcuvjXIW"
      )
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact bg-[#013550]"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      
       <motion.div className="textContainer lg:ml-20 ml-0" variants={variants} initial="hidden" animate="visible">
      <motion.h1 variants={variants} className="lg:mb-10 mb-0 mt-0">Get in touch with me</motion.h1>

      <motion.div className="item text-2xl font-bold" variants={variants}>
        <h2>Email</h2>
        <span>evanahmedfahad@gmail.com</span>
      </motion.div>

      <motion.div className="item text-2xl font-bold" variants={variants}>
        <h2>Address</h2>
        <span>Khilkhet, Dhaka</span>
      </motion.div>

      <motion.div className="item text-2xl font-bold" variants={variants}>
        <h2>Phone</h2>
        <span>01761402081</span>
      </motion.div>
      <div className="flex gap-4">
      <a href="https://www.facebook.com/md.fahadkhan.9889/">
  <img className ='hover:scale-105'src="/face.png" alt="" width={32} height={32} />
</a>
<a href="https://www.instagram.com/evanahmedfahad8">
  <img className ='hover:scale-105' src="/instragram.jpeg" alt="" width={32} height={32} />
</a>
<a href="https://www.linkedin.com/in/md-fahad-khan/">
  <img className ='hover:scale-105' src="/linkedin.png" alt="" width={32} height={32} />
</a>
<a href="https://www.facebook.com">
  <img className ='hover:scale-105' src="/youtube.png" alt="" width={32} height={32} />
</a>

        </div>
    </motion.div>
      <div className="formContainer lg:mr-20 mr-0">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay:1, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={4} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
