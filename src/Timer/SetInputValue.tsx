import React, {ChangeEvent} from "react";

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
        <div>
            {props.title} <input className={props.className}
                                 type="number"
                                 value={props.value}
                                 onChange={onChangeHandler}
        />
        </div>
    )
}