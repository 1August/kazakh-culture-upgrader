import './GamePage.css'

import {useId, useState} from "react"

export const GamePage = props => {
    const {
        data,
        openThisCard
    } = props



    return(
        <section id="gamePage" className="gamePage">
            <div className="container">
                <div id="game" className="game">
                    <div className="game__gridTable">
                        {
                            data.length !== 0 &&
                            data.map(el => (
                                <div
                                    key={el.id}
                                    className="game__gridItem"
                                    onClick={e => openThisCard(el)}
                                >
                                    {el.label}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}