export default function CategorySelect(props) {
    return (
        <>
            <div className="flex-col text-xl">
                <div className="p-4">
                        {/* powered by onchange in select */}
                    <select onChange={(e)=>props.setCategoryID(e.target.value)} value={props.categoryID} name="categories" className="select select-bordered w-full max-w-xs text-xl">
                        <option disabled value={""}>Choose a Quiz Category</option>
                        {
                            props.categories.map((category, index)=>(
                                <option key={index} value={category.id}>{category.name}</option>
                            ) )
                        }
                        
                    </select>

                </div>
                <button onClick={()=>props.playGame()} className="btn">Start Quiz</button>
            </div>
        </>
    )
}