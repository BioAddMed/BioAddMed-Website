import React from "react";

export default function Wiceprezes(){
    return(
        <div className="flex flex-col items-center">
            <img
                src="https://placehold.co/150x150" //Zastąpić prawdziwym zdjęciem
                alt="Prezes"
                className="rounded-full mb-2"
                width="200"
                height="200"
            />
            <span className="text-xl font-bold text-[var(--text-cont)]">Gabriel Pankowski</span>
            <span className="text-lg font-semibold text-[var(--orange)]">Zastępca Prezesa</span>
        </div>
    );

}