import React, { Component, Linking } from 'react';

import {FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

import profilePicture from "../../../images/backgrounds/code-background.jpg";

export default class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalOpen : false
    }

    this.handleSuccessfulNewEmailSubmission = this.handleSuccessfulNewEmailSubmission.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleModalClose() {
    this.setState({
      isModalOpen: false
    });
  }

  handleSuccessfulNewEmailSubmission() {
    this.setState({
      isModalOpen: false
    });
  }

  render() {
    return (


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
  
            <div className="contact-bullet-points">

              <div className="bullet-point-group">
                <div className="icon"> 
                  <a id="phone-icon" href="tel:+12087556159"><FaPhone /></a> 
                </div>
                <div className="text">(208)755-6159</div>
              </div>

              <div className="bullet-point-group">
                <div className="icon">
                  <a id="email-icon" href="mailto:bmote@b42tech.com"><FaEnvelope /></a> 
                </div>

                <div className="text">bMote@b42tech.com</div>
              </div>

              <div className="bullet-point-group">
                <div className="icon">
                  <a id="linkedin-icon" href="https://www.linkedin.com/in/brian-mote-673099a3/"><FaLinkedin /></a>  
                </div>

                <div className="text">LinkedIn</div>
              </div>
            </div>
            

          </div>
         
        </div>
    
    );
  }
}

