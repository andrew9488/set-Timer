import {SetTimerScoreboard} from "./SetTimerScoreboard";
import React from "react";
import './SetTimer.css';
import {Button} from "./Button";

type SetTimerPropsType = {
    value: number
    maxValue: number
    install: () => void
    updateValue: (value: number) => void
    updateMaxValue: (value: number) => void
    setEditMode: (editMode: boolean) => void
    setCount: (value: number) => void
    error: boolean
    setError: (error: boolean)=>void
}

export function SetTimer(props: SetTimerPropsType) {
    return (
        <div className="setTimerValue">
            <SetTimerScoreboard
                value={props.value}
                maxValue={props.maxValue}
                updateValue={props.updateValue}
                updateMaxValue={props.updateMaxValue}
                setEditMode={props.setEditMode}
                error={props.error}
                setError={props.setError}
            />
            <Button onClick={props.install}
                    title="set"
                    minDisabledValue={props.value}
                    maxDisabledValue={props.maxValue}
                    setEditMode={props.setEditMode}
                    setCount={props.setCount}
                    error={props.error}
            />
        </div>
    )
}