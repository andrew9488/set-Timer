import React from "react";
import {TimerButton} from "./TimerButton";

type ButtonsType = {
    increase: () => void
    reset: () => void
    count: number
}

export function TimerButtons(props: ButtonsType) {

    const increase = () => props.increase()
    const reset = () => props.reset()

    return (
        <div className="buttons">
            <TimerButton title="inc"
                    onClick={increase}
                    disabled={5}
                    count={props.count}/>
            <TimerButton title="reset"
                    onClick={reset}
                    disabled={0}
                    count={props.count}/>
        </div>
    )
}

