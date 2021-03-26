import React from "react";
import style from "./TimerScoreboard.module.css"
import styleContainer from "../common/style/Container.module.css"

type TimerScoreboardProps = {
    count: number
    value: number
    maxValue: number
    editMode: boolean
    setEditMode: (editMode: boolean) => void
    error: boolean
}

export function TimerScoreboard(props: TimerScoreboardProps) {


    const countClass = props.count === props.maxValue ? style.disable : ""

    return (
        <div className={`${styleContainer.scoreboard} ${style.timerScoreboard}`}>
            {
                props.error
                    ? <span>error</span>
                    : props.editMode
                    ? <span>settings</span>
                    : <span className={countClass}>{props.count}</span>
            }
        </div>
    );
}