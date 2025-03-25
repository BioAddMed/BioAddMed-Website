import { useState } from "react";

type ListaProjektowProps = {
    onSelect: (projekt: string) => void;
    selectedProject: string;
};
const projekty = ["Franek 2.0", "Bioreaktor", "Orteza", "Franek", "Bioploter", "Edugut", "Kampus 3D"].sort();

export default function ListaProjektow({ onSelect, selectedProject }: ListaProjektowProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <button
                className="p-2 mb-2 bg-gray-800 text-white rounded md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
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
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
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
                )}
            </button>
            <div
                className={`${
                    isMenuOpen ? "flex justify-end" : "hidden"
                } flex-col space-y-2 md:flex md:flex-col overflow-auto`}
            >
                {projekty.map((projekt) => (
                    <button
                        key={projekt}
                        className={`p-2 v-1 rounded w-40 text-white ${
                            selectedProject === projekt ? "bg-orange-500" : "bg-gray-800"
                        }`}
                        onClick={() => onSelect(projekt)}
                    >
                        {projekt}
                    </button>
                ))}
            </div>
        </div>
    );
}
