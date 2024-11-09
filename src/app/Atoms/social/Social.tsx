
const Social = ({ children, href }: { children: React.ReactNode, href: string }) => {
    return (
        <div className="flex items-center justify-center border-2 text-sc-700 border-sc-700  hover:text-sc-400 hover:border-sc-400 rounded-full w-10 h-10">
            <a href="">
                {children}
            </a>
        </div>

    )
}

export default Social