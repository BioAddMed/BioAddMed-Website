import { notFound } from "next/navigation";
import artykulyData from "@/data/artykuly.json";
import type { PageProps as NextPageProps } from "../../../../.next/types/app/Aktualnosci/[id]/page";

export default async function ArtykulPage({ params }: NextPageProps) {
  const { id } = await params;
  const artykul = artykulyData.find(
    (item) => item.id === parseInt(id, 10)
  );

  if (!artykul) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div
        className="w-full h-64 rounded-lg mb-6"
        style={{ backgroundColor: artykul.obrazek }}
      ></div>
      <h1 className="text-3xl font-bold mb-2">{artykul.tytul}</h1>
      <p className="text-sm text-gray-500 mb-6">{artykul.data}</p>
      <p className="text-lg text-gray-700 whitespace-pre-line">
        {artykul.pelnaTresc}
      </p>
    </div>
  );
}