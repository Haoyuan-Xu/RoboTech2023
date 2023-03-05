import React from 'react';
import "./Products.css";

function Products() {
  return (
    <div className='product-container'>
        <h1 className='head-main'>Why choose WeCare?</h1>
        <p className='intro'>WeCare is a smart pill or medicine dispenser that has various functions.</p>
        <img className='img2' src='./images/PillDispensor.png' alt= ""/>
        <h1 className='head-second'>Core Features</h1>
        <p  className='patient'>
            Patient-input: So, there comes a website, after the first meeting between 
            the patient and the doctor, and their accounts would be linked together. 
            There would be an input box for the patients. Patients can write their 
            feelings & feedback whenever they want. There is also an “urgent” click, 
            only the messages that are “urgent” are read by doctors.
        </p>
        <p className='doctor'>
            Doctor-response: The doctors would read the messages labeled as “urgent”. 
            While reading, they can check the patients’ past feedback to get a better 
            idea of the patient’s situation. After prescribing and providing suggestions 
            for the patients, a new treatment should be given, and the suggestions given 
            to the patients should display on the screen on the pill box.
        </p>
        <p className='pillBox'>
            Pill Box: The pill box can store 4 kinds of medicine. The pill box can 
            automatically drop medicine every day at a specific time. The box can receive 
            messages from the “website”. The "website" can send messages to the box. 
            Patients may also check the number of days the medications so that they may 
            know to schedule a time to go to the hospital
        </p>
        <h1 className='head-second'>Highlights</h1>
        <div className='highlight-container'>
            <ul>
                <li className='highlight-list'>1. The patients do not need to regularly go to the hospital for some “slight”/ “small” problems anymore, their life routine can remain the same. Appointment, registration, and lining up require a huge amount of time. This time can be saved using PROJECT.</li>
                <li className='highlight-list'>2.  The PROJECT makes it possible to not depend on real-time communication.</li>
                <li className='highlight-list'>3. This PROJECT can benefit patients who don’t like going to the hospital or can’t express themselves well in front of the doctor</li>
            </ul>
        </div>
        <h1 className='head-second'>Dispenser Mechanism</h1>
        <img className='img2' src='./images/Dispenser2.png' alt="" />
    </div>
  )
}

export default Products
