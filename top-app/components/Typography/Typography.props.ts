import {ReactNode} from "react";


export interface TypographyProps {
    tag: 'h1' | 'h2'| 'h4' | 'h3';
    color: 'category' | 'dateDescription' | 'title' | 'href';
    children: ReactNode
    className?: string;
}
