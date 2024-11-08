import Image from "next/image";
import Header from "./Organisms/Header";
import Banner from "./Organisms/Header/Banner";
import Heading from "./Atoms/heading";
import ServiceCard from "./Cells/ServiceCard";
import ServiceSection from "./Organisms/ServiceSection";
export default function Home() {
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
    </>

  );
}
