import React from "react";

type ButtonProps = {
    onClick: () => void
    title: string
    count: number
    disabled: number
}

export function Button(props: ButtonProps) {
    return (
        <div>
            <div className="button">
                <button onClick={props.onClick}
                        disabled={props.count === props.disabled}
                >{props.title}</button>
            </div>
        </div>
    );
}