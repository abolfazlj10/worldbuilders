const Navigation = ({theHref} : {theHref: string}) => {
    return(
        <a href={theHref} className="absolute w-full h-32 bottom-0 flex items-center justify-center text-3xl rotate-90 md:rotate-0">{`>`}</a>
    )
}
export default Navigation;