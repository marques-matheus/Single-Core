import Banner from '@/app/Organisms/Banner';
import Image from 'next/image';
import Social from '@/app/Atoms/social';
import { Phone, Mail, Facebook, Linkedin, Twitter, Instagram, ArrowRightCircle } from 'react-feather'
import FooterList from '@/app/Cells/footerList';
import React from 'react';

interface FooterProps {
    scrollToSection: (section: 'home' | 'about' | 'services' | 'footer') => void;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
const Footer: React.FC<FooterProps> = ({ scrollToSection, setOpenModal }: FooterProps,) => {

    return (
        <footer className='flex flex-col w-full h-hit bg-gradient-to-t from-sc-700 to-sc-800 ' id='footer'>

            <section className="flex items-center justify-center md:justify-between w-5/6 m-auto py-10 border-b-2 border-sc-600 lg:max-w-6xl ">
                {/* <article className='flex flex-row p-2 space-x-2 font-bold text-white items-center'>
                    <Phone size={35} />
                    <h3>(21) 98360-3454</h3>
                </article> */}
                <a href="mailto:faleconosco@singlecore.com.br" className=' flex-row p-2 space-x-2 font-bold text-white items-center hidden md:flex'>
                    <Mail size={35} />
                    <h3>faleconosco@singlecore.com.br</h3>
                </a>
                <button onClick={() => setOpenModal(true)} className='p-3 bg-transparent transition-all duration-700 ease-in-out  text-white border-2 w-fit flex items-center space-x-2 border-white rounded-md hover:bg-gradient-to-t hover:from-sc-700 hover:to-sc-800'><h4>Entre em contato</h4> <ArrowRightCircle size={15} /></button>
            </section>
            <section className="flex items-center justify-center md:justify-between w-5/6 h-96 m-auto py-10 md:max-w-6xl">
                <article className='flex flex-col items-center lg:items-start justify-around max-w-xs space-y-3'>
                    <Image src="/logo-branco.png" width={180} height={80} alt="logo" />
                    <p className='text-white text-center lg:text-left'>Somos a evolução do seu negócio.</p>
                    <div className='flex items-center space-x-3'>

                        <Social href=''><Linkedin size={25} /></Social>

                        <Social href=''><Instagram size={25} /></Social>
                    </div>
                </article>
                <article className=" flex-col items-start justify-around hidden md:flex space-y-3"><FooterList scrollToSection={scrollToSection} /></article>

            </section>

            <div className='self-center flex flex-col text-white justify-center flex text-sm items-center p-3 w-full'> <h6>&copy; Single Core - {new Date().getFullYear()} </h6> <span className='ml-2'>Desenvolvido por <a target='_blank' rel='noreferrer' className='font-bold hover:text-gray-300' href="https://www.linkedin.com/in/marques-matheus-silva/">Matheus Marques</a></span> </div>

        </footer>
    )

}

export default Footer