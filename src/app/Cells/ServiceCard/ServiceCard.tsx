import services from "@/app/Mocks/services";
const ServiceCard = () => {
    return (
        <>
            {services.map((service, index) => (
                <article className="hover:text-white border-t-4 bg-white
                justify-around place-items-start
                 hover:border-teal-300 border-cyan-800 hover:bg-cyan-800
                  text-cyan-800 transition-all duration-300 hover:rounded-br-3xl box-content flex flex-col w-56 h-80 px-10 py-3 space-y-3  shadow-md " key={index}>
                    <h2 className="text-md font-semibold first-letter:uppercase lowercase text-center">{service.titulo}</h2>
                    <p className="text-sm font-light">{service.descricao}</p>
                    <button className="bg-white shadow-ld border-2 border-cyan-800 shadow-black w-fit p-2 rounded-md hover:shadow-teal-300 text-sm font-semibold text-cyan-800 hover:text-cyan-400 transition-all duration-300 ">Saiba mais</button>
                </article>

            ))}
        </>

    )

}

export default ServiceCard