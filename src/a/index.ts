

function loggingIdentity<T>(arg: Array<T>): number {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg.length;
}
