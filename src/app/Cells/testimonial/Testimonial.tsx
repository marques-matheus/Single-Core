import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import testimonials from "@/app/Mocks/testimonials";
import Heading from "@/app/Atoms/heading";

const Testimonial = () => {
    return (
        <section className="bg-gradient-to-t from-gray-200 to-white py-32">
            <div className="container mx-auto">
                <Heading textSub="Depoimentos" text="Nossos Clientes de sucesso" align="text-center" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {testimonials.map((testimonial, index) => (
                        <article key={index} className="bg-white px-6 mx-3 lg:mx-auto py-6 lg:py-5 rounded-lg shadow-md flex flex-col space-y-3">
                            <FormatQuoteIcon fontSize='large' className="text-sc-600" />
                            <div className='flex flex-col justify-between h-full'>
                                <p className="text-md font-light text-sc-600 mb-2">{testimonial.text}</p>
                                <div className="flex flex-col justify-between items-start">
                                    <h2 className="text-lg font-semibold text-sc-700 ">{testimonial.name}</h2>
                                    <span className='font-bold text-md'>{testimonial.role}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;