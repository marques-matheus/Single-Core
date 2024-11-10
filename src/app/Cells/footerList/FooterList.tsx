import LINKS from '@/app/Mocks/Links'
import NavLink from '@/app/Atoms/NavLink/Navlink'
import { ChevronRight } from 'react-feather'
const FooterList = () => {
    return (

        <nav className={`flex flex-row justify-between w-full`}>
            <ul className='flex flex-col space-y-2 w-fit'>
                {LINKS.map((link, index) => <span key={index} className='flex flex-row space-x-2 items-center text-white'><ChevronRight size={15} /> <NavLink footer key={link.href} href={link.href} children={link.label} /></span>)}
            </ul>
           
        </nav>
    )
}

export default FooterList