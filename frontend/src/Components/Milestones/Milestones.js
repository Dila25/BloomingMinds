import React, { useEffect, useRef } from 'react';
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
      marks: "Marks Allocated: 90"
    },
    {
      date: "June 2021",
      title: "Progress Presentation I",
      description: "Progress Presentation I reviews the 50% completetion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
      marks: "Marks Allocated: 38"
    },
    {
      date: "July 2021",
      title: "Research Paper",
      description: "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge",
      marks: "Marks Allocated: 30"
    },
    {
      date: "September 2021",
      title: "Progress Presentation II",
      description: "Progress Presentation II reviews the 90% completetion status demonstration of the project. Along with a Poster presesntation which describes the project as a whole.",
      marks: "Marks Allocated: 42"
    },
    {
      date: "October 2021",
      title: "Website Assessment",
      description: "The Website helps to promote our research project and reveals all details related to the project.",
      marks: "Marks Allocated: 74"
    },
    {
      date: "November 2021",
      title: "Logbook",
      description: "Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.",
      marks: "Marks Allocated: 60"
    },
    {
      date: "November 2021",
      title: "Final Report",
      description: "Final Report evalutes the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.",
      marks: "Marks Allocated: 50"
    },
    {
      date: "November 2021",
      title: "Final Presentation & Viva",
      description: "Viva is held individually to assess each members contribution to the project.",
      marks: "Marks Allocated: 35"
    }
  ];

  // Helper to extract numeric value from "Marks Allocated: 6"
  const getMarksValue = (marksString) => {
    const match = marksString.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  // ProgressBar component with shine animation every 3 seconds
  const ProgressBar = ({ value, max = 100 }) => {
    const barRef = useRef(null);

    useEffect(() => {
      const interval = setInterval(() => {
        if (barRef.current) {
          barRef.current.classList.remove('shine');
          // Force reflow to restart animation
          void barRef.current.offsetWidth;
          barRef.current.classList.add('shine');
        }
      }, 3000);
      return () => clearInterval(interval);
    }, []);

    const percent = Math.round((value / max) * 100);

    return (
      <div className="progress-bar-outer">
        <div
          className="progress-bar-inner"
          ref={barRef}
          style={{ width: `${percent}%` }}
        >
          <span className="progress-bar-label">{value} %</span>
        </div>
      </div>
    );
  };

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
          >Milestones
          </motion.p>
        </motion.div>

        <motion.div
          className='timeline_container'
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="timeline_line"></div>
          {milestones.map((milestone, index) => (
            <motion.div
              className='timeline_item'
              key={index}
              variants={itemVariants}
            >
              <div className="timeline_dot"></div>
              <motion.div
                className='mil_card'
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(43, 105, 178, 0.15)" }}
              >
                <p className='mil_topic'>{milestone.date}</p>
                <p className='mil_pera'>{milestone.title}</p>
                <p className='mil_desc'>{milestone.description}</p>
                <p className='mil_marks'>{milestone.marks}</p>
                <ProgressBar value={getMarksValue(milestone.marks)} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Milestones;