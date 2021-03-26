import React from "react";
import {SetInputValue} from "./SetInputValue";
import style from "./SetTimerScoreboard.module.css"
import styleContainer from "../common/style/Container.module.css"

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

    const inputClassName = `${(props.maxValue <= props.value || props.value < 0 || props.maxValue < 0) ? style.inputError : ""}`

    return (
        <div className={`${styleContainer.scoreboard} ${style.setTimerScoreboardContainer}`}>
            {props.value >= props.maxValue || props.value < 0 || props.maxValue < 0 ? props.setError(true) : props.setError(false)}

            <SetInputValue title="max value: "
                           value={props.maxValue}
                           update={props.updateMaxValue}
                           setEditMode={props.setEditMode}
                           className={inputClassName}
            />
            <SetInputValue title="min value: "
                           value={props.value}
                           update={props.updateValue}
                           setEditMode={props.setEditMode}
                           className={inputClassName}
            />
        </div>
    );
}