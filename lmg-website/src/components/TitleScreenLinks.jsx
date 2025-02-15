import { Link } from "react-router-dom"
export default function TitleScreenLinks({ link, title }) {
    return (
        <>

            <Link className="flex justify-start btn btn-ghost italic tracking-widest w-full h-full font-bold text-3xl p-2 font-serif text-black shadow-lg rounded-md'" to={link}>
                {title}
            </Link>




        </>
    )
}