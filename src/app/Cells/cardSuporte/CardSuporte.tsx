'use client'
import { useState } from "react";
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import PolylineOutlinedIcon from '@mui/icons-material/PolylineOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
const CardSuporte = () => {
    const [cards, setCards] = useState([
        { isOpen: false, descricao: "Outsourcing é o futuro da sua empresa, com baixo custo e aumento da produtividade a terceirização dos serviços de TI gera uma economia única e amplia as áreas de atendimento e a segurança da sua empresa. Ao criar uma equipe interna de tecnologia terceirizada sua empresa consegue investir em profissionais de ponta, especialistas, aparelhos de último geração realizar treinamentos constantes e atuações de sistema e pessoa, tudo isso sem os encargos trabalhistas. Nós da Single Core somos o futuro da tecnologia sustentável! Feito para você, pensando no futuro!", title: "Outsourcing", icon: <ApartmentOutlinedIcon fontSize="large" />, },
        { isOpen: false, descricao: "Descrição 2", title: "Gestão de Serviços de TI e Telecom", icon: <PolylineOutlinedIcon fontSize="large" />, },
        { isOpen: false, descricao: "Com o objetivo de manter sua empresa sempre segura disponibilizamos as soluções mais adequadas em TI para seu tipo de negócio. Com um know-how em TI e Telecom, atuamos em todo o Brasil levando produtividade, baixo custo e segurança a empresas que buscam soluções tecnológicas de ponta, mas não podem contar com um profissional único. Cuidamos da manutenção do seu sistema de TI, Telecom e a infraestrutura tecnológica necessária para oferecer a seus colaboradores e clientes um atendimento personalizado, com segurança de dados e registro hábil de informações.", title: "Eficiência", icon: <EngineeringOutlinedIcon  fontSize="large"/>, },
    ]);

    const setIsOpen = (index: number, isOpen: boolean) => {
        setCards((prevCards) =>
            prevCards.map((card, i) => (i === index ? { ...card, isOpen } : card))
        );
    };
    return (
        <div className="flex w-4/6 m-auto relative my-3">
            {cards.map((card, index) => (
                <article
                    key={index}
                    className={`w-1/3 relative py-5 px-9 bg-cyan-800 h-96 hover:w-full transition-all ease-in-out duration-300 text-center justify-center items-center flex mx-1 ${card.isOpen ? "w-full" : "w-32"}
                        }`}
                    onMouseOver={() => setIsOpen(index, true)}
                    onMouseOut={() => setIsOpen(index, false)}
                >
                    <div className="flex flex-col justify-center items-center">
                        <div className={`${card.isOpen ? "hidden" : "block"} text-white transition-all duration-200 ease-in-out text-5xl`}>
                            {card.icon}
                        </div>
                        <h1 className={`${card.isOpen ? "hidden" : "block"} text-3xl font-bold text-white transition-all duration-200 ease-in-out`}>	{card.title}</h1>
                    </div>
                    <p className={`${card.isOpen ? "block" : "hidden"} text-white transition-all duration-200 ease-in-out font-medium`}>{card.descricao}</p>
                </article>
            ))}
        </div>
    )
}
export default CardSuporte