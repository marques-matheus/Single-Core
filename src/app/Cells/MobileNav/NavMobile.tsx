import NavLink from "@/app/Atoms/NavLink/Navlink";
import links from '@/app/Mocks/Links';

type NavMobileProps = {
  isOpen: boolean;
};


export default function NavMobile({ isOpen }: NavMobileProps) {
  return (
    <nav className={`box-border 
    absolute  left-0 w-2/6 h-screen py-10 bg-white z-2  ${isOpen ? "left-0 top-0 opacity-100" : "-left-80 top-0 opacity-0 "}
    lg:hidden flex flex-col justify-start text-left items-start transition-all ease-in-out duration-500 p-5`}>
      <ul className="box-content flex flex-col space-y-5">
        {links.map((link, index) => (
          <NavLink key={index} href={link.href} children={link.label} external={link.external}/>
        ))}
      </ul>
    </nav>
  );
}
