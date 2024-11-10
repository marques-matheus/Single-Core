'use client'
import Image from "next/image";
import Header from "./Organisms/Header";
import Banner from "./Organisms/Banner";
import ServiceSection from "./Organisms/ServiceSection";
import CardSuporte from "./Cells/cardSuporte";
import Heading from "./Atoms/heading";
import Footer from "./Organisms/Footer";
import About from "./Organisms/about";
import Testimonial from "./Cells/testimonial";
import BackToTop from "./Atoms/backToTop";
export default function Home() {

  return (
    <>
      <Header />
      <Banner>
        <main className="w-full h-full flex items-center justify-between my-24 lg:my-28">
          <article className="max-w-xl bg-opacity-75 lg:bg-transparent bg-white p-8 lg:m-auto ">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-sc-700 my-3">Soluções em TI com o melhor custo benefício</h1>
            <p className="lg:text-xl font-light text-sc-700 leading-6">Se você busca por agilidade no atendimento e a melhor prestação de serviço em TI do mercado chegou ao lugar certo. Nós da Single Core temos o que busca com o melhor valor!</p>
            <a href="#about">
              <button className="mt-3 text-white bg-sc-600 hover:bg-sc-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Saiba Mais
              </button>
            </a>
          </article>
          <article>
            <Image src="/image.png" className="hidden lg:block" width={600} height={150} alt="logo" />
          </article>
        </main>
      </Banner>
      <div className="flex w-full flex-col box-content bg-gradient-to-t from-gray-200 to-white">
        <Heading text="Suporte Profissional" align="text-center" />
        <CardSuporte />
      </div>
      <ServiceSection />
      <About />
      <Testimonial />
      <BackToTop />
      <Footer />

    </>

  );
}
