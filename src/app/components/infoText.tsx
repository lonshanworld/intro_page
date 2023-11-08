"use client"

import React from "react";
import "../../app/globals.css"

function InfoText() : React.JSX.Element{
    return (
        <div className="infoText flex flex-col pt-20 pl-7 sm:pl-24">
                <span className="text-black font-bold text-3xl ">Smart & clean design</span>
                <span className="font-light text-2xl">That's A.11 studio</span>
            </div>
    );
}

export default InfoText;