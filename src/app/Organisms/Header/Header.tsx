'use client'
import Image from "next/image";
import NavList from "@/app/Cells/NavList";
import { Phone } from "react-feather";
import MenuIcon from '@mui/icons-material/Menu';
import NavMobile from "@/app/Cells/MobileNav";
import { useState } from "react";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="absolute fixed w-full bg-white items-center z-99" >
            <div id="header" className="flex bg-transparent justify-between lg:justify-around w-full items-center mx-auto h-24">
                <Image src="/logo1.png" className="w-80" width={600} height={100} alt="logo" />
                <button onBlur={() => setIsOpen(false)} onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-sc-700 flex items-center"><MenuIcon /></button>
                <NavMobile isOpen={isOpen} />
                <NavList />
                <div className=" flex-col items-center hidden lg:flex">
                    <div className="flex items-center">
                        <Phone className="text-sc-700" />
                        <h2 className="text-sc-700 font-bold">(21) 98360-3454</h2>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Header