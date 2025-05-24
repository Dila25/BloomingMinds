import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Methodology.css';

function Methodology() {
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
        boxShadow: "0 15px 30px rgba(43, 105, 178, 0.15)",
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
                    Methodology
                </motion.p>

            </motion.div>

            <motion.div
                className='Methodo_card_con'
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.div
                    className='card_leftM'
                    variants={itemVariants}
                >
                    <motion.div
                        className='meth_img_card'
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8 }}
                    />
                    <motion.p
                        className='figure_name'
                        variants={itemVariants}
                    >
                        Figure 2. High Level Architecture of the system.
                    </motion.p>
                </motion.div>

                <motion.div
                    className='card_mright'
                    variants={itemVariants}
                >
                    <motion.p
                        className='sub_pera'
                        variants={itemVariants}
                    >
                        The proposed adaptive e-learning platform consists of five main components:
                    </motion.p>
                    <motion.ul
                        className='methodology_list'
                        variants={containerVariants}
                    >
                        {[
                            "Cognitive, linguistic, visual, and motor challenges analysis",
                            "Personalized content adaptation based on VARK learning styles",
                            "Handwriting and speech recognition using machine learning models",
                            "Multi-sensory interactive learning modules development",
                            "User feedback collection and performance evaluation"
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                className='methodology_list_item'
                            >
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.p
                        className='methodology_description'
                        variants={itemVariants}
                    >
                        Fig 2 illustrates the overall system architecture of the proposed solution designed to provide an individualized and engaging learning experience for children with Down Syndrome. As shown in the diagram, users access the platform through a user-friendly interface where they interact with personalized lessons and activities tailored to their learning style and progress.
                    </motion.p>
                    <motion.p
                        className='methodology_description'
                        variants={itemVariants}
                    >
                        The system collects input data from user interactions and speech or handwriting samples, which are processed by the backend server deploying machine learning algorithms such as CNN, LSTM, SVM, and Reinforcement Learning models. These models analyze learning patterns and provide personalized content adjustments in real time.
                    </motion.p>
                    <motion.p
                        className='methodology_description'
                        variants={itemVariants}
                    >
                        Simultaneously, interactive multi-sensory modules deliver content in auditory, visual, reading/writing, and kinesthetic formats to support diverse learning needs. The platform tracks user progress and engagement, storing data securely for continuous adaptation.
                    </motion.p>
                    <motion.p
                        className='methodology_description'
                        variants={itemVariants}
                    >
                        Finally, educators and caregivers provide feedback through integrated surveys and reports, allowing the system to evaluate and improve learning outcomes continuously.
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Methodology;