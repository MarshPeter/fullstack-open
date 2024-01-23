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
            {props.parts.map((part) => {
                return (
                    <Part
                        key={part.name}
                        partName={part.name}
                        excercisesCount={part.excercises}
                    />
                );
            })}
        </div>
    );
}

function Footer(props) {
    return (
        <div>
            <p>
                Number of excercises{" "}
                {props.parts[0].excercises +
                    props.parts[1].excercises +
                    props.parts[2].excercises}
            </p>
        </div>
    );
}

function App() {
    const course = {
        name: "Half stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                excercises: 10,
            },
            {
                name: "Using props to pass data",
                excercises: 7,
            },
            {
                name: "State of a component",
                excercises: 14,
            },
        ],
    };

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Footer parts={course.parts} />
        </div>
    );
}

export default App;
