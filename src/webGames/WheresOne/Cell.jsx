export default function Cell({ onClick, content }) {
    return (
        <button
            onClick={onClick}
            className="border rounded flex items-center justify-center text-xl font-bold 
                 aspect-square bg-primary text-primary-content 
                 hover:scale-105 active:scale-95 transition-transform duration-150
                 select-none shadow-sm"
        >
            {content}
        </button>
    );
}
