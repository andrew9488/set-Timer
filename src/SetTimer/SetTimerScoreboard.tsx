import React from "react";
import {SetInputValue} from "./SetInputValue";

type ScoreboardProps = {
    value: number
    maxValue: number
    updateValue: (value: number) => void
    updateMaxValue: (value: number) => void
}

export function SetTimerScoreboard(props: ScoreboardProps) {

    return (
        <div className="scoreboard">
            <SetInputValue title=" maximum value: " value={props.maxValue} update={props.updateMaxValue}/>
            <SetInputValue title=" starting value: " value={props.value} update={props.updateValue}/>
        </div>
    );
}