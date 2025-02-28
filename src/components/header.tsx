import { NavElement } from "./navElement";

function Header() {
    return (
        <header className="bg-[var(--bar)] py-4 pr-8 shadow-md">
            <div className="flex items-center">
                <img src="logo.png" alt="BioAddMed Logo" className="h-15 px-2"/>
                <div className="flex-grow">
                    <nav className="flex space-x-6 text-[var(--text)] justify-end mb-2">
                        <NavElement text="Aktualności" link="/Aktualnosci"/>
                        <NavElement text="Projekty" link="#"/>
                        <NavElement text="Współprace i sponsorzy" link="#"/>
                        <NavElement text="Kontakt" link="#"/>
                    </nav>
                    <div className="h-0.5 bg-[var(--orange)]"></div>
                </div>
            </div>
        </header>
    );
}

export { Header };
