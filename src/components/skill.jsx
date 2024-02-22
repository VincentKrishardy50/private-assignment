export default function Skill ({type, number}){
    return(
        <div className="text-center px-1 border-r last:border-r-0">
            <h2>{type}</h2>
            <span>{number}</span>
        </div> 
    )
}
