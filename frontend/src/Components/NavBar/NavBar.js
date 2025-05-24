import React, { useState, useEffect } from 'react'
import './NavBar.css'

function NavBar() {
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
                    <p className={`nav_item active nav-anim${navVisible[0] ? ' nav-anim-in' : ''}`}>Home</p>
                    <div
                        className={`nav_item_drop nav_item_dropdown nav-anim${navVisible[1] ? ' nav-anim-in' : ''}`}
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
                                <p className='nav_item'>Research Gap</p>
                                <p className='nav_item'>Research Problem & Solution</p>
                                <p className='nav_item'>Research Objectives</p>
                                <p className='nav_item'>Methodology</p>
                                <p className='nav_item'>Technologies</p>
                            </div>
                        )}
                    </div>
                    <p className={`nav_item nav-anim${navVisible[2] ? ' nav-anim-in' : ''}`}>Milestones</p>
                    <div
                        className={`nav_item_drop nav_item_dropdown nav-anim${navVisible[3] ? ' nav-anim-in' : ''}`}
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
                                <p className='nav_item'>Documents</p>
                                <p className='nav_item'>Presentations</p>
                            </div>
                        )}
                    </div>
                    <p className={`nav_item nav-anim${navVisible[4] ? ' nav-anim-in' : ''}`}>About Us</p>
                    <p className={`nav_item nav-anim${navVisible[6] ? ' nav-anim-in' : ''}`}>Contact Us</p>
                </div>
                <button className={`nav_btn nav-anim${btnVisible ? ' nav-anim-in' : ''}`}>
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
                        <p className='nav_item active' onClick={handleSidebarNavClick}>Home</p>
                        <div className='nav_item_drop'>
                            <div
                                className='nav_item'
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
                                    <p className='nav_item' onClick={handleSidebarNavClick}>Research Gap</p>
                                    <p className='nav_item' onClick={handleSidebarNavClick}>Research Problem & Solution</p>
                                    <p className='nav_item' onClick={handleSidebarNavClick}>Research Objectives</p>
                                    <p className='nav_item' onClick={handleSidebarNavClick}>Methodology</p>
                                    <p className='nav_item' onClick={handleSidebarNavClick}>Technologies</p>
                                </div>
                            )}
                        </div>
                        <p className='nav_item' onClick={handleSidebarNavClick}>Milestones</p>
                        <div className='nav_item_drop'>
                            <div
                                className='nav_item'
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
                                    <p className='nav_item' onClick={handleSidebarNavClick}>Documents</p>
                                    <p className='nav_item' onClick={handleSidebarNavClick}>Presentations</p>
                                </div>
                            )}
                        </div>
                        <p className='nav_item' onClick={handleSidebarNavClick}>About Us</p>
                        <p className='nav_item' onClick={handleSidebarNavClick}>Contact Us</p>
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