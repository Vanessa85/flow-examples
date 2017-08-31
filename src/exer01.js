// @flow
/* Primitive Types */
// - Booleans
// - Strings
// - Numbers
// - null
// - undefined (void flow)

function square(n: number): number {
  return n*n;
}

function multiply(a, b) {
  return a*b;
}

function concat(a: string, b: string) {
  return a + b;
}

function factorial(n: number): number {
  if (n === 1 || n === 0) {
    return 1;
  }

  return n*factorial(n-1);
}

square(2);
multiply(5, 2);

concat("Hello", "world"); // works!
// concat(5, 4)  // error!
