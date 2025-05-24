import React, { useState, useEffect } from 'react'
import './NavBar.css'

function NavBar({ onNavigate, activeSection }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [mobileDropdown1, setMobileDropdown1] = useState(false);
    const [mobileDropdown2, setMobileDropdown2] = useState(false);
    const [logoVisible, setLogoVisible] = useState(false);
    const [navVisible, setNavVisible] = useState([false, false, false, false, false, false, false]);
    const [btnVisible, setBtnVisible] = useState(false);
    const [containerVisible, setContainerVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setLogoVisible(true), 100);
        navVisible.forEach((_, idx) => {
            setTimeout(() => {
                setNavVisible(prev => {
                    const updated = [...prev];
                    updated[idx] = true;
                    return updated;
                });
            }, 400 + idx * 120);
        });
        setTimeout(() => setBtnVisible(true), 400 + navVisible.length * 120 + 100);
        setTimeout(() => setContainerVisible(true), 10);
        // eslint-disable-next-line
    }, []);

    const handleSidebarNavClick = () => {
        setSidebarOpen(false);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className={`nav_full_container${containerVisible ? ' nav_full_container-in' : ''}`}>
            <div className='nav_container'>
                <p className={`logo nav-anim${logoVisible ? ' nav-anim-in' : ''}`}>
                    <span className='logoB'>B</span>looming<span className='logoM'>M</span>inds
                </p>

                {/* Hamburger Icon for mobile */}
                <div className={`burger${sidebarOpen ? ' open' : ''}`} onClick={toggleSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Desktop Nav Items */}
                <div className='navitem_con'>
                    <p
                        className={`nav_item${activeSection === 'home' ? ' active' : ''} nav-anim${navVisible[0] ? ' nav-anim-in' : ''}`}
                        onClick={() => onNavigate && onNavigate('home')}
                    >
                        Home
                    </p>
                    <div
                        className={`nav_item_drop nav_item_dropdown nav-anim${navVisible[1] ? ' nav-anim-in' : ''}${activeSection === 'projectScope' ? ' active' : ''}`}
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                        style={{ position: 'relative', display: 'inline-block' }}
                    >
                        Project Scope
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="0.8em"
                            strokeWidth="5"
                            viewBox="0 0 512 512"
                            className={`arrow${showDropdown ? ' arrow-rotated' : ''}`}
                        >
                            <path
                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                            ></path>
                        </svg>
                        {showDropdown && (
                            <div className='dropdown_menu'>
                                <p className={`nav_item${activeSection === 'projectScope.researchGap' ? ' active' : ''} `} onClick={() => onNavigate && onNavigate('projectScope.researchGap')}>Research Gap</p>

                                <p className={`nav_item${activeSection === 'projectScope.researchProblem' ? ' active' : ''} `} onClick={() => onNavigate && onNavigate('projectScope.researchProblem')}>Research Problem & Solution</p>

                                <p className={`nav_item${activeSection === 'projectScope.researchObjectives' ? ' active' : ''} `} onClick={() => onNavigate && onNavigate('projectScope.researchObjectives')}>Research Objectives</p>

                                <p className={`nav_item${activeSection === 'projectScope.methodology' ? ' active' : ''} `} onClick={() => onNavigate && onNavigate('projectScope.methodology')}>Methodology</p>

                                <p className={`nav_item${activeSection === 'projectScope.technologies' ? ' active' : ''} `} onClick={() => onNavigate && onNavigate('projectScope.technologies')}>Technologies</p>
                            </div>
                        )}
                    </div>
                    <p
                        className={`nav_item${activeSection === 'milestones' ? ' active' : ''} nav-anim${navVisible[2] ? ' nav-anim-in' : ''}`}
                        onClick={() => onNavigate && onNavigate('milestones')}
                    >
                        Milestones
                    </p>
                    <div
                        className={`nav_item_drop nav_item_dropdown nav-anim${navVisible[3] ? ' nav-anim-in' : ''}${activeSection === 'downloads' ? ' active' : ''}`}
                        onMouseEnter={() => setShowDropdown2(true)}
                        onMouseLeave={() => setShowDropdown2(false)}
                        style={{ position: 'relative', display: 'inline-block' }}
                    >
                        Downloads
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="0.8em"
                            viewBox="0 0 512 512"
                            className={`arrow${showDropdown2 ? ' arrow-rotated' : ''}`}
                        >
                            <path
                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                            ></path>
                        </svg>
                        {showDropdown2 && (
                            <div className='dropdown_menu2'>
                                <p className='nav_item' onClick={() => onNavigate && onNavigate('downloads.documents')}>Documents</p>
                                <p className='nav_item' onClick={() => onNavigate && onNavigate('downloads.presentations')}>Presentations</p>
                            </div>
                        )}
                    </div>
                    <p
                        className={`nav_item${activeSection === 'aboutUs' ? ' active' : ''} nav-anim${navVisible[4] ? ' nav-anim-in' : ''}`}
                        onClick={() => onNavigate && onNavigate('aboutUs')}
                    >
                        About Us
                    </p>
                    <p
                        className={`nav_item${activeSection === 'contactUs' ? ' active' : ''} nav-anim${navVisible[6] ? ' nav-anim-in' : ''}`}
                        onClick={() => onNavigate && onNavigate('contactUs')}
                    >
                        Contact Us
                    </p>
                </div>
                <button className={`nav_btn nav-anim${btnVisible ? ' nav-anim-in' : ''}`} onClick={() => onNavigate && onNavigate('contactUs')}>
                    <span>Lets Talk</span>
                    <svg
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 29 25"
                        fill="none"
                        className="h-5 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                    >
                        <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                    </svg>
                </button>

                {/* Sidebar Backdrop */}
                {sidebarOpen && (
                    <div
                        className="sidebar_backdrop"
                        onClick={handleSidebarNavClick}
                    />
                )}

                {/* Mobile Sidebar */}
                <div className={`mobile_sidebar${sidebarOpen ? ' open' : ''}`}>
                    <div className="mobile_sidebar_content">
                        <p
                            className={`nav_item${activeSection === 'home' ? ' active' : ''}`}
                            onClick={() => {
                                handleSidebarNavClick();
                                onNavigate && onNavigate('home');
                            }}
                        >
                            Home
                        </p>
                        <div className='nav_item_drop'>
                            <div
                                className={`nav_item${activeSection === 'projectScope' ? ' active' : ''}`}
                                onClick={() => setMobileDropdown1(!mobileDropdown1)}
                                style={{ display: 'flex', alignItems: 'center' }}
                            >
                                Project Scope
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="0.8em"
                                    viewBox="0 0 512 512"
                                    className={`arrow${mobileDropdown1 ? ' arrow-rotated' : ''}`}
                                    style={{ marginLeft: '5px' }}
                                >
                                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                                </svg>
                            </div>
                            {mobileDropdown1 && (
                                <div className='mobile_dropdown'>
                                    <p className='nav_item' onClick={() => { handleSidebarNavClick(); onNavigate && onNavigate('projectScope.researchGap'); }}>Research Gap</p>
                                    <p className='nav_item' onClick={() => { handleSidebarNavClick(); onNavigate && onNavigate('projectScope.researchProblem'); }}>Research Problem & Solution</p>
                                    <p className='nav_item' onClick={() => { handleSidebarNavClick(); onNavigate && onNavigate('projectScope.researchObjectives'); }}>Research Objectives</p>
                                    <p className='nav_item' onClick={() => { handleSidebarNavClick(); onNavigate && onNavigate('projectScope.methodology'); }}>Methodology</p>
                                    <p className='nav_item' onClick={() => { handleSidebarNavClick(); onNavigate && onNavigate('projectScope.technologies'); }}>Technologies</p>
                                </div>
                            )}
                        </div>
                        <p
                            className={`nav_item${activeSection === 'milestones' ? ' active' : ''}`}
                            onClick={() => { handleSidebarNavClick(); onNavigate && onNavigate('milestones'); }}
                        >
                            Milestones
                        </p>
                        <div className='nav_item_drop'>
                            <div
                                className={`nav_item${activeSection === 'downloads' ? ' active' : ''}`}
                                onClick={() => setMobileDropdown2(!mobileDropdown2)}
                                style={{ display: 'flex', alignItems: 'center' }}
                            >
                                Downloads
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="0.8em"
                                    viewBox="0 0 512 512"
                                    className={`arrow${mobileDropdown2 ? ' arrow-rotated' : ''}`}
                                    style={{ marginLeft: '5px' }}
                                >
                                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                                </svg>
                            </div>
                            {mobileDropdown2 && (
                                <div className='mobile_dropdown'>
                                    <p className='nav_item' onClick={() => { handleSidebarNavClick(); onNavigate && onNavigate('downloads.documents'); }}>Documents</p>
                                    <p className='nav_item' onClick={() => { handleSidebarNavClick(); onNavigate && onNavigate('downloads.presentations'); }}>Presentations</p>
                                </div>
                            )}
                        </div>
                        <p
                            className={`nav_item${activeSection === 'aboutUs' ? ' active' : ''}`}
                            onClick={() => { handleSidebarNavClick(); onNavigate && onNavigate('aboutUs'); }}
                        >
                            About Us
                        </p>
                        <p
                            className={`nav_item${activeSection === 'contactUs' ? ' active' : ''}`}
                            onClick={() => { handleSidebarNavClick(); onNavigate && onNavigate('contactUs'); }}
                        >
                            Contact Us
                        </p>
                        <button className='nav_btn' style={{ marginTop: '20px' }} onClick={handleSidebarNavClick}>
                            <span>Lets Talk</span>
                            <svg
                                strokeWidth="2"
                                stroke="currentColor"
                                viewBox="0 0 29 25"
                                fill="none"
                                className="h-5 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16px"
                            >
                                <path
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar