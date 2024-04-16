import "./styles/style.css";
import "./styles/fonts.css";
import webpack_img from "./assets/images/webpack_img.webp";
import HashMap from "./hash-map";
const content = document.querySelector("#content");
// content.textContent = "Hello Webpack";
console.log("hello?");
console.log(content);
const title = document.createElement("h1");
title.textContent = "Webpack";
title.classList.add("greeting");
content.appendChild(title);
const myIcon = new Image();
myIcon.src = webpack_img;
content.appendChild(myIcon);

const table = HashMap();

console.log(table.getBuckets());
table.set("Carlot", "Testing value");

console.log(table.getBuckets());

table.set("Carlot", "rewriting data");

console.log(table.getBuckets());
console.log(table.get("Carlns"));
table.set("Carlns", "Bruh");
console.log(table.getBuckets());

table.set("Carlot", "Testing value1");
console.log(table.getBuckets());
console.log(table.get("Carlot"));
console.log(table.get("Carl"));
console.log(table.get("Carlns"));

// function component() {
//   const element = document.createElement("div");

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }
