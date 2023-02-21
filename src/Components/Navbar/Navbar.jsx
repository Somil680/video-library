import React from 'react';
import "./Navbar.css"
import {BsSearch } from "react-icons/bs";
import {IoIosNotificationsOutline} from "react-icons/io";
import {CgProfile} from "react-icons/cg";
import {FaBars} from "react-icons/fa";

function Navbar() {

    return (<>
        <nav className='Navbar-container'>
            <div className='Brand-name'>
               <span className='nav-bar-icon'> <FaBars/></span>
                <h3 className='brand'>Playtube</h3>
            </div>

            <div>
                <fieldset className='fieldset-in-search'>
                    <input type="search" name="" id="search" placeholder='Search..' />
                    <span className="search-icon"><BsSearch  /></span>
                </fieldset>                
            </div>

            <div className='right-side-icon'>
               <span className='icon'> <IoIosNotificationsOutline /></span>
               <span className='icon'><CgProfile/></span>

            </div>
        </nav>
   </> )
}
export {Navbar}