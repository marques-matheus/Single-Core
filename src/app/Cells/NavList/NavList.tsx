import LINKS from "@/app/Mocks/Links";
import NavLink from "@/app/Atoms/NavLink/";

interface NavListProps {
    scrollToSection: (section: 'home' | 'about' | 'services' | 'footer') => void;
}

const NavList = ({ scrollToSection }: NavListProps) => {
    return (
        <nav className="lg:flex bg-transparent p-10 mr-10 hidden">
            <ul className="flex items-center w-96 justify-between bg-transparent">
                {LINKS.map((link) => (
                    <NavLink
                        key={link.href}
                        children={link.label}
                        onClick={() => scrollToSection(link.href.slice(1) as 'about' | 'services' | 'footer')}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default NavList;
