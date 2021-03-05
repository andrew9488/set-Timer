import React from "react";

type TimerScoreboardProps = {
    count: number
    value: number
    maxValue: number
    editMode: boolean
    setEditMode: (editMode: boolean) => void
    error: boolean
}

export function TimerScoreboard(props: TimerScoreboardProps) {

    const countClass = props.count === props.maxValue ? "red" : ""

    return (
        <div className="scoreboard">
            {
                props.error
                    ? <h3 className="editMode">error</h3>
                    : props.editMode
                    ? <h3 className="editMode">settings</h3>
                    : <h3 className={countClass}>{props.count}</h3>
            }
        </div>
    );
}