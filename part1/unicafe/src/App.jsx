import { useState } from "react";

function StatisticsLine(props) {
    return (
        <div>
            {props.name} {props.value}
        </div>
    );
}

function Statistics(props) {
    if (props.all === 0) {
        return (
            <div>
                <p>No Feedback Given</p>
            </div>
        );
    }
    return (
        <div>
            <StatisticsLine name="good" value={props.good} />
            <StatisticsLine name="neutral" value={props.neutral} />
            <StatisticsLine name="bad" value={props.bad} />
            <StatisticsLine name="all" value={props.all} />
            <StatisticsLine name="average" value={props.average} />
            <StatisticsLine name="positive" value={props.positive} />
        </div>
    );
}

function Button(props) {
    return <button onClick={props.onClick}>{props.name}</button>;
}

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
                <Button name="good" onClick={onGoodClick} />
                <Button name="neutral" onClick={onNeutralClick} />
                <Button name="bad" onClick={onBadClick} />
            </div>
            <div>
                <h1>statistics</h1>
            </div>
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                all={all}
                average={average}
                positive={positive}
            />
        </div>
    );
}

export default App;
