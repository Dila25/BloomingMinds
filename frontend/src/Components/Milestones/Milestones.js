import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Milestones.css';

function Milestones() {
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

  const milestones = [
    {
      date: "March 2021",
      title: "Project Proposal",
      description: "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
      marks: "Marks Allocated: 6"
    },
    {
      date: "June 2021",
      title: "Literature Survey",
      description: "Comprehensive review of existing research and technologies related to the project.",
      marks: "Marks Allocated: 8"
    },
    {
      date: "September 2021",
      title: "System Design",
      description: "Architectural design and technical specifications of the proposed solution.",
      marks: "Marks Allocated: 10"
    },
    {
      date: "December 2021",
      title: "Implementation Phase 1",
      description: "Development of core functionalities and basic features of the system.",
      marks: "Marks Allocated: 12"
    }
  ];

  return (
    <div className='sub_container' ref={ref}>
      <div className='research_gap_con'>
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
            <span className='bline'>Milestones</span>
          </motion.p>
        </motion.div>

        <motion.div
          className='mil_card_con'
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {milestones.map((milestone, index) => (
            <motion.div
              className='mil_card'
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <p className='mil_topic'>{milestone.date}</p>
              <p className='mil_pera'>{milestone.title}</p>
              <p>{milestone.description}</p>
              <p>{milestone.marks}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Milestones;