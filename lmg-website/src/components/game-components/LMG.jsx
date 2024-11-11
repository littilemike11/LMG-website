import { Link } from 'react-router-dom'
export default function LMG(){
    return(
        <>
            <div className='flex justify-start'>
                <Link to="/webgames">
                    <button className='btn outline hover:scale-110 text-3xl' >LMG Games</button>
                </Link>
            </div>
        </>
    )
}