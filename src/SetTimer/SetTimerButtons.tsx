import React from "react";
import {SetTimerButton} from "./SetTimerButton";

type ButtonsType = {
    install: () => void
    value: number
}

export function SetTimerButtons(props: ButtonsType) {

    const install = () => props.install()

    return (
        <div className="buttons">
            <SetTimerButton title="set"
                            onClick={install}
                            disabled={5}
                            value={props.value}/>
            </div>
    )
}

