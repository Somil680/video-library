import React from 'react';
import "./Navbar.css"
import {BsSearch ,BsMicFill } from "react-icons/bs";
import {IoIosNotificationsOutline} from "react-icons/io";
import {RiAccountCircleFill} from "react-icons/ri";
import { FaBars, FaPlay } from "react-icons/fa";
import { ImPlay } from "react-icons/im";
import { logo } from '../../Images';
function Navbar() {

    return (<>
        <nav className='Navbar-container'>
            <div className='Brand-name'>
                <span className='nav-bar-icon'> <FaBars /></span>
                <span className='brand'>
                    <span  className='ImPlay'>
                      <img src={logo} alt=""  className='ImPlay' />
                    </span>
                 {/* <span className='Faplay-icon'><FaPlay /></span> */}
                <h3 className='font-brand' >ingeify</h3>
                </span>
            </div>

            <div>
                <fieldset className='fieldset-in-search'>
                    <input type="search" name="" id="search" placeholder='Search..' />
                    <span className="search-icon"><BsSearch  /></span>
                <span className='icon mic-icon'><BsMicFill/></span>
                </fieldset> 
            </div>

            <div className='right-side-icon'>
               <span className='icon'> <IoIosNotificationsOutline /></span>
               <span className='icon'><RiAccountCircleFill/></span>

            </div>
        </nav>
   </> )
}
export {Navbar}