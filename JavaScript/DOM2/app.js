// EVENTS

// let button = document.querySelector("button");
// button.addEventListener("click", buttonClicked);

// function buttonClicked(event) {
//   console.log(event);
//   console.log(event.target.className);
//   console.log(event.target.classList);

//   console.log(event.clientX);
//   console.log(event.clientY);

//   console.log(event.altKey);
//   console.log(event.ctrlKey);
//   console.log(event.shiftKey);

//   document.querySelector("button")[0].style.backgroundColor = "red";
//   document.querySelector("button")[1].style.color = "white";
// }

// newDiv.addEventListener("dblclick", runEvent);

// newDiv.addEventListener("mousedown", runEvent);
// newDiv.addEventListener("mouseup", runEvent);

// newDiv.addEventListener("mouseenter", runEvent);
// newDiv.addEventListener("mouseleave", runEvent);
// newDiv.addEventListener("mousemove", runEvent);

// // Za input polja:
// newDiv.addEventListener("keydown", runEvent);
// newDiv.addEventListener("keyup", runEvent);
// newDiv.addEventListener("keypress", runEvent);

// function runEvent(event) {
//   console.log("Type of event:" + event.type);
// }
// var button = document.getElementById("button");
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);
// .addEventListener("click", runEvent);
// var itemInput = document.querySelector("input[type=search]");
// var form = document.querySelector("form");
// form.addEventListener("submit", runEvent);
// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);
// itemInput.addEventListener("blur", runEvent);
// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);
// itemInput.addEventListener("copy", runEvent);
// itemInput.addEventListener("input", runEvent);
// var select = document.querySelector("select");
// select.addEventListener("change", runEvent);
// function runEvent(e) {
//   e.preventDefault();
// console.log("button clicked");
// document.getElementById("header-title").textContent = "Changed";
// console.log("EVENT TYPE:" + e.type);

// console.log(e.target.value); // give us the value in console
// document.getElementById("toDoContainer").innerHTML =
//   "<h3>" + e.target.value + "</h3>";

// output.innerHTML =
// "<h3>MouseX:" + e.offsetX + "</h3><h3>MouseY:" + e.offsetY + "</h3>";
// document.body.style.backgroundColor =
// "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
// }
// var box = document.getElementById("box");
// box.addEventListener("mouseenter", runEvent); // it is only for elements
// box.addEventListener("mouseleave", runEvent); // the same thing with these two
// box.addEventListener("mouseover", runEvent); // it is for elemnt and innerElements
// box.addEventListener("mouseout", runEvent);
// box.addEventListener("mousemove", runEvent);
// Create Element - create a div

// var newDiv = document.createElement("div");
// console.log(newDiv);
// newDiv.className = "hello";
// newDiv.id = "hello1";
// newDiv.setAttribute("title", "Hello Div");

// // Create text Node

// var newDivText = document.createTextNode("Hello World");
// newDiv.appendChild(newDivText);
// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// console.log(newDiv);
// container.insertBefore(newDiv, h1);
// h1.style.fontSize = "20px";

let inputs = document.querySelector("input");
let input = inputs[1];
console.log(input);

// function getValue(e) {
//   let itemValue = e.target.value;
//   console.log(itemValue);
// }

let form = document.querySelector("form");
form.addEventListener("submit", getValues);

function getValues(e) {
  e.preventDefault();
  let inputs = document.querySelectorAll("input");
  let itemName = inputs[1].value;
  let email = inputs[2].value;
  console.log(itemName);
  console.log(email);

  inputs[1].value = "";
  inputs[2].value = "";
}

let deleteButton = document.createElement("button");
const textDeleteButton = (document.createTextNode = "X");
deleteButton.className = "deletebtn";
deleteButton.style.cursor = "pointer";
deleteButton.append(textDeleteButton);

let lis = document.querySelectorAll("li");
let li = lis[lis.length - 1];
li.style.display = "flex";
li.style.justifyContent = "space-between";
li.appendChild(deleteButton);
console.log(deleteButton);
