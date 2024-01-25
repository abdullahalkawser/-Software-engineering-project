// function cubeNumber(input) {
//     if (typeof input === 'number') {
//       return input ** 3;
//     } else {
//       return "input is not a number";
//     }
//   }
  


//   function meaningfulMessage(input) {
//     if (typeof input === 'number') {
//       return "this is number";
//     } else {
//       return "this is a " + typeof input + " not";
//     }
//   }

//   console.log(cubeNumber(3)); 
//   console.log(meaningfulMessage(5)); 
//   console.log(cubeNumber("hellow world")); 
//   console.log(meaningfulMessage(true)); 




//   problm 2

// function matchFinder(str1, str2) {
   
//     if (!str1 || !str2) {
//       return "one or tow string";
//     }
  

//     if (str1.includes(str2)) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   console.log(matchFinder("abcdef", "cd")); 
//   console.log(matchFinder("abcxz", "xyz")); 
//   console.log(matchFinder("", "xyz"));




// problm 3


// function sortMaker(arr) {
  
//     if (!arr || arr.length !== 2 || typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
//       return "Invalid Input";
//     }
  

//     arr.sort((a, b) => a - b);
  

//     if (arr[0] === arr[1]) {
//       return "equal";
//     }
  
 
//     return arr;
//   }
  

//   console.log(sortMaker([3, 1]));
//   console.log(sortMaker([5, 5])); 
//   console.log(sortMaker([7, "9"])); 
  