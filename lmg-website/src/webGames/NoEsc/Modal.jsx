import { useState } from "react"

export default function Modal(props){
    // console.log(question)
    // console.log(question.cost)
    const [dialogueIndex, setDialogueIndex]= useState(0)
    console.log(props.dialogue)
    const nextModal = ()=>{
        setDialogueIndex(prev=> prev+ 1)
        props.setBgIndex(prev=>(prev+1)%2)
    }
    const showModal = ()=>{
        document.getElementById("my_modal_5").classList.add("modal-open")
    }
    const hideModal = ()=>{
        document.getElementById("my_modal_5").classList.remove("modal-open")
        
    }
    return(
        <>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={showModal}>Start?</button>
            <div id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 sm:right-2 top-2">✕</button>
                <h3 className="font-bold text-lg"></h3>
                <p className="py-4">{props.dialogue[dialogueIndex]}</p>
                <div className="modal-action">
                <form method="dialog" className="w-full flex justify-between ">
                    {/* if there is a button in form, it will close the modal */}
                        <button onClick={nextModal} className="btn">Ok</button>
                        <button onClick={hideModal} className="btn">Close</button>                    
                </form>
                </div>
            </div>
            </div>
        </>
    )
}