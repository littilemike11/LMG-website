export default function CategorySelect(props) {
    return (
        <>
            <div className="flex-col text-xl border">
                <div className="p-4">
                        {/* powered by onchange in select */}
                    <select onChange={(e)=>props.setCategoryID(e.target.value)} name="categories" className="dropdown bg-base-200 rounded-box z-[1] p-2 shadow">
                        <option defaultValue={""}>Choose a Quiz Category</option>
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