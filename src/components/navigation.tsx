const Navigation = ({theHref} : {theHref: string}) => {
    return(
        <div className="absolute w-full h-32 bottom-0 flex items-center justify-center"><a href={theHref} className="text-3xl rotate-90 md:rotate-0">{`>`}</a></div>
    )
}
export default Navigation;