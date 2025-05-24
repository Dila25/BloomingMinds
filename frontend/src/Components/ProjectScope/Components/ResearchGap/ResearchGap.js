import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ResearchGap.css';

const researchGapCards = [
  {
    iconClass: 'research_gap_card_icon',
    topic: 'Lack of Personalization',
    pera: 'Most platforms offer one-size-fits-all content without adapting to individual learning needs, reducing effectiveness for learners with Down Syndrome.'
  },
  {
    iconClass: 'research_gap_card_icon_two',
    topic: 'Limited Multisensory Learning',
    pera: 'Tools often focus on just one mode (visual or audio) and miss out on engaging multiple senses, which is crucial for children with diverse learning styles.'
  },
  {
    iconClass: 'research_gap_card_icon_thre',
    topic: 'Poor Feedback & Tracking',
    pera: 'Real-time progress tracking and feedback are often missing, making it hard for educators and parents to support and monitor learners effectively.'
  }
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hoverEffect = {
  scale: 1.03,
  boxShadow: "0px 10px 20px rgba(43, 105, 178, 0.2)",
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
};

function ResearchGap() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  return (
    <div className='research_gap_con' ref={ref}>
      <motion.div 
        className='subCom_topic'
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className='sub_topic'>Research Gap</p>
       
      </motion.div>
      
      <div className='research_gap_card_con'>
        {researchGapCards.map((card, idx) => (
          <motion.div 
            className='research_gap_card'
            key={idx}
            initial="offscreen"
            animate={inView ? "onscreen" : {}}
            variants={cardVariants}
            custom={idx}
            transition={{ delay: idx * 0.1 }}
          >
            <div className='research_gap_card_icon_con'>
              <motion.div 
                className={card.iconClass}
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1.1, 1]
                }}
                transition={{
                  delay: 0.5 + idx * 0.1,
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 4
                }}
              />
              <motion.p 
                className='research_gap_card_topic'
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 + idx * 0.1 }}
              >
                {card.topic}
              </motion.p>
            </div>
            <motion.p 
              className='research_gap_card_pera'
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 + idx * 0.1 }}
            >
              {card.pera}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ResearchGap