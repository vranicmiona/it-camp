// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);

// let title = document.title;
// title = "New Title";
// console.log(title);
// console.log(document.all);
// const headerTitle = document.all[10];
// console.log(headerTitle);

// headerTitle.textContent = "New Logo"; // kucamo samo sadrzaj
// headerTitle.innerHTML = "<h1>new logo<h1>"; // koristimo HTML i koristimo ga za definisanje

// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);

// // GET ELEMENT BY ID

// const headerTitle = document.getElementById("logo");
// console.log(headerTitle);
// headerTitle.innerHTML = "<em>new logo</em>";

// // PROMENA STILOVA

// headerTitle.getElementsByClassName.borderBottom = "solid 3px #000";

// // GET ELEMENTS BY CLASS NAME

// const containers = document.getElementsByClassName("container");
// // console.log(container);
// const container = containers[0]; // hocu da dobijem taj jedan element
// containers.style.backgroundColor("red");
// containers.style.border("1px solid blue");

// // GET ELEEMNTS BY TAG NAME

// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

// // listItems.style.color = "blue";

// for (let i = 0; i < listItems.length; i++) {
//   if (i === 1) {
//     listItems[i].style.color = "brown";
//   } else {
//     listItems[i].style.color = "blue";
//   }
// }

// QUERY SELEKTOR
const firstLogoId = document.querySelector("#logo");
const firstCont = document.querySelector(".container");
const firstLi = document.querySelector("li");

console.log(firstLogoId);
console.log(firstCont);
console.log(firstLi);

firstLi.textContent = "first item";
const input = document.querySelector("input");

// QUERY SELECTOR ALL

const listItems2 = document.querySelectorAll("li");
console.log(listItems2);

const evenLi = document.querySelectorAll("li:nth-child(even)");
const oddLi = document.querySelectorAll("li:nth-child(odd)");

for (let i = 0; i < oddLi.length; i++) {
  oddLi[i].style.backgroundColour = "blue";
  evenLi[i].style.backgroundColour = "orange";
}

// parentNode

const title = document.getElementById("add");
console.log(title.parentNode);

// parentElement

const title1 = document.getElementById("add");
console.log(title1.parentElement);

// childNodes

// const container = document.querySelector(".container");
// console.log(container.childNodes);

// childeren (vraca samo elemente)

// const container = document.querySelector(".container");
// console.log(container.children);

// firstElementChild

const container = document.querySelector(".container");
console.log(container.firstElementChild);

// lastElementChild
// nextElementSibling
// priviousElementSibling

// createElement

const newDiv = document.createElement("div"); // korektan HTML tag, sve radimo unutar tog document objekta

// add class

newDiv.className = "newDiv";
container.appendChild(newDiv);

// add id

newDiv.id = "newId";

container.appendChild(newDiv);

input2.setAttribute("placeholder", "Unesite vasu email adressu");
console.log(input2.setAttribute("placeholder"));
