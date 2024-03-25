import React from "react";
import slide from "./slide1.jpg"
const Slide = ()=>{
    return(
        <div className="slide">
            <iframe width="300" height="500" src="https://www.youtube.com/embed/m2-1GGrM-O8?si=VpieTKszoL8lH0Zt " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <img src={slide}></img>
        </div>
    )
}
export default Slide;