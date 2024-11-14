'use client'
import Image from "next/image";
import NavList from "@/app/Cells/NavList";
import { Mail, Phone } from "react-feather";
import MenuIcon from '@mui/icons-material/Menu';
import NavMobile from "@/app/Cells/MobileNav";
import { useState } from "react";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="absolute fixed w-full bg-white items-center z-99" >
            <div id="header" className="flex bg-transparent justify-between lg:justify-around w-full items-center lg:mx-auto h-24">
                <Image src="/logo1.png"  className="w-56 lg:w-72 xl:w-80 2xl:w-96" width={600} height={600} alt="logo" />
                <button onBlur={() => setIsOpen(false)} onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-sc-700 flex items-center"><MenuIcon /></button>
                <NavMobile isOpen={isOpen} />
                <NavList />
                <div className=" flex-col items-center hidden lg:flex">
                    <a href="mailto:faleconosco@singlecore.com.br" className="flex text-sc-600 font-medium space-x-2 items-center">
                        <Mail size={20} />
                        <h3>faleconosco@singlecore.com.br</h3>
                    </a>
                </div>
            </div>
        </header>
    );
};


export default Header