import React from 'react'
import { Button } from './Button'
import './Footers.css'
import { Link } from 'react-router-dom'

function Footers() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className='footer-subscription-heading'>
            Maybe you will get notified someday.
        </p>
        <p className='footer-subscription-text'>
            Not subscribing to the email by clicking.
        </p>
        <div className='input-areas'>
            <form>
                <input type='email' 
                name='email' 
                placeholder='Your Email' 
                className='footer-input'/>
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </div>
      </section>
    </div>
  )
}

export default Footers
