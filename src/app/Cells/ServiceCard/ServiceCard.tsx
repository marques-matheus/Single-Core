import services from "@/app/Mocks/services";
const ServiceCard = () => {
    return (
        <>
            {services.map((service, index) => (
                <article className="hover:text-white hover:bg-cyan-800 text-cyan-800 transition-all duration-300 hover:rounded-br-3xl box-content flex flex-col w-56 h-80 p-5 space-y-3 shadow-md shadow-black " key={index}>
                    <h2 className="text-md font-semibold  hover:text-w">{service.titulo}</h2>
                    <p className="text-sm font-light">{service.descricao}</p>
                </article>

            ))}
        </>

    )

}

export default ServiceCard