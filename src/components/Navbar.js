import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './navbar.module.css';

const Navbar = () => {

    const [isShow, setIsShow] = useState(false);
    
    const onToggle = ()=> {
        const toggle = document.querySelector('ul');
        if(!isShow) {
            toggle.style.display = 'flex';
            setIsShow(true);
        }
        else {
            toggle.style.display = 'none';
            setIsShow(false);
        }
    }
    
    return (
        <nav id={styles.navbar}>

            <div id={styles.logo}>
                <h2>Alpha-News</h2>
                <div id={styles.toggle} onClick={onToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <ul id="navLinks">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/business'>Business</Link></li>
                <li><Link to='/entertainment'>Entertainment</Link></li>
                <li><Link to='/health'>Health</Link></li>
                <li><Link to='/science'>Science</Link></li>
                <li><Link to='/sports'>Sports</Link></li>
                <li><Link to='/technology'>Technology</Link></li>
            </ul>

        </nav>
    )
}

export default Navbar;
