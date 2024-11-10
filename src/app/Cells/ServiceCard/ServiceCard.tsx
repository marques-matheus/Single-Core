import services from "@/app/Mocks/services";
const ServiceCard = () => {
    return (
        <>
            {services.map((service, index) => (
                <article className="hover:text-white border-t-4 bg-white 
                justify-around hover:border-sc-400 border-sc-700 hover:bg-sc-700
                  text-black transition-all duration-500 hover:rounded-br-3xl box-content flex flex-col w-56 h-80 px-10 py-3 space-y-3  shadow-md " key={index}>
                    <h2 className="text-md font-semibold self-center text-center ">{service.titulo}</h2>
                    <p className="text-sm font-light">{service.descricao}</p>

                </article>

            ))}
        </>

    )

}

export default ServiceCard