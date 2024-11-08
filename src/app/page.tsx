'use client'
import Image from "next/image";
import Header from "./Organisms/Header";
import Banner from "./Organisms/Header/Banner";
import ServiceSection from "./Organisms/ServiceSection";
import CardSuporte from "./Cells/cardSuporte";
import Heading from "./Atoms/heading";
export default function Home() {

  return (
    <>
      <Header />
      <Banner>
        <main className="w-full h-full flex items-center justify-between my-32">
          <article className="max-w-xl m-auto">
            <h1 className="text-5xl font-bold text-sc-700 my-3">Soluções em TI com o melhor custo benefício</h1>
            <p className="text-xl font-light text-sc-700 leading-6">Se você busca por agilidade no atendimento e a melhor prestação de serviço em TI do mercado chegou ao lugar certo. Nós da Single Core temos o que busca com o melhor valor!</p>
          </article>
          <article>
            <Image src="/image.png" className="hidden lg:block" width={600} height={150} alt="logo" />
          </article>
        </main>
      </Banner>
      <div className="flex w-full flex-col box-content">
        <Heading text="Suporte Profissional" align="text-center" />
        <CardSuporte />
      </div>
      <ServiceSection />

    </>

  );
}
