import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './ContactUs.css';

function ContactUs() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const hoverEffect = {
    y: -3,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  return (
    <div className='sub_container' ref={ref}>
    <div className='research_gap_con' >
      <motion.div
        className='subCom_topic'
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.p
          className='sub_topic'
          variants={itemVariants}
        >
          Get in Touch
        </motion.p>
      </motion.div>

      <div className='contact_content'>
        <motion.div
          className='contact_form_container'
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.form
            className='contact_form'
            variants={itemVariants}
          >
            <motion.div
              className='form_group'
              variants={itemVariants}
            >
              <input type="text" id="name" placeholder=" " required />
              <label htmlFor="name">Your Name</label>
            </motion.div>

            <motion.div
              className='form_group'
              variants={itemVariants}
            >
              <input type="email" id="email" placeholder=" " required />
              <label htmlFor="email">Email Address</label>
            </motion.div>

            <motion.div
              className='form_group'
              variants={itemVariants}
            >
              <input type="text" id="subject" placeholder=" " required />
              <label htmlFor="subject">Subject</label>
            </motion.div>

            <motion.div
              className='form_group'
              variants={itemVariants}
            >
              <textarea id="message" placeholder=" " rows="4" required></textarea>
              <label htmlFor="message">Your Message</label>
            </motion.div>

            <motion.button
              type="submit"
              className='submit_btn'
              variants={itemVariants}
              whileHover={hoverEffect}
            >
              Send Message <FaPaperPlane className='btn_icon' />
            </motion.button>
          </motion.form>
        </motion.div>

        <motion.div
          className='contact_info_container'
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className='contact_info_card'
            variants={itemVariants}
            whileHover={hoverEffect}
          >
            <h3 className='info_title'>Contact Details</h3>
            <p className='info_text'>
              For further queries please reach us at:
            </p>

            <div className='contact_item'>
              <FaEnvelope className='contact_icon' />
              <a href="mailto:bloomingminds@gmail.com" className='contact_link'>
                bloomingminds@gmail.com
              </a>
            </div>

            <div className='contact_item'>
              <FaPhone className='contact_icon' />
              <span>+94 76 123 4567</span>
            </div>

            <div className='contact_item'>
              <FaMapMarkerAlt className='contact_icon' />
              <span>Sri Lanka Institute of Information Technology</span>
            </div>

            <p className='info_footer'>
              Hope this project helped you in some manner. Thank you!
              <br />
              -Team BloomingMinds
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </div>
  )
}

export default ContactUs;