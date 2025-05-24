import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ResearchProblemAndSolution.css';

function ResearchProblemAndSolution() {
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
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const hoverEffect = {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  return (
    <div className='research_gap_con' ref={ref}>
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
          Research Problem & Solution
        </motion.p>
      </motion.div>

      <motion.div 
        className='research_gap_card_con'
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div 
          className='card_left'
          variants={itemVariants}
          whileHover={hoverEffect}
        >
          <motion.p 
            className='card_left_topic'
            variants={itemVariants}
          >
            Proposed Problem
          </motion.p>
          <motion.p 
            className='card_left_sub_topic'
            variants={itemVariants}
          >
            How can auditory learning be enhanced for individuals with Down syndrome using real-time interactive technology?
          </motion.p>
          <motion.p 
            className='card_left_pera'
            variants={itemVariants}
          >
            In Sri Lanka, approximately 1 in every 800 births is a child with Down syndrome, contributing to an estimated 15,000–20,000 individuals living with the condition across the country. Studies show that up to 70% of individuals with Down syndrome have moderate to severe hearing loss or auditory processing delays, which critically affect their speech development, comprehension, and learning capabilities.
          </motion.p>
        </div>

        <motion.div 
          className='card_oright'
          variants={itemVariants}
        >
          <motion.iframe 
            src="https://www.youtube.com/embed/QD_iIT9CeW8?si=VQeqvE-Z8osSGZZY" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen 
            className='iframe_card'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          <motion.p 
            className='figure_name'
            variants={itemVariants}
          >
            Product Demonstration - Solution
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
        className='solution_section'
      >
        <motion.p 
          className='card_left_topic'
          variants={itemVariants}
        >
          Proposed Solution
        </motion.p>
        <motion.p 
          className='card_left_pera'
          variants={itemVariants}
        >
          The proposed solution, Blooming Minds, is an adaptive, machine learning-driven e-learning platform specifically designed to support children with Down Syndrome (DS) by addressing their unique cognitive, linguistic, visual, and motor learning needs. Built upon the VARK (Visual, Auditory, Reading/Writing, Kinesthetic) learning theory, the platform offers personalized, multi-sensory learning activities that adapt in real-time to each child's learning style and progress. Utilizing advanced machine learning techniques such as Convolutional Neural Networks (CNN) for handwriting and speech recognition, Long Short-Term Memory (LSTM) for sequence prediction, Support Vector Machine (SVM) and Random Forest (RF) for performance modeling, and Reinforcement Learning (RL) for dynamic difficulty adjustment, Blooming Minds provides engaging and interactive modules tailored to the abilities of children with DS. The platform features nine interactive modules, real-time feedback, and comprehensive progress tracking dashboards for educators, parents, and caregivers, ensuring continuous monitoring and personalized interventions. By integrating multi-domain learning and leveraging real-world data from local and international sources, Blooming Minds offers a scientifically grounded and practical solution that enhances the learning experience and developmental outcomes for children with Down Syndrome in Sri Lanka and beyond.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default ResearchProblemAndSolution;