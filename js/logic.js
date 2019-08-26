/*const firstName = "Lauren"
const lastName = "Maxwell"
function fullName() {
    const myName = `${firstName} ${lastName}`;
    console.log("My name is", myName)
}
fullName();*/

const crayonColors = ["Green", "Blue", "Yellow"];
const fullBox = 4;

function addColor(newColor) {
    crayonColors.push(newColor);
    return crayonColors.length;
}

let crayonBoxNum = addColor("mulberry");

if (crayonBoxNum < fullBox) {
    console.log("Pick more colors");
} else {
    console.log("your box is full");
}
