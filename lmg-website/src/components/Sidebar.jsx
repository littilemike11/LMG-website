import GameCarousel from "./GameCarousel"

export default function Sidebar(props) {
    return (

        <>
            <div className=" drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col h-full items-center ">
                    {/* Page content here */}

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open Games
                    </label>
                    <GameCarousel
                        catalogue={props.catalogue}
                    />

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu gap-2 bg-base-200 text-base-content h-full w-72 shadow rounded-r-lg p-4">
                        <p className="text-lg pb-4">Choose a Game Below!</p>
                        {/* Sidebar content here */}
                        {props.catalogue.map((game, index) => (

                            <li className="p-2" key={index}>
                                <a href={`#${game.id}`} >{game.title}</a>
                            </li>


                        ))}


                    </ul>
                </div>
            </div>
        </>
    )
}