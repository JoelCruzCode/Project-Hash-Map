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
// console.log(table.has("Carlot"));
// console.log(table.remove("Carlot"));
// console.log(table.has("Carlot"));
// console.log(table.remove("Carlns"));
console.log(table.getBuckets());
console.log(table.length());
table.set("carl", "yayayaay");
table.set("stephanie", "rip");
table.set("amber", "gym");
table.set("hannah", "fun");
table.set("monique", "retail?");
table.set("monica", "???");
table.set("kim", "competes");
table.set("sydney", "nurse");
table.set("lily", "church");
table.set("andrew", "retired");
table.set("bryan", "engaged");
table.set("noahhhj", "coach");
table.set("aaron", "menace");
table.set("ki", "abridged");

console.log(table.getBuckets());
console.log(table.length());

console.log(table.keys());
console.log(table.values());
console.log(table.entries());
// table.clear();
// console.log(table.getBuckets());
// console.log(table.length());

// function component() {
//   const element = document.createElement("div");

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }
