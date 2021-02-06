import {SetTimerScoreboard} from "./SetTimerScoreboard";
import {SetTimerButton} from "./SetTimerButton";
import React from "react";
import './SetTimer.css';

type SetTimerPropsType = {
    value: string
    maxValue: string
    install: () => void
    updateValue: (value: string) => void
    updateMaxValue: (value: string) => void

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