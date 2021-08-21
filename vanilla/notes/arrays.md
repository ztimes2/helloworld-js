# Arrays

JavaScript supports 2 ways of creating arrays:
1. Array literal
2. Array object

Regardless of the way how arrays are created, they are always mutable even if they are stored using `const` variable. You will always be able to modify them by removing, adding, and changing their elements.

Arrays also can store elements of mixed data types.

# Array literal

A traditional way of creating arrays is using `[<element1>, <element2>, <element3>]` syntax.

Example:

```javascript
const sameTypes = [1, 2, 3, 4];

const mixedTypes = [1, 'Two', false];
```

# Array object

An object-oriented way of creating array is using `new Array(<element1>, <element2>, <element3>)` syntax.

Example:

```javascript
const sameTypes = new Array(1, 2, 3, 4);

const mixedTypes = new Array(1, 'Two', false);
```

# Operations with arrays

* **Count number of elements**:
  * Using the `length` property.
  * Example: `let size = myArray.length`
* **Read an element**:
  * Using classic `[<index>]` syntax.
  * Example: `let secondElement = myArray[1]`
* **Assign value to an element**:
  * Using classic `[<index>]` syntax.
  * Example: `myArray[1] = 2`
* **Add one or more elements to the end**:
  * Using the `push(<element1>, <element2>, <element3>)` method.
  * Example: `myArray.push(1)` or `myArray.push(1, 2, 3)`
* **Remove the last element**:
  * Using the `pop()` method.
  * Example: `myArray.pop()`
* **Add one or more elements to the beginning**:
  * Using the `unshift(<element1>, <element2>, <element3>)` method.
  * Example: `myArray.unshift(1)` or `myArray.unshift(1, 2, 3)`
* **Remove the first element**:
  * Using the `shift()` method.
  * Example: `myArray.shift()`
