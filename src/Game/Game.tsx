import React, {FunctionComponent, useState} from "react";
import styles from "./Game.module.scss";
import {Board} from "./Board/Board";

export const Game: FunctionComponent = () => {

    const [gameScore, setGamescore] =useState(0);

    return (
        <section className={styles.content}>
            <h2>Score: {gameScore}</h2>
            <Board gameScore={gameScore} setGameScore={setGamescore} />
        </section>
    );
};
