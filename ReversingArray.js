// Your code here.
function reverseArray(arr) {
	new_arr = [];
    for(var i = arr.length - 1; i >= 0; i--)
    	new_arr.push(arr[i]);
  	return new_arr;
};

function reverseArrayInPlace(arr) {
  	for(var i = 0; i < (arr.length - 1) / 2; i++)
    {
    	var tmp = arr[i];
      	arr[i] = arr[(arr.length - 1) - i];
        arr[(arr.length - 1) - i] = tmp;
    }
  	return arr;  
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]