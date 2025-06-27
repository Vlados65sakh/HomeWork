import {HeaderProps} from "./Header.props";
import {JSX} from "react";
import cn from "classnames";
import styles from "@/components/Main/Header/Header.module.css";
import HeaderIcon from "@/components/Main/Header/Header.svg";

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    return (
        <div {...props} className={cn(styles.header, className)}>
            .my_blog
            <div className={styles.iconWrapper}>
                <HeaderIcon/>
            </div>
        </div>

    );
};
