import "./css/style.css";

import "./js/app";
import { ColumnWidget } from "./js/columnWidget";
// TODO: write your code in app.js

const todo = document.querySelector(".todo");

const colWindget = new ColumnWidget(todo);

todo.appendChild(colWindget.createCol())

