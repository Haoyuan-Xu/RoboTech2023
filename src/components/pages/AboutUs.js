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
              <img src={"./images/alex.jpg"} alt="Haoyuan Xu"/>
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
              <img src={"/images/Alice.jpg"} alt="Alice Zhang" />
              <div className="container">
                <h2>Alice Zhang</h2>
                <p className="title">AI & Video</p>
                <p>First-year computer science student</p>
                <p>zhanga@ufl.edu</p>
              </div>
            </div>
          </div>
  
          <div className="column">
            <div className="card">
              <img src={"/images/Jingyi.jpg"} alt="Jingyi Fu" />
              <div className="container">
                <h2>Jingyi Fu</h2>
                <p className="title">Documentation</p>
                <p>First Year Data Science student at UF</p>
                <p>jingyifu@ufl.edu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
            <div className="card">
              <img src={"/images/Yiwei.jpg"} alt="Yiwei Bian"/>
              <div className="container">
                <h2>Yiwei Bian</h2>
                <p className="title">3D Modeling</p>
                <p>Sophomore Computer Engineer at UF</p>
                <p>yiweibian@ufl.edu</p>
              </div>
            </div>
          </div>
      </>
    );
  }
  
  export default AboutUs;