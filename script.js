//opdracht1
let alertButton = document.getElementById("mybutton");

alertButton.addEventListener('click', function(){ alert("button clicked")});

//opdracht2

const changeClassBlueBackground = function() {
    const bodyElement = document.body;
    bodyElement.classList.add("red-background");
};
const attachEventToChangeColorButton = function(){
    const changeColorButton = document.getElementById("change-background-button");
    changeColorButton.addEventListener("click", function() {
        changeClassBlueBackground();
    });
};
const attachEventToalertButton = function() {
    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function(){
        alert("Hello World");
    });
} ;

attachEventToChangeColorButton();
attachEventToalertButton();

/*opdracht3

const toggleClassBlueBackground = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
};
const attachEventToChangeColorButton = function(){
    const changeColorButton = document.getElementById("change-background-button");
    changeColorButton.addEventListener("click", function() {
        changeClassBlueBackground();
    });
};
const attachEventToalertButton = function() {
    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function(){
        alert("Hello World");
    });
} ;

attachEventToChangeColorButton();
attachEventToalertButton();
*/