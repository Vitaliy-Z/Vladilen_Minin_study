import "./index.css";
import imgOfJS from "./img/JavaScript.jpg";

const title = document.createElement("h1");
title.textContent = "I love JavaScript";
document.body.append(title);
const img = document.createElement("img");
img.setAttribute("src", imgOfJS);
document.body.append(img);
