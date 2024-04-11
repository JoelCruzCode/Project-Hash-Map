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
table.set("Carlos", "Testing value");

console.log(table.getBuckets());
// function component() {
//   const element = document.createElement("div");

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }
