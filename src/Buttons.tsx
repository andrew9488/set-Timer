import React from "react";
import {Button} from "./Button";

type ButtonsType = {
    increase: () => void
    reset: () => void
    count: number
}

export function Buttons(props: ButtonsType) {

    const increase = () => props.increase()
    const reset = () => props.reset()

    return (
        <div className="buttons">
            <Button title="inc"
                    onClick={increase}
                    disabled={5}
                    count={props.count}/>
            <Button title="reset"
                    onClick={reset}
                    disabled={0}
                    count={props.count}/>
        </div>
    )
}

