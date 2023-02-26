import "./Empty.css"
import React from 'react';
import { Navbar } from "../Navbar/Navbar";
import { Sidebars } from "../SideBars/Sidebars";
import { Emptyimage } from "../../Images";

function Empty() {
    return (<>
        <Navbar />
        <Sidebars />
        <div>
            <div className="empty-image">
                <img className="img-empty" src={Emptyimage} alt="" />
                <h2 className="margin0">Your Watch list is Empty</h2>
            </div>
        </div>
    </>)
}
export {Empty}