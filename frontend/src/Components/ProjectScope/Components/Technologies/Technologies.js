import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Technologies.css';
import ReactIcon from './icons/react.png'
const technologies = [
    { name: "React", icon: ReactIcon },
    { name: "Python", icon: ReactIcon },
    { name: "TensorFlow", icon: ReactIcon },
    { name: "Keras", icon: ReactIcon },
    { name: "MongoDB", icon: ReactIcon },
    { name: "Google Cloud", icon: ReactIcon },
    { name: "JWT", icon: ReactIcon },
    { name: "OpenCV", icon: ReactIcon }
];

function Technologies() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: false
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const hoverEffect = {
        y: -5,
        scale: 1.05,
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
                    Technologies
                </motion.p>
            </motion.div>

            <motion.div
                className='technologies_grid'
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {technologies.map((tech, index) => (
                    <motion.div
                        className='tech_card'
                        key={index}
                        variants={itemVariants}
                        whileHover={hoverEffect}
                    >
                        <div className='tech_icon_container'>
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className='tech_icon'
                                loading='lazy'
                            />
                        </div>
                        <motion.p
                            className='tech_name'
                            whileHover={{ color: "#2b69b2" }}
                        >
                            {tech.name}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Technologies;