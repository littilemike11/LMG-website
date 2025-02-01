import { Link } from "react-router-dom"

export default function TitleScreenLinks({ link, title }) {
    return (
        <>
            <Link to={link} >
                <button className='hover:scale-110 btn btn-ghost italic tracking-widest w-full h-full font-bold text-3xl p-2 m-2 font-serif text-black shadow-lg border rounded-md' >{title}</button>
            </Link>
        </>
    )
}