import {TypographyProps} from "./Typography.props";
import styles from './Typography.module.css';
import cn from "classnames";
import {Open_Sans} from "next/font/google";

const openSans = Open_Sans({
    subsets: ['cyrillic', 'latin'],
    weight: ['400', '500', '600'],
});

export const Typography = ({tag, color, children, className}: TypographyProps) => {
    const Tag = tag;

    return (
        <Tag
            className={cn(
                openSans.className,
                styles[tag],
                styles[color],
                className
            )}
            >
            {children}
        </Tag>
    );
};