import {FaInstagram} from "react-icons/fa";
import React from "react";

export default function Instagram(){
    return(
        <div className="flex items-center space-x-2">
            <FaInstagram className="h-24 w-24 text-[var(--icons)]" />
            <span className="text-[var(--icons)] text-2xl">@bioaddmed</span>
        </div>
    );

}