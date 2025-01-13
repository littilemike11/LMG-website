export default function CategorySelect(props) {
    return (
        <>
            <div className="flex-col border">
                <div className="p-4">
                    {/* <details className="dropdown">
                            <summary className="btn m-1">Choose a Category</summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Video Games</a></li>
                                <li><a>Anime & Manga</a></li>
                                <li><a>Cartoon & Animations</a></li>
                            </ul>
                        </details> */}
                    <select name="categories" id="categories" className="dropdown bg-base-200 rounded-box z-[1] w-52 p-2 shadow">
                        <option defaultValue={"none"}>Choose a Quiz Category</option>
                        <option value="15">Video Games</option>

                        <option value="16">Board Games</option>
                        <option value="29">Comics</option>

                        <option value="31">Anime & Manga</option>
                        <option value="32">Cartoons & Animations</option>
                    </select>

                </div>
                <button onClick={props.fetchData} className="btn">Start Quiz</button>
            </div>
        </>
    )
}