import React, { FunctionComponent } from "react";
import styles from "./Button.module.scss";



//below we are telling our board what is required to work. 
interface ButtonProps {
    id: number;
    x: number;
    y: number;
    activeButtonId: number;
    onButtonPressed: ()=> void;
}

export const Button: FunctionComponent<ButtonProps> = ({ id, x, y, activeButtonId, onButtonPressed }) => {
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
         onButtonPressed();               
        } 

    }
    return (
        <circle onClick={buttonClicked} className={getClassName()} cx={x} cy={y} r={100} />

    );
};


