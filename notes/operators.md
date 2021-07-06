# Operators

## Math operators

* `-`
  * Subtracts numbers.
  * Example: `2 - 2` results to `0` 
* `--`
  * Short variant for `x = x - 1`
* `+`
  * Adds numbers or concatenates strings.
  * Example:
    * `2 + 2` results to `4`
    * `"Two" + "Two"` results to `"TwoTwo"`
* `++`
  * Short variant for `x = x + 1`
* `/`
  * Divides numbers.
  * Example: `2 / 2` results to `0`
* `*`
  * Multiplies numbers.
  * Example: `2 * 2` results to `4`
* `**`
  * Exponentiate numbers.
  * Example: `2 ** 3` results to `8` 
  * Some old browsers may not support this. To make it work on all browsers, `Math.pow(2, 3)` can be used instead.

## Assignment operators
* `=`
  * Assigns a value to a variable.
  * Example: `x = 2`
* `+=`
  * Short variant for `x = x + n`
  * Example: `x += 2`
* `-=`
  * Short variant for `x = x - n`
  * Example: `x -= 2`
* `*=`
  * Short variant for `x = x * n`
  * Example: `x *= 2`
* `/=`
  * Short variant for `x = x / n`
  * Example: `x /= 2`
* `**=`
  * Short variant for `x = x ** n`
  * Example: `x **= 2`

## Comparison operators

* `==`
  * Compares if the first value is loosely equals to the second one. 
  * If data types of compared values are different, this operator automatically performs a coercion.
  * Example: 
    * `2 == 1` results to `false`
* `===`
  * Compares if the first value is strictly equals to the second one. 
  * If data types of compared values are different, coercion is skipped and the result of the comparison will be `false`.
  * Example: 
    * `2 === 2` results to `true`
    * `"2" === 2` results to `false`
* `!=`
  * Compares if the first value is not equals to the second one.
  * If data types of compared values are different, this operator automatically performs a coercion.
  * Example: `2 != 1` results to `true`
* `>`
  * Compares if the first value is greater than the second one.
  * If data types of compared values are different, this operator automatically performs a coercion.
  * Example: `2 > 1` results to `true`
* `>=`
  * Compares if the first value is greater than or equals to the second one.
  * If data types of compared values are different, this operator automatically performs a coercion.
  * Example: `2 >= 2` results to `true`
* `<`
  * Compares if the first value is less than the second one.
  * If data types of compared values are different, this operator automatically performs a coercion.
  * Example: `2 < 1` results to `false`
* `<=`
  * Compares if the first value is less than or equals to the second one.
  * If data types of compared values are different, this operator automatically performs a coercion.
  * Example: `2 <= 2` results to `true`
  
