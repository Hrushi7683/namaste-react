/*
const heading = React.createElement("h1", {id : "heading" , xyz : "abc"} , "Welcome to world of react");
// this creates a js object/normal react element of name heading
//wlcome to the world of react is children 
// id is a attribute for heading
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
//render takes object heading and put that into heading tag h1

*/

// how to create nested structure like bellow in react
/*

<div id ="parent">
    <div id = "child">
        <h1>this is heading</h1>
    </div>
</div>

*/

/*

const parent = React.createElement("div", {id : "parent" } , 
React.createElement("div" , {id : "child"} ,
 React.createElement("h1" , {id : "h1"} , "this is heading")));

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

*/
// ReactElement(object) [with help of createElement method ] --- > HTML(Browser understands) [with help of render method]


// how to create nested structure with more than 1 sibling of h1 tag like bellow in react
/*

<div id ="parent">
    <div id = "child">
        <h1>this is heading1</h1>
        <h2>this is heading2</h2>
    </div>
</div>

*/

/*
const parent = React.createElement(
    "div",
     {id : "parent" } , 
React.createElement(
    "div" ,
     {id : "child"} ,
[ React.createElement("h1" , {id : "h1"} , "this is heading1") ,
React.createElement("h2" , {id : "h2"} , "this is heading2")]
)
);

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// how to create nested structure with more than 1 sibling of h1 tag like bellow in react
/*

<div id ="parent">
    <div id = "child1">
        <h1>this is heading1</h1>
        <h2>this is heading2</h2>
    </div>
     <div id = "child2">
        <h1>this is heading3</h1>
        <h2>this is heading4</h2>
    </div>
</div>

*/


const parent = React.createElement(
    "div",
     {id : "parent" } , 
[React.createElement(
    "div" ,
     {id : "child1"} ,
[ React.createElement("h1" , {id : "h1"} , "this is heading1") ,
React.createElement("h2" , {id : "h2"} , "this is heading2")]
) , 
React.createElement(
    "div" ,
     {id : "child2"} ,
[ React.createElement("h1" , {id : "h1"} , "this is heading3") ,
React.createElement("h2" , {id : "h2"} , "this is heading4")]
)]
);

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
