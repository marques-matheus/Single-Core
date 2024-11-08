import services from "@/app/Mocks/services";
const ServiceCard = () => {
    return (
        <>
            {services.map((service, index) => (
                <article className="hover:text-white border-t-4 bg-white
                justify-around place-items-start
                 hover:border-sc-400 border-sc-700 hover:bg-sc-700
                  text-black transition-all duration-300 hover:rounded-br-3xl box-content flex flex-col w-56 h-80 px-10 py-3 space-y-3  shadow-md " key={index}>
                    <h2 className="text-md font-semibold  text-center">{service.titulo}</h2>
                    <p className="text-sm font-light">{service.descricao}</p>
                    <button className="bg-white shadow-ld border-2 border-sc-700 shadow-black w-fit p-2 rounded-md hover:shadow-sc-300 text-sm font-semibold text-sc-700  transition-all duration-300 hover:bg-gradient-to-r hover:from-sc-100 hover:to-white">Saiba mais</button>
                </article>

            ))}
        </>

    )

}

export default ServiceCard