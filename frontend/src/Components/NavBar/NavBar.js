import React from 'react'
import './NavBar.css'
function NavBar() {
    return (
        <div className='nav_full_container'>
            <div className='nav_container'>
                <p className='logo'><span className='logoB'>B</span>looming<span className='logoM'>M</span>inds</p>
                <div className='navitem_con'>
                    <p className='nav_item active'>Home</p>
                    <p className='nav_item'>Project Scope</p>
                    <p className='nav_item'>Milestones</p>
                    <p className='nav_item'>Downloads</p>
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
