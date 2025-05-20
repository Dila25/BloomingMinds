import React, { useState } from 'react'
import './NavBar.css'
function NavBar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);

    return (
        <div className='nav_full_container'>
            <div className='nav_container'>
                <p className='logo'><span className='logoB'>B</span>looming<span className='logoM'>M</span>inds</p>
                <div className='navitem_con'>
                    <p className='nav_item active'>Home</p>
                    <div
                        className='nav_item_drop nav_item_dropdown'
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                        style={{ position: 'relative', display: 'inline-block' }}
                    >
                        Project Scope
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="0.8em"
                            stroke-width="5"
                            viewBox="0 0 512 512"
                            className={`arrow${showDropdown ? ' arrow-rotated' : ''}`}
                        >
                            <path
                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                            ></path>
                        </svg>
                        {showDropdown && (
                            <div className='dropdown_menu'>
                                <p className='nav_item'>Literature Survey</p>
                                <p className='nav_item'>Research Gap</p>
                                <p className='nav_item'>Research Problem & Solution</p>
                                <p className='nav_item'>Research Objectives</p>
                                <p className='nav_item'>Methodology</p>
                                <p className='nav_item'>Technologies</p>
                            </div>
                        )}
                    </div>
                    <p className='nav_item'>Milestones</p>
                    <div
                        className='nav_item_drop nav_item_dropdown'
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
                    <p className='nav_item'>About Us</p>
                    <p className='nav_item'>Achievements</p>
                    <p className='nav_item'>Contact Us</p>
                </div>
                <button className='nav_btn'>
                    <span>Lets Talk</span>
                    <svg
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 29 25"
                        fill="none"
                        class="h-5 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                    >
                        <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default NavBar
