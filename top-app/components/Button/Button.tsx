import {JSX} from "react";
import styles from './Button.module.css';
import {CardProps} from "@/components/Card/Card.props";
import cn from "classnames";
import ArrowIcon from './arrow.svg';

export const Button = ({appearance, arrow = 'none', children, className, ...props}: CardProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className,{
                [styles.primary]: appearance === "primary",
                [styles.ghost]: appearance === "ghost",
            })}
            {...props}
        >
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down',
            })}>
                <ArrowIcon />
            </span>}
            </button>
    );
};