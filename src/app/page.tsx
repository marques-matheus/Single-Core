'use client'
import Image from "next/image";
import Header from "./Organisms/Header";
import Banner from "./Organisms/Header/Banner";
import ServiceSection from "./Organisms/ServiceSection";
import { useState } from "react";
export default function Home() {
  const [cards, setCards] = useState([
    { isOpen: false, descricao: "Descrição 1" },
    { isOpen: false, descricao: "Descrição 2" },
    { isOpen: false, descricao: "Descrição 3" },
  ]);

  const setIsOpen = (index: number, isOpen: boolean) => {
    setCards((prevCards) =>
      prevCards.map((card, i) => (i === index ? { ...card, isOpen } : card))
    );
  };
  return (
    <>
      <Header />
      <Banner>
        <main className="w-full h-full flex items-center justify-between my-32">
          <article className="max-w-xl m-auto">
            <h1 className="text-5xl font-bold text-cyan-800 my-3">Soluções em TI com o melhor custo benefício</h1>
            <p className="text-xl font-light text-cyan-800 leading-6">Se você busca por agilidade no atendimento e a melhor prestação de serviço em TI do mercado chegou ao lugar certo. Nós da Single Core temos o que busca com o melhor valor!</p>
          </article>
          <article>
            <Image src="/image.png" className="hidden lg:block" width={600} height={150} alt="logo" />
          </article>
        </main>
      </Banner>
      <ServiceSection />
      <div className="flex w-4/6 m-auto relative">
        <div className="flex w-4/6 m-auto relative">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`w-1/2 relative w-32 bg-slate-600 h-32 hover:w-full transition-all duration-300 ${card.isOpen ? "w-full" : "w-32"
                }`}
              onMouseOver={() => setIsOpen(index, true)}
              onMouseOut={() => setIsOpen(index, false)}
            >
              <h1>teste</h1>
              <p className={`${card.isOpen ? "block" : "hidden"}`}>{card.descricao}</p>
            </div>
          ))}
        </div>

      </div>
    </>

  );
}
