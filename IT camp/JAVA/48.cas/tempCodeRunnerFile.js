function foo(x, y) {
  x = x || 11;
  y = y || 31;
  console.log(x + y);
}

console.log(foo(0, 42));