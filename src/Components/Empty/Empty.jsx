import React from 'react';

import { Navbar } from "../Navbar/Navbar";
import { MenuBar } from "../MenuBar/MenuBar";
import { Emptyimage } from "../../Images";

import "./empty.scss"

function Empty() {

    const styles = {
        container: "bfy__empty__container",
        image : "bfy__empty__image"
    }
    const getEmptyPageView = () => (
        <div>
            <div className={styles.container}>
                <img className={styles.image} src={Emptyimage} alt="" />
                <h2 >Your Watch list is Empty</h2>
            </div>
        </div>

    )
    return(
        <div>
        <Navbar />
        <MenuBar />
        {getEmptyPageView()}
        </div>
    )
}
export {Empty}