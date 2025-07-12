import { useRef } from "react";

export default function GameInfo({ game }) {
    const dialogRef = useRef(null);

    const openModal = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    const closeModal = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    return (
        <>
            <button className="cursor-pointer hover:scale-110" onClick={openModal}>
                ℹ️
            </button>

            <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{"About " + game.title}</h3>
                    <div className="mx-auto px-4 py-6 text-left space-y-4">
                        {game.info}
                    </div>
                    <div className="modal-action">
                        <button onClick={closeModal} className="btn">Close</button>
                    </div>
                </div>
            </dialog>
        </>
    );
}
