"use client"
import React, { useEffect, useRef } from "react";
import "../../app/globals.css";
import AppBar from "./appbar";

interface MenuItemListProps{
    txt : string,
}

function Menu({showValue, toggleFunc, isCross} : AppbarProps) :React.JSX.Element{
    const menuRef = useRef<HTMLDivElement>(null);

    function MenuListItem({txt} : MenuItemListProps):React.JSX.Element{
        return (
            <p className="font-thin hover:font-bold pl-10 py-5 text-5xl text-gray-200 hover:text-white">
                {txt}
            </p>
        );
    }

    useEffect(()=>{
        if(showValue){
            menuRef.current?.classList.add("expanded");
        }else{
            menuRef.current?.classList.remove("expanded");
        }
    },[showValue]);

    return (
        <div 
        ref={menuRef}
        className="menu">
            <div className={`${showValue ? "block" : "hidden"}`}>
                <AppBar showValue={showValue} toggleFunc={toggleFunc} isCross={isCross}/>
            </div>
            <div className={`absolute top-0 bottom-0 flex flex-col justify-center ${showValue ? "block" : "hidden"}`}>
                <MenuListItem txt="Works"/>
                <MenuListItem txt="Process"/>
                <MenuListItem txt="About"/>
                <MenuListItem txt="Content"/>
            </div>
            <div className={`h-20 bottom-0 left-0 right-0 absolute flex ${showValue ? "block" : "hidden"} text-2xl text-white border-t border-gray-400`}>
                <button className="h-20 w-1/2 border-r border-gray-400">Call</button>
                <button className="h-20 w-1/2 ">Mail</button>
            </div>
        </div>
    );
}

export default Menu;