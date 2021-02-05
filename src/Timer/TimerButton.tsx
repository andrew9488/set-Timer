import React from "react";

type TimerButtonProps = {
    onClick: () => void
    title: string
    count: number
    disabled: number
}

export function TimerButton(props: TimerButtonProps) {
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