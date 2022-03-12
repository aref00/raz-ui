import {  MouseEventHandler } from "react"
import { Theme } from '../../theme/theme.types';
export interface ButtonProps {
    primary?:boolean,
    disabled?: boolean,
    size?: "small" | "medium" | "large",
	theme?: Theme,
    onClick?: MouseEventHandler<HTMLButtonElement>
}