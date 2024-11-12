import { ChevronsDown } from "react-feather"

const texts = [
    {
        id: 1,
        title: 'Missão',
        description: 'Levar os serviços de TI e Telecom a empresas com demandas baixas e complexas, com o melhor custo-benefício e sem a necessidade de uma contratação CLT.'
    },
    {
        id: 2,
        title: 'Visão',
        description: 'Somos parceiros, acreditamos na tecnologia como forma de construção e firmamento de marcas. Oferecemos a evolução do seu negócio.'
    },
    {
        id: 3,
        title: 'Valores',
        description: 'Confiança, segurança e lealdade são os diferenciais do sucesso de nossa empresa, com o atendimento humanizado entendemos quais as suas necessidades e apresentamos as melhores soluções.'
    },
]


const Mvv = () => {
    return (
        <article className="flex flex-col items-center space-y-5 w-full lg:max-w-2xl xl:max-w-xl">
            {texts.map((text, index) => (
                <div key={index} className="flex flex-col p-3 space-y-2 w-full border-b-2 border-sc-600">
                    <h2 className="text-sc-600 text-xl   font-bold">{text.title}</h2>
                    <p className=" font-light text-sm lg:text-lg ">{text.description}</p>
                </div>
            ))}
        </article>

    )
}

export default Mvv