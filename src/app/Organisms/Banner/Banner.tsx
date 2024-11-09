const Banner = ({ children, d }: { children: React.ReactNode, d?: string }) => {
    return (<section className={`flex ${d} bg-white h-fit banner`}>
        {children}
    </section>)
}
export default Banner