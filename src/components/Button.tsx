import { ReactElement } from "react";

type variantOptions = "primary" | "secondary";

interface ButtonProps {
    variant: variantOptions;
    text: string;
    startIcon?: ReactElement;
};

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600"
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center"

export function Button(props: ButtonProps) {
    return <button className={`${variantStyles[props.variant]} ${defaultStyles}`}>
        <div className="pr-2">
            {props.startIcon}
        </div>
        {props.text}
    </button>
};