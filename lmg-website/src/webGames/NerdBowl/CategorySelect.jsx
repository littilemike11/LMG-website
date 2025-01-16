export default function CategorySelect(props) {
    return (
        <>
            <div className="flex-col text-xl">
                <div className="p-4">
                        {/* powered by onchange in select */}
                    <select onChange={(e)=>props.setCategoryID(e.target.value)} name="categories" className="select select-bordered w-full max-w-xs text-xl">
                        <option disabled selected defaultValue={""}>Choose a Quiz Category</option>
                        <option value="15">Video Games</option>

                        <option value="16">Board Games</option>
                        <option value="29">Comics</option>

                        <option value="31">Anime & Manga</option>
                        {/* <option value="32">Cartoons & Animations</option> */}
                    </select>

                </div>
                <button onClick={()=>props.playGame()} className="btn">Start Quiz</button>
            </div>
        </>
    )
}