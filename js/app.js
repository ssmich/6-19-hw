//	Easy Going
//	Write a for loop that will log the numbers 1 thru 20.

for (i = 1; i <= 20; i++){
	console.log(i);
}

// Get Even
// Write a for loop that will log only the even numbers 
// in 0 through 200.

for (i = 0; i<= 200; i++){
	if (i % 2 === 0) {
		console.log(i);
	}
}

// Excited Kitten
// 	1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

for (i = 1; i <=20; i++){
	console.log("Love me, pet me! HSSSSSS!")
}

//	2. For every even number in your loop, log "...human...why 
//	   you taking pictures of me?...", "...the catnip made me do it...",
//     or "...why does the red dot always get away..." at random.

const kittyPhrases = ["...human...why you taking pictures of me?...", 
"...the catnip made me do it...", "...why does the red dot always get away..."];

for (i = 1; i <=20; i++){
	console.log("Love me, pet me! HSSSSSS!")
	if (i % 2 === 0) {
		console.log(kittyPhrases[Math.floor(Math.random() * kittyPhrases.length)]);
	};
}

// Fizz Buzz
//	1. Write a javascript application that logs all numbers from 1 - 100.
//	2. If a number is divisible by 3 log "Fizz" instead of the number.
//	3. If a number is divisible by 5 log "Buzz" instead of the number.
//	4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for (i = 1; i <= 100; i++){
	if (i % 15 === 0){
		console.log("FizzBuzz");
	} else if (i % 3 === 0){
		console.log("Fizz");
	} else if (i % 5 === 0){
		console.log("Buzz");
	} else {
		console.log(i);
	};
}

