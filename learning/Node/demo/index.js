// import { add } from "./util/math.js";
const {add} = require('./util/math')
const os = require('os')
const path = require('path')
const fs = require('fs')

const { v4: uuidv4 } = require('uuid');
const id = uuidv4();

console.log(id)

console.log("Hello World");
console.log(add(1, 2));
