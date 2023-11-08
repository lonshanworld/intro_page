"use client"

import React from "react";
import ImageOne from "../../assets/4a5235_fb0c6c836a6643c484251a417d3e191b~mv2.webp";
import ImageTwo from "../../assets/beautiful-nature-scenes-images-1920x1200-wallpaper-preview.jpg";
import ImageThree from "../../assets/beautiful-pictures-nature-waterfall-wallpaper-preview.jpg";
import "../../app/globals.css";

function BannerAutoScroll() : React.JSX.Element{

    function ItemBox() : React.JSX.Element{
        return (
            <div className="itemBox h-44">
                <div className="h-44 w-96 object-contain px-4">
                    <img
                    className="h-44 w-96" 
                    src={ImageOne.src} ></img>
                </div>
                <div className="flex flex-col justify-between h-44">
                    <img
                    className="h-20" 
                    src={ImageTwo.src}></img>
                    <img
                    className="h-20" 
                    src={ImageThree.src}></img>
                </div>
            </div>
        );
    }

    return (
        <div className="whitespace-nowrap overflow-x-scroll flex pt-1">
            <ItemBox/>
            <ItemBox/>
            <ItemBox/>
            <ItemBox/>
            <ItemBox/>
            <ItemBox/>
        </div>
    );
}

export default BannerAutoScroll;