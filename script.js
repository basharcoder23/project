
// Select Element

let h1 =document.getElementsByTagName("h1")[0];
let div =document.getElementsByTagName("div")[0];
let button =document.getElementsByTagName("button")[0];


// Global Variables

let isClicked = false;
let previousColor = -1;

// Click Events

button.addEventListener("click", () => {
    isClicked === true ? div.before(h1) : div.after(h1); 
    isClicked = !isClicked;
});


// My first update on GitHub

// My second update from GitHub......



// This change was made in main
// This change was made in conflict-test


button.addEventListener("click", () => {

    let color = ["#e0b822", "#d21111", "#19a309", "#2252e0", "#960ad7"];

    let randomColor = Math.floor(Math.random() * color.length);

    while (randomColor === previousColor) randomColor = Math.floor(Math.random() * 4);

    previousColor = randomColor;

    div.style.backgroundColor = color[randomColor];

});

