import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface LikeChangedProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    isActive: boolean;

}
