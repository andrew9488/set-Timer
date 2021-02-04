import React from "react";

type ScoreboardProps = {
    count: number
}

export function Scoreboard(props: ScoreboardProps) {

    const countClass = props.count === 5 ? "red" : ""

    return (
        <div className="scoreboard">
            <h3 className={countClass}>{props.count}</h3>
        </div>
    );
}