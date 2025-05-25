import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Documents.css';

// Mock data for documents
const documents = [
  
  {
    id: 2,
    title: "Project Proposal",
    submittedDate: "2025/08/16",
    type: "Group Submission",
    link: "https://mysliit-my.sharepoint.com/personal/it21203176_my_sliit_lk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fit21203176%5Fmy%5Fsliit%5Flk%2FDocuments%2FWEBSITE%20DOCS%2FWEBSITE%20DOCS%2F1%2E%20Project%20Proposal&ga=1",
    icon: "📑"
  },
  {
    id: 3,
    title: "Checklist",
    submittedDate: "2025/01/10",
    type: "Individual Submission",
    link: "https://mysliit-my.sharepoint.com/personal/it21203176_my_sliit_lk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fit21203176%5Fmy%5Fsliit%5Flk%2FDocuments%2FWEBSITE%20DOCS%2FWEBSITE%20DOCS%2F7%2E%20Checklist%20Documents&ga=1",
    icon: "📚"
  },
   {
    id: 4,
    title: "Research Paper",
    submittedDate: "2025/03/20",
    type: "Group Submission",
    link: "https://mysliit-my.sharepoint.com/personal/it21203176_my_sliit_lk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fit21203176%5Fmy%5Fsliit%5Flk%2FDocuments%2FWEBSITE%20DOCS%2FWEBSITE%20DOCS%2F4%2E%20Research%20Paper&ga=1",
    icon: "📄"
  },
   {
    id: 5,
    title: "Final Report",
    submittedDate: "2025/03/20",
    type: "Group Submission",
    link: "https://mysliit-my.sharepoint.com/personal/it21203176_my_sliit_lk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fit21203176%5Fmy%5Fsliit%5Flk%2FDocuments%2FWEBSITE%20DOCS%2FWEBSITE%20DOCS%2F5%2E%20Final%20Report&ga=1",
    icon: "📄"
  }
];

function Documents() {
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
          Documents
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

export default Documents;