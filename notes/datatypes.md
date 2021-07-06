# Data types

JavaScript is dynamically typed programming language. Therefore, there is no need to manually define a data type for a variable's value. Instead, this is implicitly and automatically determined by the language.

## Primitives

* **number**
  * Integers and decimals (i.e. `69`, `6.9`, etc).
  * There is a special `NaN` (not a number) value of type *number*. It is used during numeric operations to indicate an error due to the usage of non-numeric values.
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

## Conversion & coercion

Numbers, strings, and booleans can be converted from one to another using the following formats: `String(69)`, `Number("69")`, and `Boolean(1)`.

When it comes to the conversion of data types to booleans, any values **except** the following ones would be considered as `true`: `false`, `0`, `""`, `undefined`, `null`, `NaN`.

Besides the manual conversion, JavaScript can also perform an implicit conversion called **coercion** whenever it is dealing with operations that involve values with different data types. In such situations, this coercion automatically converts the given values' data types to types that would make sense depending on the operation. 

Examples:

* `"69" + 6` results to `"696"` due to an automatic number-to-string conversion.
* `"69" - 6` results to `63` due to an automatic string-to-number conversion.
* `"69" / 6` results to `11.5` due to an automatic string-to-number conversion.
* `"69" * 6` results to `207` due to an automatic string-to-number conversion.
* `if (0)` results to `false` due to an automatic number-to-boolean conversion.
* `"69" == 69` results to `true` due to an automatic number-to-string conversion.
* and so on...

This behaviour can be useful for certain scenarios, but it can also lead to weird results when is not used carefully.
