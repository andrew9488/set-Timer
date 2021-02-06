import React, {useEffect, useState} from 'react';
import './App.css';
import {SetTimer} from './SetTimer/SetTimer';
import {Timer} from "./Timer/Timer";


function App() {

    let [value, setValue] = useState<string>("0")//set-timer
    let [maxValue, maxSetValue] = useState<string>("0")//set-timer

    useEffect(() => {//set-timer
        let valueString = localStorage.getItem("Value")
        if (valueString) {
            let valueNumber = JSON.parse(valueString)
            setValue(valueNumber)
        }
    }, [])

    useEffect(() => {//set-timer
        let valueString = localStorage.getItem("MaxValue")
        if (valueString) {
            let valueNumber = JSON.parse(valueString)
            maxSetValue(valueNumber)
        }
    }, [])

    const Install = () => {//set-timer
        localStorage.setItem("Value", JSON.stringify(value));
        localStorage.setItem("MaxValue", JSON.stringify(maxValue));
    }

    const UpdateValue = (value:string)=> {
    const newValue = value
        setValue(newValue)
    }
    const UpdateMaxValue = (maxValue:string)=> {
    const newMaxValue = maxValue
        maxSetValue(newMaxValue)
    }

    let [count, setCount] = useState<number>(0)//timer
    function increase() {//timer
        setCount(count + 1);
    }//timer
    function reset() {
        setCount(0);
    }//timer

    return (
        <div className="App">
            <div className="setTimer">
                <SetTimer value={value}
                          maxValue={maxValue}
                          install={Install}
                          updateValue={UpdateValue}
                          updateMaxValue={UpdateMaxValue}
                />
            </div>
            <div className="timer">
                <Timer count={count}
                       increase={increase}
                       reset={reset}
                />
            </div>
        </div>
    );
}

export default App;

