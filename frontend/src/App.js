import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import ProjectScope from './Components/ProjectScope/ProjectScope'
import Milestones from './Components/Milestones/Milestones';
import Downloads from './Components/Downloads/Downloads';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'
import React, { useRef, useState, useEffect } from 'react';

function App() {
  const heroRef = useRef(null);
  const projectScopeRef = useRef(null);
  const milestonesRef = useRef(null);
  const downloadsRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);

  const [activeSection, setActiveSection] = useState('home');

  const sectionRefs = [
    { key: 'home', ref: heroRef },
    { key: 'projectScope', ref: projectScopeRef },
    { key: 'milestones', ref: milestonesRef },
    { key: 'downloads', ref: downloadsRef },
    { key: 'aboutUs', ref: aboutUsRef },
    { key: 'contactUs', ref: contactUsRef },
  ];

  const handleNav = (section) => {
    // Handle ProjectScope sub-sections
    if (section.startsWith('projectScope.')) {
      const subKey = section.split('.')[1];
      if (
        projectScopeRef.current &&
        projectScopeRef.current[`${subKey}Ref`] &&
        projectScopeRef.current[`${subKey}Ref`].current
      ) {
        projectScopeRef.current[`${subKey}Ref`].current.scrollIntoView({ behavior: 'smooth' });
        setActiveSection('projectScope');
        return;
      }
    }
    // Handle Downloads sub-sections
    if (section.startsWith('downloads.')) {
      const subKey = section.split('.')[1];
      if (
        downloadsRef.current &&
        downloadsRef.current[`${subKey}Ref`] &&
        downloadsRef.current[`${subKey}Ref`].current
      ) {
        downloadsRef.current[`${subKey}Ref`].current.scrollIntoView({ behavior: 'smooth' });
        setActiveSection('downloads');
        return;
      }
    }
    const found = sectionRefs.find(s => s.key === section);
    if (found && found.ref.current) {
      found.ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  // Optional: update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for nav height
      let current = 'home';
      for (let i = 0; i < sectionRefs.length; i++) {
        const { key, ref } = sectionRefs[i];
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          if (scrollPosition >= offsetTop) {
            current = key;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <NavBar onNavigate={handleNav} activeSection={activeSection} />
      <div className='full_page_con'>
        <div className='with_set' ref={heroRef}>
          <Hero />
        </div>
        <div className='with_set'>
          <ProjectScope ref={projectScopeRef} />
        </div>
        <div className='with_set' ref={milestonesRef}>
          <Milestones />
        </div>
        <div className='with_set'>
          <Downloads ref={downloadsRef} />
        </div>
        <div className='with_set' ref={aboutUsRef}>
          <AboutUs />
        </div>
        <div className='with_set' ref={contactUsRef}>
          <ContactUs />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;