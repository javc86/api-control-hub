export const fibonacci = (n, index = 2, f1 = 1, f2 = 1) => {
  if (n === 0 || n === 1) return n;
  if (n === 2) return 1;
  if (n === 3) return 2;
  if (n > index + 1) {
    return fibonacci(n, index + 1, f2, f1 + f2);
  } else {
    return f1 + f2;
  }
}