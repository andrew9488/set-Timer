import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from "./Scoreboard";
import {Buttons} from "./Buttons";

function App() {

    let [count, setCount] = useState<number>(0)

    function increase() {
        setCount(count + 1);
    }
    function reset() {
        setCount(0);
    }

    return (
        <div className="App">
            <Scoreboard count={count}/>
            <Buttons increase={increase}
                     reset={reset}
                     count={count}
            />
        </div>
    );
}

export default App;

