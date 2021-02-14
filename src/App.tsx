import React, {useEffect, useState} from 'react';
import './App.css';
import {SetTimer} from './SetTimer/SetTimer';
import {Timer} from "./Timer/Timer";


function App() {

    let [value, setValue] = useState<number>(0)//set-timer
    let [maxValue, maxSetValue] = useState<number>(0)//set-timer

    const Install = () => {//set-timer
        localStorage.setItem("Value", JSON.stringify(value));
        localStorage.setItem("MaxValue", JSON.stringify(maxValue));
    }

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


    const UpdateValue = (value:number) => {
        setValue(value)
    }
    const UpdateMaxValue = (maxValue: number) => {
        maxSetValue(maxValue)
    }

    let [count, setCount] = useState<number>(value)//timer

    useEffect(() => {//timer
        let countString = localStorage.getItem("Count")
        if (countString) {
            let countNumber = JSON.parse(countString)
            setCount(countNumber)
        }
    }, [])

    useEffect( ()=> {
        localStorage.setItem("Count", JSON.stringify(value));
    }, [value])

    function increase() {//timer
        setCount(count + 1);
    }//timer
    function reset() {
        setCount(value);
    }//timer



    return (
        <div className="App">
            <h3>set-timer</h3>
            <div className="setTimer">
                <SetTimer value={value}
                          maxValue={maxValue}
                          install={Install}
                          updateValue={UpdateValue}
                          updateMaxValue={UpdateMaxValue}
                />
            </div>
            <div className="timer">
                <Timer
                    count={count}
                    increase={increase}
                    reset={reset}
                    value={value}
                    maxValue={maxValue}
                />
            </div>
        </div>
    );
}

export default App;

