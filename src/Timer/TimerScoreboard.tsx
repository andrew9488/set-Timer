import React from "react";

type TimerScoreboardProps = {
    count: number
    value: number
    maxValue: number
}

export function TimerScoreboard(props: TimerScoreboardProps) {

    const countClass = props.count === props.maxValue ? "red" : ""

    return (
        <div className="scoreboard">
            <h3 className={countClass}>{props.count}</h3>
        </div>
    );
}