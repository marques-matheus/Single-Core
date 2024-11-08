import LINKS from "@/app/Mocks/Links"
import NavLink from "@/app/Atoms/NavLink/Navlink"
const NavList = () => {
    return (
        <nav className="flex bg-transparent">
            <ul className="flex items-center w-96 justify-between bg-transparent">
                {LINKS.map((link) => <NavLink key={link.href} href={link.href} children={link.label} />)}
            </ul>
        </nav>
    )
}


export default NavList