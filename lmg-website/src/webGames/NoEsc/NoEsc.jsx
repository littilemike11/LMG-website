import LMG from "../../components/game-components/LMG"
import Modal from "./Modal"
import asciiArt from "./images/asciiArt.png"
import "../../game.css"
export default function NoEsc(){
    return(
        <>
            <div className="Game h-[95vh]">
    
                <LMG/>
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{backgroundImage:`url(${asciiArt})`}}>
                    <Modal/>
                </div>
                
                {/* <img src={asciiArt} alt="" /> */}
                
            </div>
            
        </>
    )
}