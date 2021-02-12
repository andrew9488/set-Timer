import {SetTimerScoreboard} from "./SetTimerScoreboard";
import {SetTimerButton} from "./SetTimerButton";
import React from "react";
import './SetTimer.css';

type SetTimerPropsType = {
    value: number
    maxValue: number
    install: () => void
    updateValue: (value: number) => void
    updateMaxValue: (value: number) => void

}

export function SetTimer(props: SetTimerPropsType) {
    return (
        <div className="setTimerValue">
            <SetTimerScoreboard
                value={props.value}
                maxValue={props.maxValue}
                updateValue={props.updateValue}
                updateMaxValue={props.updateMaxValue}
            />
            <SetTimerButton
                title="set"
                value={props.value}
                install={props.install}
            />
        </div>
    )
}