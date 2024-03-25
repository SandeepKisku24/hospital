import React from "react";

const serviceBox = ({titleIcon, title, type, content})=>{
    return(
        <div className= {type} >
                
        <div className="titleOfservice"> 
        <p><span class="material-symbols-outlined">{titleIcon}</span></p>
        <p>{title} </p>
        </div>
        
        <div className="contentOfService">
                {content}
        </div>
        </div>
    )
}
export default serviceBox;