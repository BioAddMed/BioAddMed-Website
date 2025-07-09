"use client";
import {JSX, useState} from "react";
import Botland from "@/components/wspolprace/Botland";
import DPIN from "@/components/wspolprace/DPIN";
import PWr from "@/components/wspolprace/PWr";
import Manus from "@/components/wspolprace/Manus";
import DCD3D from "@/components/wspolprace/DCD3D";
import React from "react";
import Image from "next/image"



interface WspolpraceData{
    /*
    Interfejs WspolpraceData definiuje strukturę danych dla współprac. Zawiera
    component, który jest renderowany w zależności od stanu isExpanded oraz
    image, które są wyświetlane w zależności od stanu isExpanded.
     */

    component: (props: { isExpanded: boolean }) => JSX.Element | null;
    image: string;
}

export default function Page() {
    const [selectedWspolprace, setSelectedWspolprace] = useState<string | null>(null);


    const wspolprace: Record<string, WspolpraceData> = {
        Botland: {
            component: Botland,
            image: "Botland-logo.png",
        },
        DPIN: {
            component: DPIN,
            image: "dpin.png",
        },
        PWR: {
            component: PWr,
            image: "pwr_logotyp_beztla.png",
        },
        Manus: {
            component: Manus,
            image: "logo_2019_cz.webp",
        },
        DCD3D: {
            component: DCD3D,
            image: "dcd3d.png",
        },
    };


    return (
        <div className="flex flex-col m-4 h-[calc(100vh-12rem)]">
            {!selectedWspolprace && (
                <h1 className="text-3xl font-bold text-center mb-6 text-[var(--text-cont)]">
                    Nasze Współprace
                </h1>
            )}

            <div className="flex-grow flex flex-row">
                {!selectedWspolprace ? (
                    <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:p-8 md:p-16 border rounded-lg bg-[var(--background)] overflow-auto">
                        {Object.entries(wspolprace).map(([name, data]) => (
                            <div
                                key={name}
                                className="cursor-pointer p-4 border rounded-lg bg-[var(--background)] flex flex-col items-center justify-center"
                                onClick={() => setSelectedWspolprace(name)}
                            >
                                <Image
                                    src={data.image}
                                    alt={`${name} Thumbnail`}
                                    className="rounded-lg px-7"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex-grow p-4 mx-4 border rounded-lg bg-[var(--background)]">
                        <button
                            className="mb-4 p-2 px-3 bg-[var(--icons)] text-[var(--background)] rounded-lg cursor-pointer"
                            onClick={() => setSelectedWspolprace(null)}
                        >
                            Wróć
                        </button>
                        <div className="flex flex-col items-center">
                            <div className="mb-4">
                                {React.createElement(wspolprace[selectedWspolprace].component, {
                                    isExpanded: true,
                                })}
                            </div>
                            <Image
                                src={wspolprace[selectedWspolprace].image}
                                alt={`${selectedWspolprace} Logo`}
                                className="rounded-lg max-h-[70vh]"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

}