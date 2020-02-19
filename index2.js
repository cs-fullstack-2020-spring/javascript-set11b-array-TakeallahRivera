//Testing alert("Hello World!");

/*#### Exercise 1
1. Create an array.
2. Add four names to the array.
3. Print the array

*/

//Exercise 1 Solution 

let arrayTakeallah = []
arrayTakeallah.push('Takeallah')
arrayTakeallah.push('Devere')
arrayTakeallah.push('Roxanne')
arrayTakeallah.push('Hendrix')
console.log(arrayTakeallah);


/*#### Exercise 2
1. Create an array with 5 numbers in it.
2. Print the numbers.

*/

//Exercise 2 Solution
let numberArray = [30, 29, 28, 27, 26, 25];
console.log(numberArray);

/*#### Exercise 3
1. Create an array with 4 names.
2. Print the third item in the array.
3. Delete the second item.
4. Print the third item in the array again.

*/

//Exercise 3 Solution

let nameArray = ['Takeallah', 'Devere', 'Hendrix', 'Roxanne'];
console.log(nameArray[2]);
console.log(nameArray);
nameArray.splice(1,1);
console.log(nameArray);
console.log(nameArray[2]);


