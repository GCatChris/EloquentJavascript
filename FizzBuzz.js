// Your code here.
for(var i = 1; i < 101; i++) {
	// If i isEqual to 1 or 2, output the value as 1 and 2 will result in a 0 if using modulus operator
	if(i == 1 || i == 2)	
    	console.log(i);
    // If i is divisible by 3 output "Fizz" to the console
    else if(i % 3 == 0)
    	console.log("Fizz");
    // If i is divisible by 3 output "Buzz" to the console
    else if(i % 5 == 0)
    	console.log("Buzz");
	// Else output the number to the console
    else
      	console.log(i);
    	
}