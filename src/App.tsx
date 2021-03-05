import React, {useEffect, useState} from 'react';
import './App.css';
import {Timer} from "./Timer/Timer";
import {SetTimer} from "./Timer/SetTimer";

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

    const UpdateValue = (value: number) => {//set-timer
        setValue(value)
    }
    const UpdateMaxValue = (maxValue: number) => {//set-timer
        maxSetValue(maxValue)
    }

    let [editMode, setEditMode] = useState<boolean>(false)
    let [error, setError] = useState<boolean>(false)

    let [count, setCount] = useState<number>(value)//timer

    useEffect(() => {//timer
        let countString = localStorage.getItem("Count")
        if (countString) {
            let countNumber = JSON.parse(countString)
            setCount(countNumber)
        }
    }, [])

    useEffect(() => {//timer
        localStorage.setItem("Count", JSON.stringify(value));
    }, [value])

    function increase() {//timer
        setCount(count + 1);
    }//timer
    function reset() {//timer
        setCount(value);
    }//timer

    return (
        <div className="App">
            <div className="setTimer">
                <SetTimer value={value}
                          maxValue={maxValue}
                          install={Install}
                          updateValue={UpdateValue}
                          updateMaxValue={UpdateMaxValue}
                          setEditMode={setEditMode}
                          setCount={setCount}
                          error={error}
                          setError={setError}
                />
            </div>
            <div className="timer">
                <Timer
                    count={count}
                    increase={increase}
                    reset={reset}
                    value={value}
                    maxValue={maxValue}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    error={error}
                />
            </div>
        </div>
    );
}

export default App;

