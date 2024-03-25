import React from "react";
import logo from'./logo.jpg'
const heading = ({name, place})=>{
    return (
        <div className="logoAndName">
            <div className="logo"><img src= {logo} alt="img loading"></img></div>
            <div className="instName">
                <div className="hname">{name}</div>
                <div className="hplace">{place}</div>
            </div> 
        </div>
    )
}
export default heading;