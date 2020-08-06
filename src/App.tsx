import React, {FunctionComponent, useState} from 'react';
import {Game} from "./Game/Game";
import styles from "./App.module.scss";
import {GameOver} from "./GameOver";
// create a new type that defines the possible 'modes' the game can be in.
// I've called them 'Playing' for when they are clicking buttons, and 'Finished' for once the hame is over.
// Feel free to rename these to whatever makes sense to you though.
export type GameMode = "Playing" | "Finished";


export const App: FunctionComponent = () => {
    // later, inside the App component...
    // create some state to hold the current mode of the game.
    const [mode, setMode] = useState<GameMode>("Finished");

    if (mode === "Playing"){
        return(
            <main className={styles.main}>
                <Game setMode={setMode}/>
            </main>
        );
    }
    return <main>
        <GameOver setMode={setMode}/>
    </main>
};




const Playing:GameMode = "Playing";

