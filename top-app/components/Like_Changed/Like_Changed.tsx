'use client';


import {JSX, useState} from "react";
import styles from './Like_Changed.module.css';
import {LikeChangedProps} from "./Like_Changed.props";
import cn from "classnames";
import LikeIcon from './like.svg';
import Rectangle from './Rectangle.svg'

export const Like_Changed = ({isActive = false,className, ...props}: LikeChangedProps): JSX.Element => {
    const [active, setActive] = useState<boolean>(isActive);


    return (
        <button
            onClick={() => setActive(v => !v)}
            className={cn(styles.button, { [styles.active]: active })}
            {...props}
        >
            <div className={styles.svgWrapper}>
                <Rectangle className={styles.bg} />
                <LikeIcon      className={styles.like} />
            </div>
        </button>
    );
};