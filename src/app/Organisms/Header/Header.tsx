import Image from "next/image";
import NavList from "@/app/Cells/NavList";
import PhoneIcon from '@mui/icons-material/Phone';

const Header = () => {
    return (
        <header className="absolute fixed w-full  justify-center items-center  z-99" >
            <div id="header" className="flex bg-transparent  justify-around w-full items-center mx-auto">
                <Image src="/logo1.png" width={280} height={100} alt="logo" />
                <NavList />
                <div className="flex flex-col items-center">
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