'use client';

import {useState} from "react";
import PostIcon from './post.svg';
import {Typography} from "../Typography/Typography";
import styles from "./Post.module.css";
import {CardProps} from "@/components/Card/Card.props";
import LikeIcon from '../Like/like.svg';
import {Comments} from '../Comennts/Comments';
import {ReviewForm} from "@/components";


export const Post: React.FC<CardProps> = ({ className, ...props }) => {

    const [counter, setCounter] = useState(0);

    return (
        <div
            /* объединяем свой стиль и переданный извне */
            className={`${styles.wrapper} ${className || ""}`}
            {...props}
        >
            {/* Текстовая часть */}
            <div className={styles.top}>
                Как работать с CSS Grid
            </div>
            <div className={styles.topRow}>
                <div className={styles.category}>
                    <Typography tag={"h1"} color={"category"}>
                        Front-end
                    </Typography>
                    <Typography tag={"h1"} color={"dateDescription"}>
                        •
                    </Typography>
                    <Typography tag={"h1"} color={"dateDescription"}>
                        1 месяц назад
                    </Typography>
                    <Typography tag={"h1"} color={"dateDescription"}>
                        •
                    </Typography>
                    <Typography tag={"h1"} color={"dateDescription"}>
                        3 минуты
                    </Typography>
                    <Typography tag={"h1"} color={"dateDescription"}>
                        •
                    </Typography>
                    {/* Лайк */}
                    <div className={styles.like}>
                        <span>{counter}</span>
                        <LikeIcon onClick={() => setCounter(x => x + 1)}></LikeIcon>
                    </div>
                </div>

            <PostIcon className={styles.image}/>

            </div>
            {/* Заголовок */}
            <div className={styles.titleWrapper}>
                    Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS.
                    Гриды подойдут и для верстки основных областей страницы, и небольших элементов пользовательского интерфейса.
                    Эта статья даёт общее представление о грид-раскладке и новой терминологии, которая является частью спецификации
                    CSS Grid Layout Level 1. Более подробно показанные возможности будут описаны описаны далее в руководстве.
                {/* Под заголовком */}
            </div>

            {/* Текстовая часть */}
            <div className={styles.top}>
                Что такое грид?
            </div>

            <div className={styles.titleWrapper}>
                Грид представляет собой пересекающийся набор горизонтальных и вертикальных линий, образующих колонки и строки.
                Элементы могут быть помещены в грид в пределах линий этих колонок и строк. Грид имеет следующие особенности:
            </div>

            <Comments/>

            <ReviewForm />

        </div>
    );
};
