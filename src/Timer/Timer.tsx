import {TimerScoreboard} from "./TimerScoreboard";
import {TimerButtons} from "./TimerButtons";
import React from "react";
import './Timer.css';

type TimerPropsType = {
    count: number
    increase: () => void
    reset: () => void
}

export function Timer(props: TimerPropsType) {
    return (
        <div className="timerValue">
            <TimerScoreboard count={props.count}/>
            <TimerButtons increase={props.increase}
                     reset={props.reset}
                     count={props.count}/>
        </div>
    )
}