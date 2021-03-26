import React from "react";
import style from "./Button.module.css"

type TimerButtonProps = {
    onClick: () => void
    title: string
    minDisabledValue: number
    maxDisabledValue: number
    editMode?: boolean
    setEditMode?: (editMode: boolean) => void
    setCount?: (value: number) => void
    error?: boolean
}

export function Button(props: TimerButtonProps) {

    const onClick = () => {
        props.onClick();
        props.setEditMode && props.setEditMode(false);
        if (props.setCount && props.minDisabledValue) {
            props.setCount(props.minDisabledValue)
        }
    }

    return (
        <div>
            <div className={style.button}>
                <button onClick={onClick}
                        disabled={(props.editMode || props.error ||
                            props.maxDisabledValue === props.minDisabledValue)}
                >{props.title}</button>
            </div>
        </div>
    );
}

