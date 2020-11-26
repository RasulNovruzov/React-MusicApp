import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Menu.module.css'

const Menu = () => {
    return (
        <div>
            <div className={s.main}>
                <nav>
                    <ul className={s.snip1189}>
                        <h1 id="logo">LOGO</h1>
                        <li class="current"><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='about'>About</NavLink></li>
                        <li><NavLink to='blog'>Blog</NavLink></li>
                        <li><NavLink to='services'>Services</NavLink></li>
                        <li><NavLink to='favorites'>Favorites</NavLink></li>
                        <li><NavLink to='contact'>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Menu;