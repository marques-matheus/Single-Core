'use client';
import { useState } from "react";
import { IoBusinessOutline, IoLeafOutline } from "react-icons/io5"
import { BiGitBranch } from "react-icons/bi"
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import PolylineOutlinedIcon from '@mui/icons-material/PolylineOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';

const CardSuporte = () => {
    const [cards, setCards] = useState([
        {
            isOpen: false,
            showContent: false,
            descricao: "Outsourcing é o futuro da sua empresa, com baixo custo e aumento da produtividade. A terceirização dos serviços de TI gera uma economia única e amplia as áreas de atendimento e a segurança da sua empresa. Ao criar uma equipe interna de tecnologia terceirizada, sua empresa consegue investir em profissionais de ponta, especialistas, aparelhos de última geração, além de realizar treinamentos constantes e atualizações de sistema e pessoal – tudo isso sem os encargos trabalhistas. Nós da Single Core somos o futuro da tecnologia sustentável! Feito para você, pensando no futuro!",
            title: "Outsourcing",
            icon: <IoBusinessOutline size={55} />
        },
        {
            isOpen: false,
            showContent: false,
            descricao: (
                <div className="flex flex-col space-y-3">
                    <p> Desfrute do suporte técnico, assessoria completa, consultoria e controle da sua empresa com baixo custo. Veja algumas das vantagens que podemos oferecer para sua empresa:</p>
                    <ul className="list-disc list-inside">
                        <li>Aumento da produtividade com redução de custos;</li>
                        <li>Análises permanentes de contas e contratos;</li>
                        <li>Auditoria de infraestrutura;</li>
                        <li>Aperfeiçoamento e especializações em TI sem custo;</li>
                        <li>Criação de novos projetos e adequações para melhorar suas soluções de atendimento.</li>
                    </ul>
                </div>
            ),
            title: "Gestão de Serviços de TI e Telecom",
            icon: <BiGitBranch size={55} />
        },
        {
            isOpen: false,
            showContent: false,
            descricao: "Com o objetivo de manter sua empresa sempre segura, disponibilizamos as soluções mais adequadas em TI para seu tipo de negócio. Com um know-how em TI e Telecom, atuamos em todo o Brasil levando produtividade, baixo custo e segurança a empresas que buscam soluções tecnológicas de ponta, mas que não podem contar com um profissional único. Cuidamos da manutenção do seu sistema de TI, Telecom e da infraestrutura tecnológica necessária para oferecer a seus colaboradores e clientes um atendimento personalizado, com segurança de dados e registro hábil de informações.",
            title: "Eficiência",
            icon: <IoLeafOutline size={55} />
        }
    ]);

    const setIsOpen = (index: number, isOpen: boolean) => {
        setCards((prevCards) =>
            prevCards.map((card, i) => (i === index ? { ...card, isOpen } : card))
        );

        // Atraso para mostrar o conteúdo após a animação de expansão
        setTimeout(() => {
            setCards((prevCards) =>
                prevCards.map((card, i) =>
                    i === index ? { ...card, showContent: isOpen } : card
                )
            );
        }, 150); // Defina o tempo para coincidir com o tempo de expansão da animação
    };

    return (
        <div className="flex xl:flex-row flex-col w-4/6 m-auto relative my-3">
            {cards.map((card, index) => (
                <article
                    key={index}
                    className={`relative py-5 px-9 bg-gradient-to-t from-sc-700 to-sc-800 xl:h-96 h-54 w-full xl:my-0 my-0.5 transition-all ease-in-out duration-700 text-center justify-center items-center flex mx-1 ${card.isOpen ? "xl:w-full" : "xl:w-1/3"
                        }`}
                    onMouseEnter={() => setIsOpen(index, true)}
                    onMouseLeave={() => setIsOpen(index, false)}
                >
                    <div className={`flex flex-col justify-center items-center ${card.isOpen ? "" : "h-full"}`}>
                        <div
                            className={`text-white text-5xl transition-opacity duration-500 ${card.isOpen ? "opacity-0 hidden" : "opacity-100"
                                }`}
                        >
                            {card.icon}
                        </div>
                        <h2
                            className={`text-2xl xl:text-3xl font-bold text-white transition-opacity duration-500 ${card.isOpen ? "opacity-0 hidden" : "opacity-100"
                                }`}
                        >
                            {card.title}
                        </h2>
                    </div>
                    {card.showContent && (
                        <div className={`text-white font-medium transition-opacity duration-500 mt-5 ${card.isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
                            {typeof card.descricao === 'string' ? (
                                <p>{card.descricao}</p>
                            ) : (
                                card.descricao
                            )}
                        </div>
                    )}
                </article>
            ))}
        </div>
    );
};

export default CardSuporte;
