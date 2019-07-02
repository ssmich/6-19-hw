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

// Getting to Know You 
// Use the following arrays to answer the questions below (name, age, 
// hometown):
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// 	1.	Jim Clark decides that Kenny can't be named "Kenny" anymore. 
//		Remove "Kenny" from the kenny array and replace it with 
//		"Gameboy".

kenny[0] = "Gameboy";
console.log(kenny[0]);

// 	2.	Jim Clark just had his birthday; change jimClark's array to 
//		reflect Jim being a year older. Don't just hard code 187-
//		-pretend that you didn't already know that his age is 186, 
//		and write your code to just makke him a year older than 
//		whatever age he was.

jimClark[1] = jimClark[1] + 1;
console.log(jimClark[1]);

// 	3. 	Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown 
//		from "Denver" to "Gotham City".

ryan[2] = "Gotham City";
console.log(ryan[2]);

// 	4.	Reuben left Durham 5 years ago to come to Chicago. First, 
//		remove "Durham" from Reuben's array, and then add "Chicago". 
//		(Note: remove and then add is different from simply changing 
//		the value at that index.)

reuben.pop();
reuben.push("Chicago");
console.log(reuben);

// 	5.	Jim Haff could be literally anywhere in the world. Remove "All 
// 		cities" from his array, then pick any 3 cities you like, and 
//		add them to Jim's array. If you did it in 3 lines of code that's 
//		fine, but see if you can do it in one line of code.

jimHaff.pop();
jimHaff.push("Orlando, FL","Somerset, Bermuda", 
	"Anna Maria Island, FL");
console.log(jimHaff);

// 	Bonus: Whoops! Jim Haff is actually only allowed to be in one of 
// 	two cities. Whatever the first of the 3 cities for Jim Haff is now, 
// 	remove it from the array using .splice()

jimHaff.splice(2,1);
console.log(jimHaff);

// Yell at the Ninja Turtles
//	1.	Create an array with the members of the ninja turtles 
//		(Donatello, Leonardo, Raphael, Michaelangelo)

let tmnt = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
console.log(tmnt);

//	2.	Use a for loop to call .toUpperCase() on each of them and 
//		print out the result.

// Borrowed methodology from Ivan Seider and Mureinik at:
// https://stackoverflow.com/questions/40192262/convert-uppercase-and-lowercase-in-javascript
for (let i = 0; i < tmnt.length; i++) {
	let allCapsArray = [];
	let toAllCapsString = tmnt[i];
	let allCapsString = ""
	for (let c = 0; c < toAllCapsString.length; c++); {
		allCapsString += toAllCapsString.toUpperCase();
		allCapsArray.push(allCapsString);
	};
	console.log(allCapsArray);
};

//	Bonus: Modify the answer you just wrote. Instead of all letters 
//	being uppercase, make the letters alternate back and forth between 
//	uppercase and lowercase.

let tMnT = []
function toUpperLower(str) {
	let result = "";
	for (let i = 0; i < str.length; i++){
		if(i % 2 === 0){
			result += str[i].toUpperCase();
		} else {
			result += str[i];
		}
	}
	return result
}

for (let i = 0; i < tmnt.length; i++) {
	tMnT.push(toUpperLower(tmnt[i]));
}

console.log(tMnT);		