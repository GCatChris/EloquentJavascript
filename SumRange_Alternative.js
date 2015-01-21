// Your code here.
function range(start, stop, step) {
	// Array to hold the range of values
  	var arr = [];
  	// For loop that either sets a counter to increment by 1, or the step parameter if given
 	for(var i = start; step > 1 || step === undefined ? i <= stop : i >= stop; step ? i = i + step : i++)
    	// Push the value onto the array
    	arr.push(i);
    // Return the array of values
    return arr;
}

function sum(arr) {
 	return arr.reduce(function(x,y) {
 		return x + y;
 	});
 	
};
console.log(sum(range(1, 10)));
// → 55
console.log(range(1,10));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 15, 2));
// [1, 3, 5, 7, 9, 11, 13, 15]
console.log(sum(range(1,15,2)));
// 64
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]