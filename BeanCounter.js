// Your code here.

// Function to count the B characters
function countBs(str) {
	// Counter variable to count the number of B's
  	var count = 0;
  	// For loop through the length of the string
 	for (var i = 0; i < str.length; i++)
 	    // If indice of string is B increment the counter variable
      	    if(str.charAt(i) == "B")
            	count++;
	// Return the counter variable  
 	return count; 		
        
}

// Function to count the number test variable characters in the str variable
function countChar(str, test) {
	// Counter variable to count the number of B's
  	var count = 0;
  	// For loop through the length of the string
 	for (var i = 0; i < str.length; i++)
            if(str.charAt(i) == test)
            // If indice of string is B increment the counter variable
                count++;
    // Return the counter variable
 	return count; 		
        
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
