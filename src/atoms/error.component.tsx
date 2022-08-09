import React from "react";
import styles from './atoms.module.scss';

export const Error:React.FC<{error?:string}> = ({error}) => (
    <>
        {error && <span className={styles.error}>{error}</span>}
    </>
)