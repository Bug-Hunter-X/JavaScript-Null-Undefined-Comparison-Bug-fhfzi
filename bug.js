function foo(x){
  if (x == null) {
    return 0; //This is the buggy line
  }
  return x + 1; 
}