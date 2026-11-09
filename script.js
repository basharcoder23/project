
// Select Element

let h1 =document.getElementsByTagName("h1")[0];
let div =document.getElementsByTagName("div")[0];
let button =document.getElementsByTagName("button")[0];


// Global Variables

let isClicked = false;


// Click Events

button.addEventListener("click", () => {
    isClicked === true ? div.before(h1) : div.after(h1); 
    isClicked = !isClicked;
});

console.log("Hello Git!");
console.log(isClicked);


