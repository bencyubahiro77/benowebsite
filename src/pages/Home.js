import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='homepic'>

        {/* <div className='pic1'>
          <button></button>
          <h1>Benjamin CYUBAHIRO</h1>
          <button></button>
        </div> */}
        {/* <p>Electronics Engineer & UI/UX Designer </p> */}
        <div className='pic2'>
            <button><Link to="/about" className="li">Hire Me</Link></button>
            <button><Link to="/contact" className="li">Contact Me</Link></button>
        </div>
    </div>
  )
}

export default Home
