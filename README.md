# Type Error in TypeScript Function
This example demonstrates a common type error in TypeScript when adding a number and a string.  The function `add` expects two numbers, but we're passing a string ('10'). TypeScript's type system correctly identifies this as an error.

## How to Reproduce
1. Compile the TypeScript code in `bug.ts`.
2. Observe the compiler error.

## Solution
The solution involves ensuring both arguments passed to the function are of type number.  This can be done through explicit type conversion or by ensuring data integrity at the source.