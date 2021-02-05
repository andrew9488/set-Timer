import React from "react";

type TimerScoreboardProps = {
    count: number
}

export function TimerScoreboard(props: TimerScoreboardProps) {

    const countClass = props.count === 5 ? "red" : ""

    return (
        <div className="scoreboard">
            <h3 className={countClass}>{props.count}</h3>
        </div>
    );
}