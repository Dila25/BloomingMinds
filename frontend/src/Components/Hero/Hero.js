import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#4f46e5",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.98
    }
  };

  // Add for letter animation
  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.4,
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    })
  };

  // Helper to wrap each letter in a motion.span
  const renderAnimatedHeader = () => {
    const text = [
      { letter: 'B', className: 'logoB' },
      { letter: 'l', className: '' },
      { letter: 'o', className: '' },
      { letter: 'o', className: '' },
      { letter: 'm', className: '' },
      { letter: 'i', className: '' },
      { letter: 'n', className: '' },
      { letter: 'g', className: '' },
      { letter: ' ', className: '' },
      { letter: 'M', className: 'logoM' },
      { letter: 'i', className: '' },
      { letter: 'n', className: '' },
      { letter: 'd', className: '' },
      { letter: 's', className: '' }
    ];
    return text.map((item, i) => (
      <motion.span
        key={i}
        className={item.className}
        custom={i}
        variants={letterVariants}
        initial="hidden"
        animate={controls}
      >
        {item.letter}
      </motion.span>
    ));
  };

  return (
    <div className='hero_back' ref={ref}>
      <div className='hero_background_pattern'></div>
      <motion.div 
        className='hero_container'
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div className='hero_colum' variants={itemVariants}>
          <div className='hero_colum_lft'>
            <motion.div 
              variants={imageVariants}
              whileHover={{ rotate: 5 }}
            ></motion.div>
            
            <p className='lft_cont_topic'>
              {renderAnimatedHeader()}
            </p>
            
            <motion.p className='lft_pera' variants={itemVariants}>
              Revolutionizing e-learning for Down syndrome learners using VARK theory. 
              Our multisensory approach enhances accessibility, engagement, and learning outcomes.
            </motion.p>
            
            <motion.button 
              className="lernbtn"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Learn More
              <svg className="btn_arrow" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div className='hero_colum' variants={itemVariants}>
          <div className='hero_colum_righ'>
            <motion.div 
              className='hero_colum_righ_card_one hero_colum_righ_card'
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero;