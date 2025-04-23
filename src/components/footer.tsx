function Footer() {

    return (
        <header className="bg-[var(--background)] py-3 pr-8 w-screen sticky bottom-0 flex z-10 justify-between items-center border border-[var(--bar)] mt-10">
            <div className="text-[var(--text)] text-sm px-2 flex justify-between items-center w-max">
                <img src="pwr_logotyp_beztla.png" alt="Logo Poliechniki Wrocławskiej" className="h-15 px-2" />
                <img src="logo-w10.png" alt="Logo Wydziału Mechanicznego" className="h-15 px-2" />
                <img src="logo_2019_cz.webp" alt="Logo Fundacji Manus" className="h-15 px-2" />
                <img src="Botland-logo.png" alt="Botland Logo" className="h-15 px-2" />
            </div>
            <div className="text-[var(--text)] text-sm px-2 z-10 flex flex-col justify-center items-center w-fit">
                <p className="text-center pb-2">Linki do socjali</p>
                <div className="flex flex-row justify-center items-center">
                    <a href="https://www.instagram.com/bioaddmed/" target="_blank" rel="noopener noreferrer" className="px-2">
                    <img src="instagram.png" alt="Instagram Logo" className="h-6 w-6" />
                    </a>
                    <a href="https://www.facebook.com/KNBioAddMed" target="_blank" rel="noopener noreferrer" className="px-2">
                    <img src="facebook.png" alt="Facebook Logo" className="h-6 w-6" />
                    </a>
                    <a href="https://github.com/BioAddMed" target="_blank" rel="noopener noreferrer" className="px-2">
                    <img src="github.webp" alt="GitHub Logo" className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export { Footer };
