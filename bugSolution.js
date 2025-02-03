function foo(a, b) {
  a = a === null ? 0 : a; // Convert null to 0
  b = b === null ? 0 : b; // Convert null to 0
  return a + b; 
} 