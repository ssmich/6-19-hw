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
