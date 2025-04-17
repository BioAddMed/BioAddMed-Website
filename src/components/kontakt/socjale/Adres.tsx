import {MapPinIcon} from "@heroicons/react/24/solid";
import React from "react";

export default function Adres(){
    return(
        <div className="flex items-center space-x-2">
            <MapPinIcon className="h-24 w-24 text-[var(--icons)]" />
            <div className="flex flex-col">
                <span className="text-[var(--icons)] text-2xl">Politechnika Wrocławska</span>
                <span className="text-[var(--orange)] text-sm">Wroclaw University of Science and Technology</span>
            </div>
        </div>
    )
}