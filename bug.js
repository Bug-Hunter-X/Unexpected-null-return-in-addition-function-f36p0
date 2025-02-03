function foo(a, b) {
  if (a === null || b === null) {
    return null; // This line seems correct, but it causes an issue 
  }
  return a + b; 
}