"use client";
import { JSX, useState } from "react";
import ListaProjektow from "../../components/ListaProjektów";
import Franek2 from "../../components/projekty/Franek2";
import Bioreaktor from "../../components/projekty/Bioreaktor";
import Orteza from "../../components/projekty/Orteza";
import Franek from "../../components/projekty/Franek";
import Bioploter from "../../components/projekty/Bioploter";
import Edugut from "../../components/projekty/Edugut";
import Kampus3D from "../../components/projekty/Kampus3D";
export default function Page() {

const [selectedProject, setSelectedProject] = useState("Franek 2.0");

    const projektKomponenty: Record<string, JSX.Element> = {
        "Franek 2.0": <Franek2 />,
        "Bioreaktor": <Bioreaktor />,
        "Orteza": <Orteza />,
        "Franek": <Franek />,
        "Bioploter": <Bioploter />,
        "Edugut": <Edugut />,
        "Kampus 3D": <Kampus3D />,
    };

    return (
        <div className="flex flex-row m-4 h-[calc(100vh-12rem)]">
            <ListaProjektow onSelect={setSelectedProject} selectedProject={selectedProject} />
            <div className="flex-grow p-4 mx-4 border rounded-lg bg-gradient-to-r from-yellow-200 to-pink-300 w-max overflow-auto">
            {projektKomponenty[selectedProject]} {}
            </div>
        </div>
    );
}