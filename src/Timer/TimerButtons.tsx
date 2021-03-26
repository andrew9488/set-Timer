import React from "react";
import {Button} from "./Button";
import style from "./TimerButtons.module.css"

type ButtonsType = {
    increase: () => void
    reset: () => void
    count: number
    maxValue: number
    value: number
    editMode: boolean
}

export function TimerButtons(props: ButtonsType) {

    const increase = () => props.increase()
    const reset = () => props.reset()

    return (
        <div className={style.buttons}>
            <Button title="inc"
                    onClick={increase}
                    maxDisabledValue={props.maxValue}
                    minDisabledValue={props.count}
                    editMode={props.editMode}
            />
            <Button title="reset"
                    onClick={reset}
                    maxDisabledValue={props.value}
                    minDisabledValue={props.count}
                    editMode={props.editMode}
            />
        </div>
    )
}

