import {SetTimerScoreboard} from "./SetTimerScoreboard";
import {SetTimerButtons} from "./SetTimerButtons";
import React from "react";
import './SetTimer.css';

type SetTimerPropsType = {
    value: number
    install: () => void
}

export function SetTimer(props: SetTimerPropsType) {
    return (
        <div className="setTimerValue">
            <SetTimerScoreboard value={props.value}/>
            <SetTimerButtons install={props.install}
                             value={props.value}/>
        </div>
    )
}