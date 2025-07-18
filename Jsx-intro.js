import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id: "heading"}, "Hello");

//***** JSX (transpiled before it reachers the JS) - Parcel - Babel
//***** JSX => Babel transpiles it to React.createElement => ReactElement- JS Object => HTMLElement(render)

// const jsxHeadingS = <h1>Hello using JSX</h1>

const number = 100;

const FunctionalComponent = () => (
    <div>
        <h2>{number}</h2>
        <h1>Hello using functional component</h1>
    </div>
)



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <FunctionalComponent />
);