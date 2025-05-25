import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Mock data for documents
const documents = [
    {
        id: 1,
        title: "Progress Presentation - I",
        submittedDate: "2024/12/05",
        type: "Group Submission",
        link: "https://mysliit-my.sharepoint.com/personal/it21203176_my_sliit_lk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fit21203176%5Fmy%5Fsliit%5Flk%2FDocuments%2FWEBSITE%20DOCS%2FWEBSITE%20DOCS%2F2%2E%20Progress%20Presentation%20%2D%20I&ga=1",
        icon: "📝"
    },
    {
        id: 2,
        title: "Progress Presentation - II",
        submittedDate: "2025/03/19",
        type: "Group Submission",
        link: "https://mysliit-my.sharepoint.com/personal/it21203176_my_sliit_lk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fit21203176%5Fmy%5Fsliit%5Flk%2FDocuments%2FWEBSITE%20DOCS%2FWEBSITE%20DOCS%2F3%2E%20Progress%20Presentation%20%2D%20II&ga=1",
        icon: "📑"
    },
    
    {
        id: 4,
        title: "Final Presentation",
        submittedDate: "2025/05/28",
        type: "Group Submission",
        link: "https://mysliit-my.sharepoint.com/personal/it21203176_my_sliit_lk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fit21203176%5Fmy%5Fsliit%5Flk%2FDocuments%2FWEBSITE%20DOCS%2FWEBSITE%20DOCS%2F6%2E%20Final%20Presentation%20%26%20Viva&ga=1",
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
