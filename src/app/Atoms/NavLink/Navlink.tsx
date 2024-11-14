import { ChevronRight } from 'react-feather'
const NavLink = ({ children, onClick, footer }: { children: string, onClick: () => void, footer?: boolean }) => {
    return (
        <button
            className={`font-normal uppercase text-sm transition-all duration-100 transform hover:border-sc-700  ${footer ? "hover:border-r-4 w-24 border-sc-400" : "hover:border-b-2 w-fit text-sc-800 hover:text-sc-400 "}`}
            onClick={onClick}
        >
            <div className='flex flex-row space-x-2 items-center'>
                {footer && <ChevronRight size={15} />}
                {children}
            </div>
        </button>
    );
};

export default NavLink;
