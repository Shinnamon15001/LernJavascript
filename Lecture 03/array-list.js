var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value) {
    txt = txt + value + "<br>";
}

{/* <h2>JavaScript Array.forEach()</h2>

<p>Calls a function once for each array element.</p>

<p id="demo"></p>

<script src="Lecture 03/array-list.js"></script> */}