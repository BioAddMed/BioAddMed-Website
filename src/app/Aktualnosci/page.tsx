"use client";
import React from "react";
import KartaArtykulu from "@/components/KartaArtykulu";
import artykulyData from "@/data/artykuly.json";

const AktualnosciPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Aktualności</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Lewa kolumna z Facebookiem - bez kontenera */}
            <div className="md:col-span-1 h-full">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FKNBioaddmed&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[500px]"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>

            {/* Prawa kolumna z artykułami */}
            <div className="md:col-span-2">
              <div className="rounded-lg bg-gray-100 p-6 h-full">
                <h2 className="text-2xl font-semibold mb-4">Najnowsze artykuły</h2>
                <div className="space-y-4 max-h-[405px] overflow-y-auto pr-2">
                  {artykulyData.map((artykul) => (
                    <KartaArtykulu
                      key={artykul.id}
                      id={artykul.id}
                      tytul={artykul.tytul}
                      data={artykul.data}
                      zajawka={artykul.zajawka}
                      obrazek={artykul.obrazek}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer (umieszczony tutaj, ale może być zaimportowany z innego komponentu) */}
      {/* <Footer /> */}
    </div>
  );
};

export default AktualnosciPage;