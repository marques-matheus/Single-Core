import Link from "next/link";


/**
 * A convenience component for creating links between pages.
 *
 * @param {{ children: string, href: string }} props
 * @prop {string} children The text to display for the link.
 * @prop {string} href The URL to link to.
 * @returns A Next.js Link component.
 */
const NavLink = ({ children, href, external }: { children: string, href: string, external?: boolean }) => {
    return (
        <Link className="font-light text-white uppercase text-sm hover:text-blue-400" href={href} target={external ? "_blank" : "_self"}>
            {children}
        </Link>
    )
}


export default NavLink