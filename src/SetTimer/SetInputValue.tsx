import React, {ChangeEvent, useState} from "react";

type InputValuePropsType = {
    title: string
    value: string
    update: (value: string) => void
}

export function SetInputValue(props: InputValuePropsType){

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.update(e.currentTarget.value)
    }

    return(
        <div>
            {props.title} <input type="number" value={props.value} onChange={onChangeHandler}/>
        </div>
    )
}