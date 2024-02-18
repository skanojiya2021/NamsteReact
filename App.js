//createElement - JS Object in react
//if you wanted to create nested loop then
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi this is nested loop"),
    React.createElement("h2", {}, "Hi this is nested loop 2"),
  ],
  [
    React.createElement("h1", {}, "Hi this is nested loop"),
    React.createElement("h2", {}, "Hi this is nested loop 2"),
  ]
  )
);
console.log(parent);
// const heading = React.createElement(
//     'h1',
//     {id:"Heading"},
//      'Hellooo From React'
//      )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
