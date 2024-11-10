
const Social = ({ children, href }: { children: React.ReactNode, href: string }) => {
    return (
        <div className="flex items-center justify-center border-2 text-white border-white hover:text-sc-100 hover:border-sc-100 rounded-full w-10 h-10">
            <a href="">
                {children}
            </a>
        </div>

    )
}

export default Social