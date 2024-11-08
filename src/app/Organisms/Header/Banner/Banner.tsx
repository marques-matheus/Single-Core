const Banner = ({ children }: { children: React.ReactNode }) => {
    return (<section className="flex bg-gray-200 h-fit banner">
        {children}
    </section>)
}
export default Banner