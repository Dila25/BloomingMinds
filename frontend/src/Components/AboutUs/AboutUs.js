import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutUs.css';
import Dilshan from './IMG/DilshanPriyawansha4.jpg';
import Sanjeevi from './IMG/SanjeeviChandrasiri.jpg';
import Buddhima from './IMG/BuddhimaAttanayaka.jpeg';
import suren from './IMG/SurenSandaruwan.png';
import janithya from './IMG/JanithyaDias.png';
import shamindi from './IMG/ShamindiHettisinghe.jpg';
import { FaEnvelope, FaLinkedin, FaUserTie, FaUsers } from 'react-icons/fa';

function AboutUs() {
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

  const supervisors = [
    {
      id: 1,
      name: "Sanjeevi Chandrasiri",
      role: "Supervisor",
      institution: "Sri Lanka Institute of Information Technology",
      department: "Faculty of Computing | Information Technology",
      email: "sanji.c@sliit.lk",
      linkedin: "https://www.linkedin.com/in/sanjeevi-chandrasiri-6154b319?originalSubdomain=lk",
      image: Sanjeevi
    },
    {
      id: 2,
      name: "Buddhima Attanayaka",
      role: "Co-Supervisor",
      institution: "Sri Lanka Institute of Information Technology",
      department: "Faculty of Computing | Computer Systems Engineering",
      email: "buddhima.a@sliit.lk",
      linkedin: "https://www.linkedin.com/in/buddhima-attanayaka-b2131a61/?originalSubdomain=lk",
      image: Buddhima
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Suren Sandaruwan",
      role: "Team Leader",
      institution: "Sri Lanka Institute of Information Technology",
      email: "it21203244@my.sliit.lk",
      linkedin: "https://linkedin.com/in/dilshan",
      image: suren
    },
    {
      id: 2,
      name: "Janithya Dias",
      role: "Frontend Developer",
      institution: "Sri Lanka Institute of Information Technology",
      email: "it21203176@my.sliit.lk",
      linkedin: "https://www.linkedin.com/in/js-dias/",
      image: janithya
    },
    {
      id: 3,
      name: "Shamindi Hettisinghe",
      role: "Backend Developer",
      institution: "Sri Lanka Institute of Information Technology",
      email: "it21203558@my.sliit.lk",
      linkedin: "https://www.linkedin.com/in/shamindi-3b5632215/",
      image: shamindi
    },
    {
      id: 4,
      name: "Dilshan Priyawansha",
      role: "UI/UX Designer",
      institution: "Sri Lanka Institute of Information Technology",
      email: "it21203176@my.sliit.lk",
      linkedin: "https://www.linkedin.com/in/dilshan-priyawansha/",
      image: Dilshan
    }
  ];

  return (
    <div className='sub_container' ref={ref}>
      <div className='research_gap_con' >
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
            About Us
          </motion.p>
        </motion.div>

        <motion.div
          className='supervisors_section'
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className='section_header'
            variants={itemVariants}
          >
            <FaUserTie className='section_icon' />
            <h2>Supervisors</h2>
          </motion.div>

          <div className='supervisors_grid'>
            {supervisors.map((supervisor) => (
              <motion.div
                className='profile_card'
                key={supervisor.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className='profile_image_container'>
                  <img src={supervisor.image} alt={supervisor.name} className='profile_image' />
                </div>
                <div className='profile_content'>
                  <h3 className='profile_name'>{supervisor.name}</h3>
                  <p className='profile_role'>{supervisor.role}</p>
                  <p className='profile_institution'>{supervisor.institution}</p>
                  <p className='profile_department'>{supervisor.department}</p>
                  <div className='profile_links'>
                    <a href={`mailto:${supervisor.email}`} className='profile_link'>
                      <FaEnvelope className='link_icon' />
                    </a>
                    <a href={supervisor.linkedin} target="_blank" rel="noopener noreferrer" className='profile_link'>
                      <FaLinkedin className='link_icon' />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className='team_section'
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className='section_header'
            variants={itemVariants}
          >
            <FaUsers className='section_icon' />
            <h2>Team Members</h2>
          </motion.div>

          <div className='team_grid'>
            {teamMembers.map((member) => (
              <motion.div
                className='profile_card'
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className='profile_image_container'>
                  <img src={member.image} alt={member.name} className='profile_image' />
                </div>
                <div className='profile_content'>
                  <h3 className='profile_name'>{member.name}</h3>
                  {/* <p className='profile_role'>{member.role}</p> */}
                  <p className='profile_institution'>{member.institution}</p>
                  <div className='profile_links'>
                    <a href={`mailto:${member.email}`} className='profile_link'>
                      <FaEnvelope className='link_icon' />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className='profile_link'>
                      <FaLinkedin className='link_icon' />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutUs;