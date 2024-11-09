const Banner = ({ children, d }: { children: React.ReactNode, d?: string }) => {
    return (<section className={`flex ${d} bg-gray-200 h-fit banner`}>
        {children}
    </section>)
}
export default Banner