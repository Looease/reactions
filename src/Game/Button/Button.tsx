import React, {FunctionComponent} from "react";
import styles from "./Button.module.scss";



//below we are telling our board what is required to work. 
interface ButtonProps {
    id: number;
    x: number;
    y: number;
    activeButtonId: number;
}

export const Button: FunctionComponent<ButtonProps> = ({id, x, y, activeButtonId}) => {
        const isActive = id === activeButtonId;
        const getClassName = () :string => {
            if (isActive){
                return `${styles.button} ${styles.active}`
            }
            return styles.button;
        }
    return (
        <circle className={getClassName()} cx={x} cy={y} r={100}/>
    );
};










// const getClassName = (): string => {
//     if (isActive) {
//         return `${styles.button} ${styles.active}`
//     }
//     return styles.button;
// }

// // or, if you know the ternary operator...
// const className = isActive ? `${styles.button} ${styles.active}` : styles.button;