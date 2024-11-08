import NavLink from "@/app/Atoms/NavLink/Navlink";
import links from '@/app/Mocks/Links';

type NavMobileProps = {
  isOpen: boolean;
};


export default function NavMobile({ isOpen }: NavMobileProps) {
  return (
    <nav className={`box-border 
    absolute  left-0 w-full h-fit py-10 bg-white z-2 pa
    ease-in-out duration-500
    ${isOpen ? "top-20" : "-top-80 opacity-0"}
    lg:hidden flex flex-col justify-end text-right items-end transition-all ease-in-out duration-500`}>
      <ul className="box-content flex flex-col">
        {links.map((link, index, label) => (
          <NavLink key={index} href={link.href} children={link.label} external={link.external}/>
        ))}
      </ul>
    </nav>
  );
}
