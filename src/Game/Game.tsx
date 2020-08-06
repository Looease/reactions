import React, {FunctionComponent, useState} from "react";
import styles from "./Game.module.scss";
import {Board} from "./Board/Board";
import {GameMode} from "../App";



interface GameProps{
    setMode: (Newmode: GameMode) => void;
}

export const Game: FunctionComponent<GameProps> = ({setMode}) => {

    const [gameScore, setGamescore] =useState(0);


    return (
        <section className={styles.content}>
            <h2>Score: {gameScore}</h2>
            <Board gameScore={gameScore} setGameScore={setGamescore} setMode={setMode} />
        </section>
    );
};


//Game is the parent component to Board and button and is where we render everything. 