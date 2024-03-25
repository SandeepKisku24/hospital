import React from "react";
import ServiceBox from "./serviceBox";
const service = ()=>{
    return(
        <div className="topService">
            <ServiceBox titleIcon ={"stethoscope"} title = {"Doctors 24 x 7"} type={ "one"} content = {"Our doctors are available round the clock for the service of the people in need. The services rendered by our professional doctors are parallel with that of any outstanding hospitals."}/>
            <ServiceBox titleIcon ={"airport_shuttle "} title = {"Emergency Service"} type={ "two"} content = {"Mercy Hospital Poreyahat is equiped with ambulance facility which provides top notch emergency services with oxygen supply and temperature controlling equiments"}/>
            <ServiceBox titleIcon ={"inpatient"} title = {"IPD and OPD"} type={ "one"} content = {"Mercy Hospital Poreyahat has general 100+ beds, well equiped ICU beds and OTs. We provide excellent IPD and OPD services. "}/>
            <ServiceBox titleIcon ={"biotech"} title = {"Lab Tests"} type={ "two"} content = {"Our hospital has well equiped laboratory and highly experienced lab operators. We perform all types of lab tests within our premises and provide accurate results. "}/>

        </div>
    )
}
export default service;