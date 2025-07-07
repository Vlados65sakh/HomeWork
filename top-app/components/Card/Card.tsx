'use client';

import {useState} from "react";
import CardIcon from './mini.svg';
import LikeIcon from '../Like/like.svg';
import {Typography} from "../Typography/Typography";
import styles from "./Card.module.css";
import Link from "next/link";
import {CardProps} from "@/components/Card/Card.props";


export const Card: React.FC<CardProps> = ({ className, ...props }) => {

    const [counter, setCounter] = useState(0);

    return (
        <div
            /* объединяем свой стиль и переданный извне */
            className={`${styles.card} ${className || ""}`}
            {...props}
        >
            <CardIcon className={styles.image}/>

            {/* Текстовая часть */}
            <div className={styles.topRow}>
                <div className={styles.category}>
                    <Typography tag={"h1"} color={"category"}>
                        Front-end
                    </Typography>
                    <Typography tag={"h1"} color={"dateDescription"}>
                        • 1 месяц назад
                    </Typography>
                </div>

                {/* Лайк */}
                <div className={styles.like}>
                    <span>{counter}</span>
                    <LikeIcon onClick={() => setCounter(x => x + 1)}></LikeIcon>
                </div>
            </div>
            {/* Заголовок */}
            <div className={styles.titleWrapper}>
                <Typography tag={"h4"} color={"title"}>
                    Как работать с CSS Grid
                </Typography>
                <Typography tag={"h2"} color={"dateDescription"}>
                    Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS.
                    Гриды подойдут и для верстки основных областей страницы..
                </Typography>
                {/* Под заголовком */}
            </div>
            <div className={styles.topRow}>
                {/* Под заголовком */}
                <Typography tag={"h1"} color={"dateDescription"}>
                    3 минуты
                </Typography>

                <Link href="/read">
                    <Typography tag="h1" color="href">Читать →</Typography>
                </Link>
            </div>
        </div>
    );
};
