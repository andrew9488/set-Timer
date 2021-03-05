import React from "react";
import {SetInputValue} from "./SetInputValue";
import s from "./Input.module.css"

type ScoreboardProps = {
    value: number
    maxValue: number
    updateValue: (value: number) => void
    updateMaxValue: (value: number) => void
    setEditMode: (editMode: boolean) => void
    error: boolean
    setError: (error: boolean) => void
}

export function SetTimerScoreboard(props: ScoreboardProps) {

    const inputClassName = `${(props.maxValue <= props.value || props.value < 0 || props.maxValue<0) ? s.inputError : s.inputDefault}`

    return (
        <div className="scoreboard">
            {props.value >= props.maxValue || props.value < 0 || props.maxValue < 0 ? props.setError(true) : props.setError(false)}

            <SetInputValue title=" maximum value: "
                           value={props.maxValue}
                           update={props.updateMaxValue}
                           setEditMode={props.setEditMode}
                           className={inputClassName}
            />
            <SetInputValue title=" starting value: "
                           value={props.value}
                           update={props.updateValue}
                           setEditMode={props.setEditMode}
                           className={inputClassName}
            />
        </div>
    );
}