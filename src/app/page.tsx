import Image from "next/image";
import Header from "./Organisms/Header";
import Banner from "./Organisms/Header/Banner";
import Heading from "./Atoms/heading";
export default function Home() {
  return (
    <>
      <Header />
      <Banner>
        <div className="w-full h-full flex items-center justify-between my-32">
          <article className="max-w-xl m-auto">
            <h1 className="text-5xl font-bold text-cyan-800">Soluções em TI com o melhor custo benefício</h1>
            <h2 className="text-xl font-light text-cyan-800 ">Se você busca por agilidade no atendimento e a melhor prestação de serviço em TI do mercado chegou ao lugar certo. Nós da Single Core temos o que busca com o melhor valor!</h2>
          </article>
          <article>
            <Image src="/image.png" className="hidden lg:block" width={600} height={150} alt="logo" />
          </article>
        </div>
      </Banner>
    </>

  );
}
