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
            <Part
                partName={props.part1.name}
                excercisesCount={props.part1.excercises}
            />
            <Part
                partName={props.part2.name}
                excercisesCount={props.part2.excercises}
            />
            <Part
                partName={props.part3.name}
                excercisesCount={props.part3.excercises}
            />
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
    const part1 = {
        name: "Fundamentals of React",
        excercises: 10,
    };
    const part2 = {
        name: "Fundamentals of React",
        excercises: 10,
    };
    const part3 = {
        name: "Fundamentals of React",
        excercises: 10,
    };

    return (
        <div>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} />
            <Footer
                excercises1={part1.excercises1}
                excercises2={part2.excercises}
                excercises3={part3.excercises}
            />
        </div>
    );
}

export default App;
