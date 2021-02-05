import React from "react";

type InputValuePropsType = {
    title: string
}

export function InputValue(props: InputValuePropsType){
    return(
        <div>
            {props.title} <input type="number"/>
        </div>
    )
}