import Banner from '@/app/Organisms/Banner';
import Image from 'next/image';
import Social from '@/app/Atoms/social';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram, ArrowRightCircle } from 'react-feather'
import FooterList from '@/app/Cells/footerList';


const Footer = () => {
    return (
        <footer className='flex flex-col w-full h-hit bg-gradient-to-t from-sc-700 to-sc-800 '>

            <section className="hidden lg:flex items-center justify-evenly w-5/6 m-auto py-10 border-b-2 border-sc-600 lg:max-w-6xl">
                <article className='flex flex-row p-2 space-x-2 font-bold text-white items-center'>
                    <Phone size={35} />
                    <h3>(21) 98360-3454</h3>
                </article>
                <article className='flex flex-row p-2 space-x-2 font-bold text-white items-center'>
                    <Mail size={35} />
                    <h3>faleconosco@singlecore.com.br</h3>
                </article>
                <button className='p-3 bg-transparent transition-all duration-700 ease-in-out text-white border-2 w-fit flex items-center space-x-2 border-white rounded-md hover:bg-gradient-to-t hover:from-sc-700 hover:to-sc-800'><h4>Entre em contato</h4> <ArrowRightCircle size={15} /></button>
            </section>
            <section className="flex items-center justify-center md:justify-between w-5/6 h-96 m-auto py-10 md:max-w-6xl">
                <article className='flex flex-col items-center lg:items-start justify-around max-w-xs space-y-3'>
                    <Image src="/logo-branco.png" width={180} height={80} alt="logo" />
                    <p className='text-white text-center lg:text-left'>Somos a evolução do seu negócio.</p>
                    <div className='flex items-center space-x-3'>
                        <Social href=''><Facebook size={25} /></Social>
                        <Social href=''><Linkedin size={25} /></Social>
                        <Social href=''><Twitter size={25} /></Social>
                        <Social href=''><Instagram size={25} /></Social>
                    </div>
                </article>
                <article className=" flex-col items-start justify-around hidden md:flex space-y-3"><FooterList /></article>

            </section>

            <div className='self-center text-white justify-center flex text-sm items-center p-3 w-full'> <h6>&copy; {new Date().getFullYear()} Todos os direitos reservados - Single Core </h6>  </div>

        </footer>
    )

}

export default Footer