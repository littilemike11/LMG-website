import GameShowcase from "./GameShowcase"
export default function Sidebar(props) {
    return (
        <>
            <div className=" absolute drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center ">
                    {/* Page content here */}

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open Games
                    </label>
                    <GameShowcase
                        catalogue={props.catalogue}
                    />

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-screen w-72 p-4">
                        {/* Sidebar content here */}
                        {props.catalogue.map((game, index) => (
                            <li key={index}><a href={`#${game.id}`} >{game.Title}</a></li>
                        ))}


                    </ul>
                </div>
            </div>
        </>
    )
}