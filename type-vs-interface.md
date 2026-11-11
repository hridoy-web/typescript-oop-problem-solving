# Type Alias vs Interface in TypeScript

## Introduction
When we start learning TypeScript, we often get confused between Type Aliases and Interfaces. Both are used to define custom object shapes, but they have some key differences. Knowing when to use which one makes our code much cleaner.

## Core Differences
Interfaces are mainly used to define the shape of an object. They are great for object-oriented programming because they can be easily extended using the `extends` keyword. Also, interfaces support something called "declaration merging". This means if you declare the same interface twice, TypeScript automatically merges them together into one.

On the other hand, Type Aliases are much more flexible. We can use `type` for objects, but we can also use it for primitive types, unions, and tuples. However, you cannot merge types like you can with interfaces.

### Code Examples

```typescript
// Interface example (Declaration Merging)
interface User {
  name: string;
}
interface User {
  age: number;
}
// The User interface now has both name and age


// Type example (Great for unions and primitives)
type ID = string | number;
type Employee = { name: string } & { salary: number };
```

### Conclusion
In short, if you are building public APIs or working with classes, use Interfaces. If you need complex data types like unions, tuples, or primitive types, use Type Aliases. I personally prefer using interfaces for defining object structures because they feel cleaner and easier to read.
