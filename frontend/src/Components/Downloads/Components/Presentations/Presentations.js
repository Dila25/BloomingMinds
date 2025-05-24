import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Mock data for documents
const documents = [
    {
        id: 1,
        title: "Topic Assessment",
        submittedDate: "2021/02/25",
        type: "Group Submission",
        link: "https://drive.google.com/document/1",
        icon: "📝"
    },
    {
        id: 2,
        title: "Project Proposal",
        submittedDate: "2021/03/15",
        type: "Group Submission",
        link: "https://drive.google.com/document/2",
        icon: "📑"
    },
    {
        id: 3,
        title: "Literature Review",
        submittedDate: "2021/04/10",
        type: "Individual Submission",
        link: "https://drive.google.com/document/3",
        icon: "📚"
    },
    {
        id: 4,
        title: "Final Report",
        submittedDate: "2021/12/05",
        type: "Group Submission",
        link: "https://drive.google.com/document/4",
        icon: "📄"
    }
];
function Presentations() {
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
        boxShadow: "0 10px 25px rgba(43, 105, 178, 0.15)",
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
                    Presentations
                </motion.p>
            </motion.div>
                <motion.div 
                    className='documents_grid'
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                  >
                    {documents.map((doc) => (
                      <motion.div 
                        className='document_card'
                        key={doc.id}
                        variants={itemVariants}
                        whileHover={hoverEffect}
                      >
                        <div className='document_icon'>{doc.icon}</div>
                        <div className='document_content'>
                          <h3 className='document_title'>{doc.title}</h3>
                          <p className='document_meta'>
                            <span className='document_date'>{doc.submittedDate}</span>
                            <span className='document_type'>{doc.type}</span>
                          </p>
                          <a 
                            href={doc.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='document_link'
                          >
                            View Document
                            <svg className='link_arrow' viewBox="0 0 24 24">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
        </div>
    )
}

export default Presentations
