import daisyUIThemes from "../data/daisyThemeColors"
export default function ThemeCard({theme}){
    return(
        <>
            <div style={{background:daisyUIThemes[theme].base100}} className={`card card-compact w-96 shadow-xl h-full text-primary-content}`}>
                <div className="card-body items-center text-center">
                    <h2 className="card-title flex items-center">
                        {theme}
                    </h2>
                    <div className="flex gap-2">
                         <button style={{background:daisyUIThemes[theme].primary}} className="btn">A</button>
                         <button style={{background:daisyUIThemes[theme].secondary}} className="btn">B</button>
                         <button style={{background:daisyUIThemes[theme].accent}} className="btn">C</button>
                         <button style={{background:daisyUIThemes[theme].neutral}}  className="btn">D</button>
                    </div>
                </div>
            </div>
        </>
    )
}