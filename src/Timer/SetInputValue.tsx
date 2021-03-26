import React, {ChangeEvent} from "react";
import style from "./SetInputValue.module.css"

type InputValuePropsType = {
    title: string
    value: number
    update: (value: number) => void
    setEditMode: (editMode: boolean) => void
    className: string
}

export function SetInputValue(props: InputValuePropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let number = Number(e.currentTarget.value)
        props.update(number)
        props.setEditMode(true)
    }

    return (
        <span className={style.inputStyle}>
            {props.title} <input className={props.className}
                                 type="number"
                                 value={props.value}
                                 onChange={onChangeHandler}
        />
        </span>
    )
}