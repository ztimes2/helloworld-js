# Loops

JavaScript provides 2 types of loops:

1. For loop
2. While loop

Both of them are implemented in a traditional way similarly to other programming languages.

Examples:

```javascript
for (let i = 0; i < myArray.length; i++) {
  // do something
}

while (!shouldStop) {
  // do something
}
```

In order, to terminate execution of an iteration and immediately proceed to the next one, the `continue` keyword can be used.

Examples:

```javascript
for (let i = 0; i < myArray.length; i++) {
  if (shouldSkip(myArray[i])) {
    continue;
  }
  // do something
}

while (!shouldStop) {
  if (shouldSkip()) {
    continue;
  }
  // do something
}
```

In order, to terminate execution of an entire loop, the `break` keyword can be used.

Examples:
```javascript
for (let i = 0; i < myArray.length; i++) {
  if (shouldBreak(myArray[i])) {
    break;
  }
  // do something
}

while (!shouldStop) {
  if (shouldBreak()) {
    break;
  }
  // do something
}
```
