# Data types

JavaScript is dynamically typed programming language. Therefore, there is no need to manually define a data type for a variable's value. Instead, this is implicitly and automatically determined by the language.

## Primitives

* **number**
  * Integers and decimals (i.e. `69`, `6.9`, etc).
* **string**
  * Sequence of characters (i.e. `"foo"`, `'foo'`, `` `foo` ``, etc).
  * Must be surrounded with `"`, `'`, or `` ` ``.
  * Unlike `"` and `'`, `` ` `` enables the usage of template literals that allow features like multi-line strings and string interpolation (i.e. `` `Hello, ${expression}!` ``).   
* **boolean**
  * Logical type (i.e. `true` or `false`).
* **undefined**
  * Default value of an undeclared variable.
* **null** (TODO: not too clear what's the difference with Undefined)
  * Empty value.
* **Symbol** (TODO: not too clear what this is and when used)
  * Unique value that can't be changed.
* **BigInt**
  * Large integers that can't fit into the *number*.

## Determining data type

The `typeof` keyword can be used to determine a data type of a variable's value. 

For example, `typeof 69` returns `number`, `typeof "foo"` returns `string`, etc.

There is a bug with this keyword that makes `typeof null` return `object` which is incorrect. This is a legacy behaviour that was kept for backwards compatibility and is something that needs to be kept in mind. 

## Declaring variables

There are multiple ways of declaring a variable:

* Using `var` (i.e. `var myVar = "foo"`)
  * Declares a mutable variable that is scoped within a function.
  * A legacy approach.
  * `let` is preffered over this approach by convention.
* Using `let` (i.e. `let myVar = "foo"`)
  * Declares a mutable variable that is scoped within a block.
  * Preferred over `var` by convention.
* Using `const` (i.e. `const myVar = "foo"`)
  * Declares an immutable variable that is scoped within a block.
* Without a keyword (i.e. `myVar = "foo"`)
  * Declares a mutable variable that is globally scoped.
  * Should be avoided by convention.
