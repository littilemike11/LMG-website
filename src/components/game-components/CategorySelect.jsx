/**
 * 
 * @param {Array} categories- array of categories of type {id,name}
 * @param {string} categoryID - useState variable for current category selected
 * @param {string} setCategoryID - useState variable for to update categoryID
 * @param {Function} playGame - A function to run on start button click
 * @returns category select component able to pick a different category and run function on button press
 */
export default function CategorySelect({ categories, categoryID, setCategoryID, playGame }) {
    return (
        <>
            <div className="flex-col text-xl">
                <div className="p-4">
                    {/* powered by onchange in select */}
                    <select onChange={(e) => setCategoryID(e.target.value)} value={categoryID} name="categories" className="select select-bordered w-full max-w-xs text-xl">
                        <option disabled value={""}>Choose a Category</option>
                        {
                            categories.map((category, index) => (
                                <option key={index} value={category.id}>{category.name}</option>
                            ))
                        }

                    </select>

                </div>
                <button onClick={() => playGame()} className="btn btn-primary">Start</button>
            </div>
        </>
    )
}