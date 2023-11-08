"use client"
import React, { useEffect, useRef } from "react";
import "../../app/globals.css";



function AppBar({showValue, toggleFunc, isCross} : AppbarProps) :React.JSX.Element{
    const iconString : string = isCross ? "fa-solid fa-xmark fa-2xl" : "fa-solid fa-bars fa-2xl";
    const drawerRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            <header>
                <div className="">
                    <i className={`iconBox fa-brands fa-slack fa-2xl ${isCross ? "text-white" : "text-black"}`}></i>
                </div>
                <button
                onClick={toggleFunc}
                ref={drawerRef}>
                    <i className={`${iconString} ${isCross ? "text-white" : "text-black"}`}></i>
                </button>
            </header>
        </>
    );
}

export default AppBar;