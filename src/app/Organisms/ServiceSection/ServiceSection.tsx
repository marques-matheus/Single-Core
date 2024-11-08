import Heading from "@/app/Atoms/heading";
import ServiceCard from "@/app/Cells/ServiceCard";

const ServiceSection = () => {
    return (
        <section className="flex flex-col items-center p-5 bg-gray-200 mt-5" id="services">
            <Heading text="Nossos profissionais estão capacitados para solucionar o seu problema." textSub="Serviços" align="text-center" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 my-5">
                <ServiceCard />
            </div>
        </section>
    )
}

export default ServiceSection