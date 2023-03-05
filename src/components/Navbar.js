import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars, faPills} from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button.js';
import './Button.css';
import './Navbar.css';

function Navbar()
{
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const location = useLocation();

    const showButton = () => {
        if (location.pathname === '/sign-up') {
            setButton(false);
        }
        if(window.innerWidth <= 960) {
            setButton(false);
        } else{
            setButton(true);
        }
    };

    
    useEffect(() =>{
        showButton();
    },[location.pathname]);
    

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        WeCare &nbsp; <FontAwesomeIcon icon={faPills} />
                        {/*&nbsp works as space*/}
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/AboutUs' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Support' className='nav-links' onClick={closeMobileMenu}>
                                Contact/Support
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Product
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Product</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar 