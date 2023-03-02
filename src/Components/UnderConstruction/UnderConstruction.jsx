import "./UnderConstruction.css"
import React from 'react';
import { Navbar } from "../Navbar/Navbar";
import { Sidebars } from "../SideBars/Sidebars";
import { underwork } from "../../Images";

function UnderConstruction() {
    return (<>
        <Navbar />
        <Sidebars />
        <div>
            <div className="work-image">
                <img className="work-empty" src={underwork} alt="" />
                <h2 className="margin0">This Page is Under Construction</h2>
            </div>
        </div>
    </>)
}
export {UnderConstruction}