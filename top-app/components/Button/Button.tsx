import {JSX} from "react";
import styles from './Button.module.css';
import {ButtonProps} from "@/components/Button/Button.props";
import cn from "classnames";

export const Button = ({appearance, children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.black]: appearance === "black",
            })}
            {...props}
        >
            {children}
        </button>
    );
};