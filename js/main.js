import {msg, sayMessage, getMessage} from './message.js';
sayMessage();
getMessage("John Philip Tena");

import {a as var1, b as var2} from './variable.js';
console.log(var1);

import {sum as sample, divide, subtract, multiply} from './calc.js';
console.log(divide(3, 2));

import { generateDiv } from './display.js';
generateDiv(sample(var1, var2));