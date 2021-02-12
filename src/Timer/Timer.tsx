import {TimerScoreboard} from "./TimerScoreboard";
import {TimerButtons} from "./TimerButtons";
import React from "react";
import './Timer.css';

type TimerPropsType = {
    count: number
    increase: () => void
    reset: () => void
    value: number
    maxValue: number
}

export function Timer(props: TimerPropsType) {
    return (
        <div className="timerValue">
            <TimerScoreboard
                count={props.count}
                value={props.value}
                maxValue={props.maxValue}
            />
            <TimerButtons increase={props.increase}
                          reset={props.reset}
                          count={props.count}
                          maxValue={props.maxValue}
                          value={props.value}/>
        </div>
    )
}