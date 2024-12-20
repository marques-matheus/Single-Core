
const Heading = ({ text, textSub, align }: { text: string, textSub?: string, align?: string }) => {
    return (
        <div className={`flex flex-col my-2 space-y-4 ${align == "text-left" ? "items-start" : "items-center justify-center"}`}>
            <sub className={`text-sc-700 font-semibold text-lg ${align}`}>{textSub}</sub>
            <h2 className={`text-xl font-bold max-w-sm ${align}`}>{text}</h2>
        </div>

    )
}


export default Heading
