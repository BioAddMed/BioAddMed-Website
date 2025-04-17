"use client";
import React from "react";

//TODO: Poprawić lub USUNĄĆ DARK THEME


import Adres from "@/components/kontakt/socjale/Adres";
import Mail from "@/components/kontakt/socjale/Mail";
import Facebook from "@/components/kontakt/socjale/Facebook";
import Instagram from "@/components/kontakt/socjale/Instagram";
import Prezes from "@/components/kontakt/zarzad/Prezes";
import Wiceprezes from "@/components/kontakt/zarzad/Wiceprezes";



export default function Page() {

    return (
        <div className="flex flex-col h-screen p-8">
            <h1 className="text-4xl font-bold text-[var(--text-cont)] mb-4">Kontakt</h1>
            <div className="flex flex-row flex-grow">
                <div className="w-1/2 flex flex-col justify-start items-start space-y-4">
                    <p className="text-lg text-[var(--text-cont)]">
                        Jeśli masz pytania lub chcesz się z nami skontaktować, skorzystaj z poniższych danych kontaktowych.
                    </p>
                    <div className="h-8"></div>
                    <div className="flex flex-col space-y-4">
                        <Adres />
                        <Mail />
                        <Facebook />
                        <Instagram />
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-start items-center space-y-6 p-4">
                    <div className="flex flex-col items-center">
                        <Prezes />
                        <div className="h-8"></div>
                        <Wiceprezes />
                        {/*
                Do uzupełnienia po wyborze dodatkowego członka zarządu
                */}
                    </div>
                </div>
            </div>
        </div>
    );
}