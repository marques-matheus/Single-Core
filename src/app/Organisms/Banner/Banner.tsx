const Banner = ({ children, d, footer }: { children: React.ReactNode, d?: string, footer?: boolean }) => {
    return (<section className={`flex ${d} ${footer ? "bg-sc-600" : "bg-white "} h-fit banner `} >
        {children}
    </section>)
}
export default Banner