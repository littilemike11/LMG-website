export default function Cell(props){
    return(
        <>
            <button 
                onClick={props.onClick} 
                className="border aspect-square bg-slate-600 hover:scale-110 min-h-` h-max">
                {props.content}
            </button>
        </>
    )
}