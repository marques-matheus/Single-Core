
const Heading = ({ text, h, align }: { text: string, h: number, align?: string }) => {
    return (
        <h2 className={`text-3xl font-bold ${align}`}>{text}</h2> 
               
    )
}


export default Heading
