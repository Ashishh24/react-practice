// React.createElement(type, props, Children)
// type - h1/h2/h6/div/p
// props - Properties/attributes
// children - if one , write normally
//            if more, write in an array 

// const heading = React.createElement("h1",{},"Hello World from REACT!");
// // react.createElement(Object) => HTML(Browsers Understands)

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

// For nested structure
{/* <div>
    <div>
        <h1></h1>
    </div>
</div> */}
// to create this above code:

// const parent = React.createElement("div", {id: "parent"}, 
//     React.createElement("div", {id: "child"}, 
//         React.createElement("h1", {}, "Hello World from REACT!")
//     )
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(parent);

// For nested structure
{/* <div>
    <div>
        <h1></h1>
        <h2></h2>
    </div>
</div> */}
// to create this above code with siblings, we need to paas an array in children section:

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, 
        [
            React.createElement("h1", {key: "h1"}, "I'm a h1 tag"),
            React.createElement("h2", {key: "h2"}, "I'm a h2 tag")
        ]
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);