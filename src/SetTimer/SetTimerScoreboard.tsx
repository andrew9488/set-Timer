import React from "react";
import {InputValue} from "./InputValue";

type ScoreboardProps = {
    value: number
}

export function SetTimerScoreboard(props: ScoreboardProps) {

    return (
        <div className="scoreboard">
            <InputValue title=" maximum value: "/>
            <InputValue title=" starting value: "/>
        </div>
    );
}