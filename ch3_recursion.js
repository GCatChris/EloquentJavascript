// Your code here
function isEven(x) {
	// If parameter is equal to 0, the function returns true
	if(x == 0)
      return true;
    // If parameter is equal to 1, the function returns false
 	else if (x == 1)
      return false
    // If parameter is less than 0, call isEven recursively with (x * -1)
  	if (x < 0)
  	  return isEven(x*-1)
  	// Call isEven recursively with parameter (x - 2) 
    else
      return isEven(x-2)
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??