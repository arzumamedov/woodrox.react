import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Section1() {
    return (
        <div className='section1'>
            <div className='section1Top'>
                <div className='section1TopLeft'>
                    <p>Visit Us</p>
                    <p>Online Support</p>
                </div>
                <div className='section1TopRight'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-solid fa-basketball"></i>
                    <i class="fa-brands fa-behance"></i>
                </div>
            </div>
            <div className='section1Center'>
                <div className='section1CenterLeft'>
                    <img src="https://preview.colorlib.com/theme/woodrox/img/logo.png.webp" alt="" />
                </div>
                <div className='section1CenterRight'>
                    <ul>
                        <Link to={'/'}><li>HOME</li></Link>
                        <Link to={"/about"}><li>ABOUT</li></Link>
                        <li>PAGES</li>
                        <li>BLOG</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>
            <div className='section1Bottom'>
                <div className='section1BottomLeft'>
                    <h2>PRECISE CONCEPT DESIGN
                        FOR STYLISH LIVING</h2>
                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                    <button>Get Started</button>
                </div>
                <div className='section1BottomRight'>
                    <div className='div1'>
                        <i class="fa-solid fa-couch"></i>
                    </div>
                    <div className='div2'>
                        <i class="fa-solid fa-bed"></i>
                    </div>
                    <div className='div3'>
                        <i class="fa-solid fa-computer"></i>
                    </div>
                    <div className='div4'>
                        <i class="fa-solid fa-chair"></i>
                    </div>
                    <div className='div5'>
                        <i class="fa-solid fa-door-closed"></i>
                    </div>
                    <div className='div6'>
                        <i class="fa-solid fa-kitchen-set"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1