import Image from "next/image";
import NavList from "@/app/Cells/NavList";
import PhoneIcon from '@mui/icons-material/Phone';

const Header = () => {
    return (
        <header className="absolute fixed w-full  justify-centerz-99" >
            <div id="header" className="flex bg-transparent  justify-around w-full items-center mx-auto">
                <Image src="/logo1.png" width={280} height={100} alt="logo" />
                <NavList />
                <div className="flex flex-col items-center">
                    <div className="flex items-center">
                        <PhoneIcon className="text-white" />
                        <h2 className="text-white">(21) 99999-9999</h2>
                    </div>
                    <sub className="text-white">24/7</sub>
                </div>
            </div>
        </header>
    );
};


export default Header