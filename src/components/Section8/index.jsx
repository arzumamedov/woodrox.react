import React from 'react'
import './style.css'
function Section8() {
    return (
        <div className='section8'>
            <div className='section8Texts'>
                <div className='section8Left'>
                    <h6>ABOUT ME</h6>
                    <p className='p1'>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
                    <p className='p2'>Copyright ©2023 All rights reserved | This template is made with  by <span>Colorlib</span></p>
                </div>
                <div className='section8Center'>
                    <h6>NEW SLETTER</h6>
                    <p>Stay updated with our latest trends</p>
                    <div className='input'>                    <input type="text" placeholder='Enter email address' />
                        <button><i class="fa-solid fa-arrow-right-long"></i></button></div>
                </div>
                <div className='section8Right'>
                <h6>FOLLOW ME</h6>
                    <p>Let us be social</p>
                    <div className='icons'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-solid fa-basketball"></i>
                    <i class="fa-brands fa-behance"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section8