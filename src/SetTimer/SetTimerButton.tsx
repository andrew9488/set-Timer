import React from "react";

type ButtonProps = {
    title: string
    install: ()=> void
    value?: string
}

export function SetTimerButton(props: ButtonProps) {

    const onClick = () => {props.install()}

    return (
        <div>
            <div className="button">
                <button onClick={onClick}
                >{props.title}</button>
            </div>
        </div>
    );
}

