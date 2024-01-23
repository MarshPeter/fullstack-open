function Header(props) {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    );
}

function Part(props) {
    return (
        <div>
            <p>
                {props.partName} {props.excercisesCount}
            </p>
        </div>
    );
}

function Content(props) {
    return (
        <div>
            <Part partName={props.part1} excercisesCount={props.excercises1} />
            <Part partName={props.part2} excercisesCount={props.excercises2} />
            <Part partName={props.part3} excercisesCount={props.excercises3} />
        </div>
    );
}

function Footer(props) {
    return (
        <div>
            <p>
                Number of excercises{" "}
                {props.excercises1 + props.excercises2 + props.excercises3}
            </p>
        </div>
    );
}

function App() {
    const course = "Half stack application development";
    const part1 = "Fundamentals of React";
    const excercises1 = 10;
    const part2 = "Using props to pass data";
    const excercises2 = 7;
    const part3 = "State of a component";
    const excercises3 = 14;

    return (
        <div>
            <Header course={course} />
            <Content
                part1={part1}
                part2={part2}
                part3={part3}
                excercises1={excercises1}
                excercises2={excercises2}
                excercises3={excercises3}
            />
            <Footer
                excercises1={excercises1}
                excercises2={excercises2}
                excercises3={excercises3}
            />
        </div>
    );
}

export default App;
