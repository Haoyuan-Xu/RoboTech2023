import React from "react";
import '../../App.css'
import './AboutUs.css'

function AboutUs() {
    return (
      <>
        <div className="about-section">
          <h1>About Us Page</h1>
          <p></p>
          <p></p>
        </div>
  
        <h2 style={{textAlign: 'center'}}>Our Team</h2>
  
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={"/images/img-1.jpg"} alt="Haoyuan Xu" style={{width: '100%'}} />
              <div className="container" >
                <h2>Haoyuan Xu</h2>
                <p className="title">Web Designer</p>
                <p>Sophomore Computer Engineer</p>
                <p>haoyuan.xu@ufl.edu</p>
              </div>
            </div>
          </div>
  
          <div className="column">
            <div className="card">
              <img src={"/images/img-2.jpg"} alt="Alice Zhang" style={{width: '100%'}} />
              <div className="container">
                <h2>Alice Zhang</h2>
                <p className="title">AI & Video</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>zhanga@ufl.edu</p>
              </div>
            </div>
          </div>
  
          <div className="column">
            <div className="card">
              <img src={"/images/img-3.jpg"} alt="Jingyi Fu" style={{width: '100%'}} />
              <div className="container">
                <h2>Jingyi Fu</h2>
                <p className="title">Documentation</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
            <div className="card">
              <img src={"/images/img-3.jpg"} alt="Yiwei Bian" style={{width: '100%'}} />
              <div className="container">
                <h2>Yiwei Bian</h2>
                <p className="title">3D Modeling</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
              </div>
            </div>
          </div>
      </>
    );
  }
  
  export default AboutUs;