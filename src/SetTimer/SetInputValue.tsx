import React, {ChangeEvent} from "react";

type InputValuePropsType = {
    title: string
    value: number
    update: (value: number) => void
}

export function SetInputValue(props: InputValuePropsType){

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let number = Number(e.currentTarget.value)

        props.update(number)
    }

    return(
        <div>
            {props.title} <input type="number" value={props.value} onChange={onChangeHandler}/>
        </div>
    )
}