'use client';
import { useState, useRef, MutableRefObject } from 'react';
import Image from 'next/image';
import Header from './Organisms/Header';
import Banner from './Organisms/Banner';
import ServiceSection from './Organisms/ServiceSection';
import CardSuporte from './Cells/cardSuporte';
import Heading from './Atoms/heading';
import Footer from './Organisms/Footer';
import About from './Organisms/about';
import Testimonial from './Cells/testimonial';
import BackToTop from './Atoms/backToTop';
import ModalContact from './Organisms/Modal/Modal';

type SectionKey = 'home' | 'about' | 'services' | 'footer';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const homeRef = useRef<HTMLElement | null>(null);
  const sobreRef = useRef<HTMLElement | null>(null);
  const servicosRef = useRef<HTMLElement | null>(null);
  const contatoRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (refKey: SectionKey) => {
    // Mapear as chaves para as refs
    const refMap: { [key in SectionKey]: MutableRefObject<HTMLElement | null> } = {
      home: homeRef,
      about: sobreRef,
      services: servicosRef,
      footer: contatoRef,
    };

    const ref = refMap[refKey];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Ref não encontrada:', refKey);
    }
  };




  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <section ref={homeRef}>
        <Banner>
          <main className="w-full h-full flex items-center justify-between my-24 lg:my-28">
            <article className="max-w-xl bg-opacity-55 lg:bg-transparent bg-white p-8 lg:m-auto ">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-sc-700 my-3">
                Soluções em TI com o melhor custo benefício
              </h1>
              <p className="lg:text-xl font-light text-sc-700 leading-6">
                Se você busca por agilidade no atendimento e a melhor prestação de serviço em TI do mercado chegou ao lugar certo. Nós da Single Core temos o que busca com o melhor valor!
              </p>
              <button
                className="mt-3 text-white bg-sc-600 hover:bg-sc-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={() => scrollToSection('services')}
              >
                Saiba Mais
              </button>
            </article>

            <Image
              src="/image.png"
              className="hidden md:block w-1/4 xl:w-1/3"
              width={800}
              height={150}
              alt="imagem mostrando um mulher usando um notebook"
            />
          </main>
        </Banner>
      </section>
      <div className="flex w-full flex-col box-content bg-gradient-to-t from-gray-200 to-white">
        <Heading text="Suporte Profissional" align="text-center" />
        <CardSuporte />
      </div>
      <section className='' ref={servicosRef}>
        <ServiceSection />
      </section>
      <section className='' ref={sobreRef}>
        <About />
      </section>
      <Testimonial />
      <BackToTop />
      <ModalContact openModal={openModal} setOpenModal={setOpenModal} />
      <section className='' ref={contatoRef}>
        <Footer scrollToSection={scrollToSection} setOpenModal={setOpenModal} />
      </section>
    </>
  );
}
