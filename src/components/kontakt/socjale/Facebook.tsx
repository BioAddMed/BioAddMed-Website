import {FaFacebook} from "react-icons/fa";
import React from "react";

export default function Facebook(){
    return(
        <div className="flex items-center space-x-2">
            <FaFacebook className="h-24 w-24 text-[var(--icons)]" />
            <span className="text-[var(--icons)] text-2xl">/KN Bioaddmed</span>
        </div>
    );

}