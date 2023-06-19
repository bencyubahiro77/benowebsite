/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import pic1 from '../images/istockphoto-1252766024-612x612.jpg';
import pic2 from '../images/benjamincrop.png'
import Pdf from '../Documents/MyResume.pdf';


const About = () => {

  return (
    <body>
      {/* <div className="contimg">
         <div className="contact2">
          <h1>ABOUT ME</h1>
        </div>
     </div> */}
    <div className="about">        
        <div className="profe">
           <img src= {pic2} alt=" " />

           <div className="profe-t">
                <h1>Hi, I'm Benjamin</h1>
                <p>
                Benjamin Cyubahiro is a dynamic Electronics & Telecommunication Engineer and Software Developer, 
                possessing over 2 years of experience in the technology industry with a strong work ethic and 
                a goal to become one of the best in the African technology sector.
                </p>
                <p>
                I am currently employed at Andela in the ATLP Program as a Trainee. As part of the program,
                 we are collaborating on the development of an E-commerce website using PERN technology.
                </p>
                <button><a href = {Pdf} target = "_blank">Resume</a></button>
           </div>
        </div>  

       <div className="div-with-image">
            <div className="image-container">
            <img src= {pic1} alt=" " />
            </div>
            <div className= "text-container" >
                <h1>Biography</h1>
                <p>
                Benjamin Cyubahiro, a native of Rwanda, was raised in a bilingual environment with both Rwandaise parents.<br /> 
                He is proficient in both French and English. Currently residing in Rwanda. Benjamin completed his Bachelor's <br /> 
                degree in Electronics and Telecommunication at the University of Rwanda in 2023, with a specialization in <br /> 
                software-related subjects.
                </p>
                <p>
                Currently, he is anticipating his graduation, which is expected to take place around September 2023. <br />
                In December 2022, he made the decision to join Andela for their training program while waiting for graduation.<br /> 
                Once he graduates, his goal is to embark on his career in software development and gain extensive experience in <br />
                the exciting world of technology. He thoroughly enjoys every moment he spends in software development and is<br /> 
                enthusiastic about the journey ahead.
                </p>
                <p>
                In addition to my professional life, I'm a passionate supporter of Manchester City. Being a true Mancunian is <br />
                ingrained in me, and my love for football has been a part of me since childhood. Football brings me immense joy,<br /> 
                and it holds a special place in my heart. It serves as a form of therapy when I'm feeling low, and it has become a <br />
                cherished hobby. The sport brings me happiness, and my friends are well aware of my passion for it.Whenever <br /> 
                we spend time together, sports conversations naturally arise, creating enjoyable moments of camaraderie.
                </p>
            </div>
       </div>
    </div> 
    </body>
  );
}
export default About
