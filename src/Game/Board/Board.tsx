import React, {FunctionComponent, useState} from "react";
import styles from "./Board.module.scss";
import {Button} from "../Button/Button";

//Board contains the all the information for the buttons so we usestate for buttons in here. 

interface BoardProps{
    gameScore: number;
    setGameScore: (newScore: number) => void;
}

export const Board: FunctionComponent<BoardProps> = ({gameScore, setGameScore}) => {

    const [activeButtonId, setActiveButtonId] = useState(0);

    return (
        <svg className={styles.board} viewBox="0, 0, 1000, 2000">
            <Button id={0} x={150} y={300}  activeButtonId={activeButtonId} setActiveButtonId={setActiveButtonId} gameScore={gameScore} setGameScore={setGameScore}/>
            <Button id={1} x={150} y={1000} activeButtonId={activeButtonId} setActiveButtonId={setActiveButtonId} gameScore={gameScore} setGameScore={setGameScore} />
            <Button id={2} x={150} y={1700} activeButtonId={activeButtonId} setActiveButtonId={setActiveButtonId} gameScore={gameScore} setGameScore={setGameScore}/>

            <Button id={3} x={850} y={300}  activeButtonId={activeButtonId} setActiveButtonId={setActiveButtonId} gameScore={gameScore} setGameScore={setGameScore}/>
            <Button id={4} x={850} y={1000} activeButtonId={activeButtonId} setActiveButtonId={setActiveButtonId} gameScore={gameScore} setGameScore={setGameScore}/>
            <Button id={5} x={850} y={1700} activeButtonId={activeButtonId} setActiveButtonId={setActiveButtonId} gameScore={gameScore} setGameScore={setGameScore}/>

            <Button id={6} x={500} y={650}  activeButtonId={activeButtonId} setActiveButtonId={setActiveButtonId} gameScore={gameScore} setGameScore={setGameScore}/>
            <Button id={7} x={500} y={1350} activeButtonId={activeButtonId} setActiveButtonId={setActiveButtonId} gameScore={gameScore} setGameScore={setGameScore}/>
        </svg>
    );
};
