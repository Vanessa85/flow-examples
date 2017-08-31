// @flow
/* Object Types */
var obj: {
  a: number,
  b: boolean,
  c: string
} = {
  a: 1,
  b: true,
  c: "5"
};

var obj2 = { foo: "bar" };
// obj2.bar; // Error!

function setObject(value: { a?: string }) :void {
  console.log(value.a? `a: ${value.a}` : 'undefined');
}
