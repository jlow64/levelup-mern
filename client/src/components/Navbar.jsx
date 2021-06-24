import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

const Navbar = () => {
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <nav className='nav-menu' >
                <ul className='nav-menu-items'>
                    <li className='nav-title'>
                        <h2>Levelup <br/> Works</h2>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path} >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;