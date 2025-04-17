import {EnvelopeIcon} from "@heroicons/react/24/solid";
import React from "react";

export default function Mail(){
    return(
        <div className="flex items-center space-x-2">
            <EnvelopeIcon className="h-24 w-24 text-[var(--icons)]" />
            <span className="text-[var(--icons)] text-2xl">bioaddmed@gmail.com</span>
        </div>
    );
}