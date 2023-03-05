import React from 'react';
import "./Products.css";

function Products() {
  return (
    <div className='product-container'>
        <h1 className='head-main'>Why choose WeCare?</h1>
        <p className='head-second'>WeCare is a smart pill or medicine dispenser that has various functions.</p>
        <h1>Features</h1>
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
    </div>
  )
}

export default Products
