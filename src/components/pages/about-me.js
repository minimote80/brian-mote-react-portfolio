import React from 'react'

import profilePicture from "../../../images/headshot/headshot2.jpg"

export default function() {
  return (
    <div>

      <div className="content-wrapper">

        <div 
        className="left-column" 
        style={{ 
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"  
      }}
        />
  
      

        <div className="right-column">
            <h2 className="hello-world-header">Hello World</h2> 
            <div className="about-me-content-wrapper"> 
            <p>
            My name is Brian Mote and I'm a full-stack web developer 
            I may be new to the game, but in six months I've put more time
            behind the keyboard than most college students do in four years. Why?
            Coding is my passion--along with writing, snowboarding, and being home with the dogs. 
            Since Feb, 2020 I have added the following to my skillset: 
            Javascript, React, Python, CSS, HTML, and SQL. 
            </p>
            </div>
            
            
            

              
        </div>
       
      </div>
    </div>
  );
}

