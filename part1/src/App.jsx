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
    console.log(props.parts);
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
    console.log(props.parts[0].excercises);
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
    const course = "Half stack application development";
    const parts = [
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
    ];

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Footer parts={parts} />
        </div>
    );
}

export default App;
