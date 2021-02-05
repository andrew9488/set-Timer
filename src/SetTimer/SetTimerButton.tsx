import React from "react";

type ButtonProps = {
    onClick: () => void
    title: string
    value: number
    disabled: number
}

export function SetTimerButton(props: ButtonProps) {
    return (
        <div>
            <div className="button">
                <button onClick={props.onClick}
                        disabled={props.value === props.disabled}
                >{props.title}</button>
            </div>
        </div>
    );
}