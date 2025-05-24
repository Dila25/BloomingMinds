import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ResearchObjectives.css';

function ResearchObjectives() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverEffect = {
    y: -5,
    boxShadow: "0 10px 25px rgba(43, 105, 178, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  const objectives = [
    {
      topic: "Investigate learning challenges and VARK strategies",
      pera: "To investigate the unique cognitive, linguistic, visual, and motor learning challenges faced by children with Down Syndrome and identify effective educational strategies based on the VARK learning theory."
    },
    {
      topic: "Design adaptive e-learning platform",
      pera: "To design and develop an adaptive e-learning platform that customizes content and activities according to the individual learning styles and progress of children with Down Syndrome."
    },
    {
      topic: "Implement machine learning algorithms",
      pera: "To implement advanced machine learning algorithms—such as CNN, LSTM, SVM, Random Forest, and Reinforcement Learning—to enhance the platform's ability to recognize handwriting, speech, and learning patterns for personalized learning experiences."
    },
    {
      topic: "Create multi-sensory learning modules",
      pera: "To create interactive and multi-sensory learning modules that support the auditory, visual, reading/writing, and kinesthetic learning needs of children with Down Syndrome."
    }
  ];

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
          Research Objectives
        </motion.p>
        <motion.p 
          className='sub_pera'
          variants={itemVariants}
        >
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is
        </motion.p>
      </motion.div>

      <motion.div 
        className='obj_card_con'
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {objectives.map((obj, index) => (
          <motion.div 
            className='obj_card'
            key={index}
            variants={itemVariants}
            whileHover={hoverEffect}
            custom={index}
          >
            <div className='obj_number'>{index + 1}</div>
            <div className='obj_content'>
              <p className='obj_topic'>{obj.topic}</p>
              <p className='obj_pera'>{obj.pera}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default ResearchObjectives;