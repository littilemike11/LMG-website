import { useLocation } from 'react-router-dom';
import catalogue from '../../data/games'; // adjust path as needed

export default function GameInfo() {
    const location = useLocation();

    // Match route to a game entry
    const game = catalogue.find(item => item.link === location.pathname);

    const title = "About " + game?.title ?? "Info";
    const content = game?.info ?? <p>No information available for this page.</p>;

    return (
        <>
            <button
                className="cursor-pointer hover:scale-110 text-2xl"
                onClick={() => document.getElementById('info_modal').showModal()}
            >
                ℹ️
            </button>

            <dialog id="info_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box max-w-lg font-bold text-lg mb-2">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <div className="text-left text-pretty max-h-64 overflow-auto">{content}</div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}
