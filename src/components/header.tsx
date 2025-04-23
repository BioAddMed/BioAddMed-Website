"use client"
import { useState } from "react";
import { NavElement } from "./navElement";
//TODO: ROZWIĄZAĆ PROBLEM Z LOGIEM PRZY JASNYM MOTYWIE
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-[var(--bar)] py-3 pr-8 w-screen relative">
            <div className="flex items-center justify-between">
                <img src="logo.png" alt="BioAddMed Logo" className="h-15 px-2" />
                <button
                    className="block md:hidden text-[var(--text)]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                <div
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } md:block absolute top-full right-0 bg-[var(--bar)] w-3/4 md:static md:w-auto rounded-lg`}
                >
                    <nav className="flex flex-col md:flex-row md:space-x-6 text-[var(--text)] justify-end mb-2 md:mb-0 p-4">
                        <NavElement text="Aktualności" link="/Aktualnosci" onClick={() => setIsMenuOpen(false)} />
                        <NavElement text="Projekty" link="/Projekty" onClick={() => setIsMenuOpen(false)} />
                        <NavElement text="Współprace i sponsorzy" link="/Wspolprace" onClick={() => setIsMenuOpen(false)} />
                        <NavElement text="Kontakt" link="/Kontakt" onClick={() => setIsMenuOpen(false)} />
                    </nav>
                </div>
                <div className="h-0.5 bg-[var(--orange)] mt-1 w-[calc(100vw-15rem)] absolute bottom-3 right-1" />
            </div>
        </header>
    );
}

export { Header };
