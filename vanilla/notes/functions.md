# Functions

JavaScript provides 3 ways of declaring functions:

1. Named function using the `function` keyword.
2. Anonymous function expression using the `function` keyword.
3. Anonynous function expression using the `=>` operator.

## Regular functions

Regular functions are named functions that are declared using the `function` keyword. These type of functions are classic. Regular functions do not care whether they were declared before/after the line they were invoked at. 

// TODO: there is some difference related to 'this' keyword

Example:

```javascript
function sum(a, b) {
  return a + b;
}

function log(message) {
  console.log(message);
}

function helloWorld() {
  log("Hello, world!");
}
```

## Function expressions

Functions expressions are anonymous regular functions. They are normally stored in a variable and invoked through that variable. Therefore, they must be declared before they are invoked otherwise the variable would still remain as undefined.

// TODO: there is some difference related to 'this' keyword

Example:

```javascript
const sum = function(a, b) {
  return a + b;
}

const log = function(message) {
  console.log(message);
}

const helloWorld = function() {
  log("Hello, world!");
}
```

## Arrow function expressions

Arrow function expressions are function expressions with a different syntax that rely on the `=>` operator.

// TODO: there is some difference related to 'this' keyword

Example:

```javascript
const sum = (a, b) => a + b;

const log = message => {
  console.log(message);
}

const helloWorld = () => {
  log("Hello, world");
}
```
