import {JSX} from "react";
import styles from './Like.module.css';
import {LikeProps} from "@/components/Like/Like.props";
import cn from "classnames";
import LikeIcon from './like.svg';

export const Like = ({className, ...props}: LikeProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className,{
            })}
            {...props}
        >
                <LikeIcon />
            <>
            </>
            </button>

    );
};