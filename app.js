import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ==> ReactElement (JS object) ==> HTMLElement(render)

//const heading = React.createElement("h1", {id : "heading" , xyz : "abc"} , "Welcome to world of react");

// this creates a js object/normal react element of name heading
//wlcome to the world of react is children 
// id is a attribute for heading
//const root =  ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
//render takes object heading and put that into heading tag h1

// This method is kind of boaring/lengthy method of creating the h1 tag
//So the another way of creating this , is using JSX
// What is JSX --->JSX is a JavaScript Extension Syntax used in React to easily write HTML
//and JavaScript together. it looks like HTML syntax

//JSX => React.createElement => ReactElement (JS object) ==> HTMLElement(render)
//This process is done by Babel

//const jsxheading = <h1 className="a" tabIndex="3">welocome to world of react using JSX</h1>;

//this is not a proper valid JS, error is there in console
//thisis working bcoz of parcel
//how? jsx code --> transpiled(this code is converted to code which browser nad react can understand)-->reached to JS engine
//transpling is done by parcel , but parcel does not do this by its own , it is done by 
//package known as Babel 
//Babel is JS compiler which takes jsx code transpile that into react code , so browser and js engine can understand it

// const root =  ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);

//react element is created
const vara = <h1>
  Just testing !
</h1> ;



// Functional based component



const Title = () => {
    return <h1> welocome the session of React </h1>
     
};


const Headingcomponent = () => {

    
    
     return <div id = "cc">
        <Title></Title> {/* or <Title/> this is also used to compose another component*/}
        <Title/>
        {Title()}
        {/* Above three lines does the same work */}
        <h1> {vara} 
        <h2>{200  + 233}</h2>
            Hello , How's the josh 
        </h1>
     </div>
     
    
};
//here title is composed in Heading component , so it is called as component composition



//const Headingcomponent = () => { <h1>welcome to namste react !!</h1>;};

//const Headingcomponent = () => <h1>welcome to namste react !!</h1>;

const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headingcomponent/>); // This is a Method of rendering a react componenet


