export default function Edugut() {
    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold flex-1">Edugut</h2>
            <div className="grid">
                <img src="https://placehold.co/200x200" alt="Placeholder" className="rounded-lg m-10 mx-auto" />
                <p>
                    Projekt „Edugut” jest realizowany we współpracy z KN „NEXUM” na Wydziale Medycznym. Celem projektu jest zaprojektowanie i wykonanie modelu treningowego do zespolenia jelita cienkiego, który jak najlepiej odzwierciedla budowę anatomiczną jelita grubego oraz jego właściwości mechaniczne. Kluczowym aspektem jest wydajność i opłacalność techniki wykonania, dlatego w procesie tym wykorzystujemy druk 3D.
                </p>
                <h3 className="font-bold mt-4">Rezultat badawczy:</h3>
                <p>
                    Stworzenie modelu treningowego do zespolenia jelita grubego oraz opracowanie wydajnej i opłacalnej techniki wykonania modelu z wykorzystaniem technologii przyrostowych.
                </p>
                <h3 className="font-bold mt-4">Planowany termin realizacji projektu:</h3>
                <p>
                    Grudzień 2024 – Październik 2025, z przeznaczeniem semestru zimowego 2025/2026 na warsztaty chirurgiczne, testy oraz prezentację gotowego trenażera.
                </p>
                <h3 className="font-bold mt-4">Zasoby wymagane:</h3>
                <ul className="list-disc list-inside">
                    <li>Silikon addycyjny Ecoflex 00-20 oraz 00-30 (czekamy na wniosek)</li>
                    <li>Barwnik do silikonu</li>
                    <li>Drukarka 3D do druku modelu i tworzenia formy</li>
                    <li>Materiały do obróbki formy oraz modelu (papier ścierny, kubeczki do mieszania silikonu)</li>
                </ul>
            </div>
        </div>
    );
}
