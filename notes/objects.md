# Objects

An object in JavaScript, similarly to other programming languages, is a complex data structure that contains a collection of keys (a.k.a. fields/properties) and values. A value can be set to any primitive data type, an array, another object (a.k.a. child/nested object), or a function expression (a.k.a. object method).

Methods can access other properties of an object that they are attached to using the special `this` keyword. This keyword is available only when a function expression is declared using the `function` keyword. Arrow functions do not support `this` keyword.

Similarly to the arrays, even if an object is stored in a `const` variable, it still remains to be mutable.

## Declaring objects

An object is declared using the `{<property1>:<value1>, <property2>:<value2>}` syntax. 

Examples:

```javascript
const human = {
  firstName: "John",
  lastName: "Doe",
  
  summarize: function() => {
    return `I am ${this.firstName} ${this.lastName}!`;
  }
};
```

## Operations with objects

Similarly to other programming languages, a property of an object can be accessed using the `.` notation: `myObject.<propertyName>`.

Examples:

```javascript
const human = {
  firstName: "John",
  lastName: "Doe"
};

human.firstName = "Jane";
let lastName = human.lastName;
```

There is an alternative way to do that using the `myObject['<propertyName>']` syntax. In this case, the property name needs to be provided as a string. Therefore, it can be useful when a property name needs to be dynamically calculated/constructed.

Examples:

```javascript
const human = {
  firstName: "John",
  lastName: "Doe"
};

const suffix = "Name";

human["first" + suffix] = "Jane";
let lastName = human["last" + suffix];
```

An object can also be extended with new properties using either approach: `myObject.<newPropertyName> = <value>` or `myObject['newPropertyName'] = <value>`

Examples:

```javascript
const human = {
  firstName: "John",
  lastName: "Doe"
};

human.age = 18;

human["nickname"] = "JD";
```
