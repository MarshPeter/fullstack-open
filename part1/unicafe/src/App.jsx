import { useState } from "react";

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);
    const [average, setAverage] = useState(0);
    const [positive, setPositive] = useState(0);

    function onGoodClick() {
        const nextGood = good + 1;
        setGood(nextGood);

        const nextAll = nextGood + neutral + bad;
        setAll(nextAll);

        setAverage((nextGood - bad) / nextAll);
        setPositive((nextGood / nextAll) * 100);
    }
    function onNeutralClick() {
        const nextNeutral = neutral + 1;
        setNeutral(nextNeutral);

        const nextAll = good + nextNeutral + bad;
        setAll(nextAll);

        setAverage((good - bad) / nextAll);
        setPositive((good / nextAll) * 100);
    }

    function onBadClick() {
        const nextBad = bad + 1;
        setBad(nextBad);

        const nextAll = good + neutral + nextBad;
        setAll(nextAll);

        setAverage((good - nextBad) / nextAll);
        setPositive((good / nextAll) * 100);
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
            <div>all {all}</div>
            <div>average {average}</div>
            <div>positive {positive} %</div>
        </div>
    );
}

export default App;
