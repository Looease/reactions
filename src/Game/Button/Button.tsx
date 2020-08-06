import React, { FunctionComponent } from "react";
import styles from "./Button.module.scss";



//below we are telling our board what is required to work. 
interface ButtonProps {
    id: number;
    x: number;
    y: number;
    activeButtonId: number;
    setActiveButtonId: (id: number) => void;
    gameScore: number;
    setGameScore: (newScore: number) => void
}

export const Button: FunctionComponent<ButtonProps> = ({ id, x, y, activeButtonId, setActiveButtonId, gameScore, setGameScore }) => {
    //below we are defining what happens when our button is clicked.
    const isActive = id === activeButtonId;
    const getClassName = (): string => {
        if (isActive) {
            return `${styles.button} ${styles.active}`
            //Above is a new style Javascript string
        }
        return styles.button;
    }
    //This bit makes only one circle be clicked
    // function to call setActiveButtonId 
    const buttonClicked = (): void => {             
        if(isActive){
            const randomButton = Math.floor(Math.random() * 8);
            setActiveButtonId(randomButton);
            //Adds 1 to gamescore
             // whenever we render a button you need to give it gameScore and a setGameScore function that adds 1 to gameScore
            setGameScore(gameScore +1)
            
        }   
    }
    return (
        <circle onClick={buttonClicked} className={getClassName()} cx={x} cy={y} r={100} />

    );
};


