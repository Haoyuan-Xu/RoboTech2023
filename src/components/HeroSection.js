import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>We Help You Stay Organized</h1>
            <p>Check out our medicine dispenser!</p>
            <div className="hero-btns">
                <Button className='btns' 
                buttonStyle='btn--outline-white'
                buttonSize='btn--large'
                >
                    Learn More
                </Button>
                <Button className='btns' 
                buttonStyle='btn--primary-white'
                buttonSize='btn--large'
                >
                    Watch Demo &nbsp; <FontAwesomeIcon icon={faPlayCircle} />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;