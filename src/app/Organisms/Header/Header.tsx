'use client'
import Image from "next/image";
import NavList from "@/app/Cells/NavList";
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import NavMobile from "@/app/Cells/MobileNav";
import { useState } from "react";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="absolute fixed w-full bg-white bg-opacity-55 items-center z-99" >
            <div id="header" className="flex bg-transparent justify-between lg:justify-around w-full items-center mx-auto">
                <Image src="/logo1.png" width={200} height={80} alt="logo" />
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-cyan-900 flex items-center"><MenuIcon /></button>
                <NavMobile isOpen={isOpen} />
                <NavList />
                <div className=" flex-col items-center hidden lg:flex">
                    <div className="flex items-center">
                        <PhoneIcon className="text-cyan-900" />
                        <h2 className="text-cyan-900">(21) 99999-9999</h2>
                    </div>
                    <sub className="text-cyan-900">24/7</sub>
                </div>
            </div>
        </header>
    );
};


export default Header