import React from 'react'
import './about.css'
import Section3 from '../../components/Section3'
import Section4 from '../../components/Section4'
import Section7 from '../../components/Section7'

function About() {
  return (
    <>
      <div className='changeNow'>
        <div className='changeNowLeft'>
          <p className='p1'>BRAND NEW APP TO BLOW YOUR MIND</p>
          <h2>WE’VE MADE A LIFE
            THAT WILL CHANGE YOU</h2>
            <p className='p2'>We are here to listen from you deliver exellence</p>
            <p className='p3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            <button>GET STARTED NOW</button>
        </div>
        <div className='changeNowRight'>
          <img src="https://preview.colorlib.com/theme/woodrox/img/about-1.jpg" alt="" />
        </div>
      </div>
      <Section3 />
      <Section4 />
      <Section7 />
    </>
  )
}

export default About