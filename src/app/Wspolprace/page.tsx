"use client";
import {JSX, useState} from "react";
import Botland from "@/components/wspolprace/botland";
import DPIN from "@/components/wspolprace/dpin";
import PWR from "@/components/wspolprace/pwr";
import Manus from "@/components/wspolprace/manus";
import DCD3D from "@/components/wspolprace/dolnoslaskiecentrumdruku";
import React from "react";



interface WspolpraceData{
    /*
    Interfejs WspolpraceData definiuje strukturę danych dla współprac. Zawiera
    component, który jest renderowany w zależności od stanu isExpanded,
    thumbnailImage, który jest używany do wyświetlenia miniatury (przed rozszerzeniem)
    oraz expandedImage, który jest używany do wyświetlenia pełnego obrazu (po rozszerzeniu).
     */

    component: (props: { isExpanded: boolean }) => JSX.Element | null;
    thumbnailImage: string;
    expandedImage: string;
}

export default function Page() {
    const [selectedWspolprace, setSelectedWspolprace] = useState<string | null>(null);


    const wspolprace: Record<string, WspolpraceData> = {
        Botland: {
            component: Botland,
            thumbnailImage: "Botland-logo.png",
            expandedImage: "Botland-logo.png",
        },
        DPIN: {
            component: DPIN,
            thumbnailImage: "dpin.png",
            expandedImage: "dpin.png",
        },
        PWR: {
            component: PWR,
            thumbnailImage: "pwr_logotyp_beztla.png",
            expandedImage: "pwr_logotyp_beztla.png",
        },
        Manus: {
            component: Manus,
            thumbnailImage: "logo_2019_cz.webp",
            expandedImage: "logo_2019_cz.webp",
        },
        DCD3D: {
            component: DCD3D,
            thumbnailImage: "dcd3d.png",
            expandedImage: "dcd3d.png",
        },
    };


    return (
        <div className="flex flex-col m-4 h-[calc(100vh-12rem)]">
            {!selectedWspolprace && (
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Nasze Współprace
                </h1>
            )}

            <div className="flex-grow flex flex-row">
                {!selectedWspolprace ? (
                    <div className="flex-grow grid grid-cols-3 gap-1 p-16 border rounded-lg bg-white overflow-auto">
                        {Object.entries(wspolprace).map(([name, data]) => (
                            <div
                                key={name}
                                className="cursor-pointer p-4 border rounded-lg bg-white"
                                onClick={() => setSelectedWspolprace(name)}
                            >
                                <img
                                    src={data.thumbnailImage}
                                    alt={`${name} Thumbnail`}
                                    className="rounded-lg h-20 px-7"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex-grow p-4 mx-4 border rounded-lg bg-white overflow-auto">
                        <button
                            className="mb-4 p-2 bg-gray-800 text-white rounded"
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
                            <img
                                src={wspolprace[selectedWspolprace].expandedImage}
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