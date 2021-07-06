# Variables

## Naming

* `camelCase` by convention.
* Must not start with a capital letter by convention (i.e. `myVar`).
  * Capitalization is used for class names (i.e. `MyClass`).
  * All-caps are used for constants (i.e. `MY_CONSTANT`).
* Only letters, numbers, underscores or `$` are allowed.
* Must not start with a number.
* Must not be named using reserved keywords.

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
