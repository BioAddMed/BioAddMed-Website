import React from "react";
import Link from "next/link";

type KartaArtykuluProps = {
  id: number;
  tytul: string;
  data: string;
  zajawka: string;
  obrazek: string;
};

const KartaArtykulu = ({ id, tytul, data, zajawka, obrazek }: KartaArtykuluProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4 flex gap-4">
      <div
        className="w-24 h-24 rounded-lg"
        style={{ backgroundColor: obrazek }}
      ></div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{tytul}</h3>
        <p className="text-sm text-gray-500 mb-2">{data}</p>
        <p className="text-gray-700 mb-2">{zajawka}</p>
        <Link
          href={`/Aktualnosci/${id}`}
          className="text-blue-600 font-semibold hover:underline"
        >
          Czytaj dalej
        </Link>
      </div>
    </div>
  );
};

export default KartaArtykulu;
