import LINKS from '@/app/Mocks/Links'
import NavLink from '@/app/Atoms/NavLink/Navlink'



interface FooterListProps {
    scrollToSection: (section: 'home' | 'about' | 'services' | 'footer') => void;
}

const FooterList = ({ scrollToSection }: FooterListProps) => {
    return (

        <nav className={`flex flex-row justify-between w-full`}>
            <ul className='flex flex-col space-y-2 w-fit'>
                {LINKS.map((link, index) => <span key={index} className='flex flex-row space-x-2 items-center text-white'> <NavLink footer key={link.href} onClick={() => scrollToSection(link.href.slice(1) as 'about' | 'services' | 'footer')} children={link.label} /></span>)}
            </ul>

        </nav>
    )
}

export default FooterList