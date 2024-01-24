import { useState } from "react";

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    function onGoodClick() {
        setGood(good + 1);
    }
    function onNeutralClick() {
        setNeutral(neutral + 1);
    }

    function onBadClick() {
        setBad(bad + 1);
    }

    return (
        <div>
            <div>
                <h1>give feedback</h1>
            </div>
            <div>
                <button onClick={onGoodClick}>good</button>
                <button onClick={onNeutralClick}>neutral</button>
                <button onClick={onBadClick}>bad</button>
            </div>
            <div>
                <h1>statistics</h1>
            </div>
            <div>good {good}</div>
            <div>neutral {neutral}</div>
            <div>bad {bad}</div>
        </div>
    );
}

export default App;
