// <!-- hello world program usign java script 
const heading = document.createElement("h1");
heading.innerHTML = "Hello Mohit this is by java script ";
const root1 = document.querySelector(".hello");
root1.appendChild(heading);
// <!-- hello world program usign React see App.js  -->
const head = React.createElement("h1", {
    id: "abc"
}, "Hello world from react inside");
const root = document.getElementById("reacthello");
ReactDOM.render(head, root);
// nested div 
//   <parent>
//     <child1>
//         <child2></child2>
//     </child1>
//   </parent>
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("h1", {
    id: "child2"
}, "hello i,m last child"));
const root2 = document.getElementById("reacthello2");
ReactDOM.render(parent, root2);

//# sourceMappingURL=index.6bd02f5a.js.map
