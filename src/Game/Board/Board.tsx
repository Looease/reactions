import React, {FunctionComponent, useState} from "react";
import styles from "./Board.module.scss";
import {Button} from "../Button/Button";
import {GameMode} from "../../App";


//Board contains the all the information for the buttons so we usestate for buttons in here. 

interface BoardProps{
    gameScore: number;
    setGameScore: (newScore: number) => void;
    setMode: (Newmode: GameMode) => void;
}

export const Board: FunctionComponent<BoardProps> = ({gameScore, setGameScore, setMode}) => {

    const [activeButtonId, setActiveButtonId] = useState(0);

   const buttonPressed = () =>{
    if (gameScore === 9){
        setMode("Finished"); 
    }

    const randomButton = Math.floor(Math.random() * 8);
    setActiveButtonId(randomButton);
    //Adds 1 to gamescore
     // whenever we render a button you need to give it gameScore and a setGameScore function that adds 1 to gameScore
    setGameScore(gameScore +1)   
   }


    return (
        <svg className={styles.board} viewBox="0, 0, 1000, 2000">
            <Button id={0} x={150} y={300}  activeButtonId={activeButtonId} onButtonPressed={buttonPressed} />
            <Button id={1} x={150} y={1000} activeButtonId={activeButtonId} onButtonPressed={buttonPressed} />
            <Button id={2} x={150} y={1700} activeButtonId={activeButtonId} onButtonPressed={buttonPressed}/>
            <Button id={3} x={850} y={300}  activeButtonId={activeButtonId} onButtonPressed={buttonPressed}/>
            <Button id={4} x={850} y={1000} activeButtonId={activeButtonId} onButtonPressed={buttonPressed}/>
            <Button id={5} x={850} y={1700} activeButtonId={activeButtonId} onButtonPressed={buttonPressed}/>
            <Button id={6} x={500} y={650}  activeButtonId={activeButtonId} onButtonPressed={buttonPressed}/>
            <Button id={7} x={500} y={1350} activeButtonId={activeButtonId} onButtonPressed={buttonPressed}/>
        </svg>
    );
};

