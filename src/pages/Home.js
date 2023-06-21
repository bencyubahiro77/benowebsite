import React from 'react'
import { Link } from 'react-router-dom';
import pic2 from '../images/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-.jpg'
import { faBriefcase, faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  return (
    <div className='homepic'>
      <h2>Benjamin CYUBAHIRO</h2>

      <div className='home-sec-2'>
        <div className='home-about'>
          <FontAwesomeIcon icon={faBriefcase} className='home-icon' /> 
          <p>Let's Work Together For Better Experience</p>
          <button><Link to="/about" >Hire Me</Link></button>
        </div>
        
        <img src= {pic2} alt=" " />

        <div className='home-about'>
             <FontAwesomeIcon icon={faPhone} className='home-icon'  shake />
             <p>You can Reach Out For more Information</p>
             <button><Link to="/contact">Contact</Link></button>
        </div>
      </div>

      <div class="home-footer">
        <h3><span class="highlight">Project</span> 5+</h3>
        <h3>Electronics Engineer &amp; Web Developer</h3>
        <h3><span class="highlight">Experience</span> 2+</h3>
      </div>

    </div>
  )
}

export default Home
