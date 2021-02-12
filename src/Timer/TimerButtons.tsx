import React from "react";
import {TimerButton} from "./TimerButton";

type ButtonsType = {
    increase: () => void
    reset: () => void
    count: number
    maxValue: number
    value: number
}

export function TimerButtons(props: ButtonsType) {

    const increase = () => props.increase()
    const reset = () => props.reset()

    return (
        <div className="buttons">
            <TimerButton title="inc"
                         onClick={increase}
                         disabled={props.maxValue}
                         count={props.count}
            />
            <TimerButton title="reset"
                         onClick={reset}
                         disabled={props.value}
                         count={props.count}
            />
        </div>
    )
}

