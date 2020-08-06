import React, {FunctionComponent} from 'react';
import {GameMode} from "./App";

interface GameOverProps{
    setMode: (Newmode: GameMode) => void;
}

export const GameOver: FunctionComponent <GameOverProps>= ({setMode}) => {
    

    
    return (
        <section>
            <h2>Congrats on playing the game </h2>
            <button onClick={() => setMode("Playing")}>Start Again</button>
        </section>
    );
};
