import daisyUIThemes from "../data/daisyThemeColors"
export default function ThemeCard({ theme }) {
    return (
        <>
            <div style={{ background: daisyUIThemes[theme].base100, color: daisyUIThemes[theme].primary }} className={`card card-compact w-96 shadow-xl h-full }`}>
                <div className="card-body items-center text-center">
                    <h2 className="card-title flex items-center">
                        Reward: Theme
                    </h2>
                    <p className="italic text-2xl">{theme}</p>
                    <div className="flex gap-2">
                        <button style={{ background: daisyUIThemes[theme].primary }} className="btn btn-circle">A</button>
                        <button style={{ background: daisyUIThemes[theme].secondary }} className="btn btn-circle">B</button>
                        <button style={{ background: daisyUIThemes[theme].accent }} className="btn btn-circle">C</button>
                        <button style={{ background: daisyUIThemes[theme].neutral }} className="btn btn-circle">D</button>
                    </div>
                </div>
            </div>
        </>
    )
}