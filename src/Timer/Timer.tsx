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
    editMode: boolean
    setEditMode: (editMode: boolean) => void
    error: boolean
}

export function Timer(props: TimerPropsType) {
    return (
        <div className="timerValue">
            <TimerScoreboard
                count={props.count}
                value={props.value}
                maxValue={props.maxValue}
                setEditMode={props.setEditMode}
                editMode={props.editMode}
                error={props.error}
            />
            <TimerButtons increase={props.increase}
                          reset={props.reset}
                          count={props.count}
                          maxValue={props.maxValue}
                          value={props.value}
                          editMode={props.editMode}/>
        </div>
    )
}