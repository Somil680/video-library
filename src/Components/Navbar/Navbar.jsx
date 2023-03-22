import React from 'react';
import { FaBars } from "react-icons/fa";
import { BsSearch, BsMicFill } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";

import { logo } from '../../Images';

import "./Navbar.scss"

function Navbar() {
    const styles = {
        navbar: {
            container: "bfy__navbar__container",
            companyName: {
                container: "bfy__navbar__companyName-container",
                barsIcon: "bfy__navbar__companyName-barsIcon",
                content: "bfy__navbar__companyName-content",
                logo: "bfy__navbar__companyName-logo",
                title: "bfy__navbar__companyName-title",
            },
            searchBar: {
                container: "bfy__navbar__searchBar-container",
                searchInput: "bfy__navbar__searchBar-searchInput",
                searchIcon: "bfy__navbar__searchBar-searchIcon",
                micIcon: "bfy__navbar__searchBar-micIcon",

            },
            Icons: {
                container: "bfy__navbar__Icons-container",
                icon: "bfy__navbar__Icons-icon",
            }

        }
    }
    const getCompanyLogoView = () => (
        <div className={styles.navbar.companyName.container}>
            <FaBars className={styles.navbar.companyName.barsIcon} />
            <div className={styles.navbar.companyName.content}>
                <img src={logo} alt="" className={styles.navbar.companyName.logo} />
                <h3 className={styles.navbar.companyName.title}>ingeify</h3>
            </div>
        </div>
    )
    const getSearchView = () => (
        <div>
            <fieldset className={styles.navbar.searchBar.container}>
                <input type="search" name="" className={styles.navbar.searchBar.searchInput} placeholder='Search..' />
                <div className={styles.navbar.searchBar.searchIcon}><BsSearch /></div>
                <div className={styles.navbar.searchBar.micIcon}><BsMicFill /></div>
            </fieldset>
        </div>
    )
    const getIconsView = () => (
        <div className={styles.navbar.Icons.container}>
            <span className={styles.navbar.Icons.icon}> <IoIosNotificationsOutline /></span>
            <span className={styles.navbar.Icons.icon}><RiAccountCircleFill /></span>

        </div>
    )

    return (
        <nav className={styles.navbar.container}>
            {getCompanyLogoView()}
            {getSearchView()}
            {getIconsView()}
        </nav>
    )
}
export { Navbar }