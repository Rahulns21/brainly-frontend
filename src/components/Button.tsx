import { ReactElement } from "react";

type variantOptions = "primary" | "secondary";

interface ButtonProps {
    variant: variantOptions;
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
};

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600"
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center"

export function Button(props: ButtonProps) {
    return <button onClick={props.onClick} className={`${variantStyles[props.variant]} 
    ${defaultStyles} ${props.fullWidth ? "w-full flex justify-center items-center" : ""}
    ${props.loading ? "opacity-50" : ""}`} disabled={props.loading}>
        {props.startIcon && (
            <div className="pr-2">
                {props.startIcon}
            </div>
        )}
        {props.text}
    </button>
};