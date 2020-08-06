import React, {FunctionComponent} from 'react';
import {Game} from "./Game/Game";
import styles from "./App.module.scss";

export const App: FunctionComponent = () => {
    return (
        <main className={styles.main}>
            <Game/>
        </main>
    );
};

