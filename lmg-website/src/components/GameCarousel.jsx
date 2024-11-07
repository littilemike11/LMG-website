import { useState } from "react";
import GameSummary from "./GameSummary";
import { useLocation } from "react-router-dom";


export default function GameCarousel(props) {

    console.log(props)
    return (
        <>
            <div>
                <div className="text-3xl ">
                    {props.games[0].title}
                </div>

                <div className=" carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4 m-4">
                    {props.content}
                </div>


                <GameSummary
                    summary={props.games[0].summary}
                />

            </div>






        </>
    )
}