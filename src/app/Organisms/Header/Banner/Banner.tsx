const Banner = ({ children }: { children: React.ReactNode }) => {
    return (<section className="flex bg-slate-300 h-fit banner">
        {children}
    </section>)
}
export default Banner