function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      } 
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

  𝑂(𝑛2) 

*/

/* 
  Add your pseudocode here
iterate thru the array of numbers
for(let i = 0; and so on...........)
then iterate thru the elements so use j instead to represent the elements
compare numbers 
  return true if any pair of numbers in the array adds up to the target number
  and false if not
*/

/*
  Add written explanation of your solution here

  I need to iterate throught the array of numbers and compare each pair of elements to see if their sum equals the target value.
  So first I created a loop to iterate throuhg the array using an index. 
  For each index, I then created another loop to check the elements.
  When both elements are added, It then checks if their sum esqual the target value.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
