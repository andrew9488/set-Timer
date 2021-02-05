import React, {useState} from 'react';
import './App.css';
import { SetTimer } from './SetTimer/SetTimer';
import {Timer} from "./Timer/Timer";


function App() {

    let [count, setCount] = useState<number>(0)
    let [value, setValue] = useState<number>(0)

    function install(){
        setValue(value)
    }

    function increase() {
        setCount(count + 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="App">
            <div className="setTimer">
                <SetTimer value={value}
                       install={install}
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

