import Heading from "@/app/Atoms/heading"
import Mvv from "@/app/Atoms/mvv"

const About = () => {

    return (
        <section className="flex flex-col lg:flex-row items-center space-x-5 justify-around about px-10 py-16 h-fit bg-white" id="about">
            <article className="lg::w-1/2 lg:max-w-2xl p-5 border-b-2 border-sc-600 lg:border-b-0 mb-10 lg:mb-0">
                <Heading text="Nós temos mais de X anos na indústria de soluções em TI" textSub="Sobre nós" align="text-left" />
                <p className="text-left font-light text-sm lg:text-lg"><span className="text-sc-400 text-semibold text-2xl lg:text-4xl mr-1">A</span> Single Core foi criada para assessorar, integrar, oferecer alternativas de soluções e prestar serviços personalizados com segurança e qualidade em Tecnologia da Informação e Comunicação (TIC).

                    Nossa principal meta é buscar inovações tecnológicas, visando baixo custo, assim atendemos desde as demandas mais simples até as mais complexas, gerindo o seu negócio de maneira eficiente e responsável.

                    Nosso compromisso é gerar resultados positivos aos nossos clientes, com novas tecnologias, novos processos baseados nas boas práticas da biblioteca ITIL, renegociando contratos, sugerindo implantação de novos serviços ou readequando os existentes, auditando as contas de cobrança, acompanhando as solicitações e dando o feedback necessário.</p>
            </article>
            <Mvv />
        </section>
    )
}

export default About