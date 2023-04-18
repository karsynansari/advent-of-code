const fs = require("fs");

const data = fs
  .readFileSync("input.txt")
  .toString()
  .split(/\r?\n|\r|\n/g);

const lowercaseItemPriority = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

const uppercaseItemPriority = {
  A: 26,
  B: 27,
  C: 28,
  D: 29,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

const firstCompartment = [];
const secondCompartment = [];
data.forEach((compartment) => {
  const toSplitAt = compartment.length / 2;
  const comp1 = compartment.slice(0, toSplitAt).split("");
  firstCompartment.push(comp1);

  const comp2 = compartment.slice(toSplitAt).split("");
  secondCompartment.push(comp2);
});

//this is the simplified version of what i need to do. 
// const one = ["x", "G", "k", "m", "O"];
// const two = ["n", "X", "P", "k", "S"];

// const intersection = one.filter((element) => two.includes(element));

// console.log(intersection);
