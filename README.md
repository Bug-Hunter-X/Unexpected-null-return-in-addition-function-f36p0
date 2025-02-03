# Unexpected null return in addition function

This repository demonstrates a subtle bug in a JavaScript addition function that unexpectedly returns null when null is passed as an argument.  The function intends to handle null gracefully but has a flaw in how it's managing null values, resulting in incorrect behavior.

## Bug Description

The function `foo` is designed to add two numbers together. However, when either `a` or `b` is `null`, it unexpectedly returns `null`. This is not the expected behavior for an addition function.

## Bug Solution

The solution involves modifying the function to explicitly handle `null` values. This can be done by either converting `null` values to 0 before the addition operation or adding a check that provides an alternative behavior for `null` values.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Observe that calling `foo` with null parameters will result in unexpected behavior.
4. Compare with the solution in `bugSolution.js`
