import Link from "next/link";


/**
 * A convenience component for creating links between pages.
 *
 * @param {{ children: string, href: string }} props
 * @prop {string} children The text to display for the link.
 * @prop {string} href The URL to link to.
 * @returns A Next.js Link component.
 */
const NavLink = ({ children, href, external, footer }: { children: string, href: string, external?: boolean, footer?: boolean }) => {
    return (
        <Link className={`font-light text-sc-800 uppercase text-sm hover:text-sc-400 hover:border-b-2 hover:border-sc-800 transition-all duration-200 transform  w-fit ${footer ? " hover:border-b-0 " : ""}`} href={href} target={external ? "_blank" : "_self"}>
            {children}
        </Link>
    )
}


export default NavLink