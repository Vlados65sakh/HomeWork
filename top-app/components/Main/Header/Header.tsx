import cn from "classnames";
import styles from "@/components/Main/Header/Header.module.css";
import HeaderIcon from "@/components/Main/Header/Header.svg";
import {ReactElement} from "react";
import Link from "next/link";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const Header = ({className, ...props}: HeaderProps): ReactElement => {
    return (
        <div {...props} className={cn(styles.header, className)}>
            .my_blog
            <div className={styles.iconWrapper}>
                <Link href={"https://github.com/Vlados65sakh/HomeWork"}>
                <HeaderIcon/>
                </Link>
            </div>
        </div>
    );
};
