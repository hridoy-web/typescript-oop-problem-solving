# Understanding Type Narrowing in TypeScript

## Introduction
In TypeScript, we sometimes use Union types where a variable can be a string, number, or something else. Type narrowing is the process of writing code that helps TypeScript guess the exact type of that variable at runtime. It removes type errors and makes our code safe.

## How Type Narrowing Works
We can narrow down types using a few common JavaScript operators. 

First, we have the `typeof` operator. It is mostly used for primitive types like string, number, or boolean. Second, we use `instanceof`. We use this operator to check if a value is an instance of a specific class. Finally, we have the `in` operator. This is very useful when we want to check if a specific property exists inside an object.

### Code Examples

```typescript
// 1. typeof example
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // Narrowed to string
  }
}

// 2. instanceof example
class Dog { bark() {} }
function handleAnimal(animal: Dog | string) {
  if (animal instanceof Dog) {
    animal.bark(); // Narrowed to Dog class
  }
}

// 3. in operator example
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(pet: Fish | Bird) {
  if ("swim" in pet) {
    pet.swim(); // Narrowed to Fish
  }
}
```

### Conclusion
To summarize, type narrowing is like a safety check for our code. By using typeof, instanceof, and the in operator, we can easily prevent runtime errors. It helps TypeScript understand our logic much better and keeps our application stable.
