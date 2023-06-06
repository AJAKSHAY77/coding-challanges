// 02. Only unique items are allowed.

// You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.

function uniqueitems(arr){
    return  new Set(arr)
}

console.log(uniqueitems([1,2,3,4,4,4,5,5,6,7,8,9]));


// 03. Swap the values.

// You are working on a project that requires you to swap the values of two variables without using a temporary variable. You decide to write a function that takes two variables as input and swaps their values using destructuring assignment with an array. The function should take the two variables as arguments, destructure them into an array, and then swap their positions within the array. Finally, the function should return an array with the swapped values. For example, if the function is called with the arguments x = 5 and y = 10, it should return an array [10, 5] with x now equal to 10 and y equal to 5.



function swap(a,b){
    [a,b] = [b,a]
    return [a,b]
}
let x=20
let y=30

console.log(swap(20,30));

// 04. Access random elements.

// You are building a program that takes an array of numbers as input and you need to extract the first, second, and last elements of the array. You decide to write a function that can accomplish this task using destructuring assignment with an array. The function should take the array as an argument, destructure it into three variables representing the first, second, and last elements, and then return an array with these three values. For example, if the input array is [1, 2, 3, 4, 5], the function should return an array [1, 2, 5].


function extract(arr){
    const[first,second,,,,,last] = arr
    return[first,second,last]
   
}
console.log(extract([10,20,30,50,1,2,3]));

// 05. Min and max values.

// You are building a program that needs to find the maximum and minimum values in an array of numbers. You decide to write a function that can accomplish this task by taking an array of numbers as input and using the spread operator with the Math methods max() and min(). The function should return an object with two properties, max, and min, representing the maximum and minimum values in the input array, respectively. For example, if the input array is [5, 2, 7, 1, 9], the function should return an object { max: 9, min: 1 }.
 let arr = [1,2,3,4,5,6,7,8,9,10]
function minandmax(array){
    return{
        max : Math.max(...array),
        min : Math.min(...array)
    }

}
console.log(minandmax(arr));

// 06. Nested Objects.

// Write a function that takes an object representing a person as input and extracts the name and street properties from a nested object using object destructuring. The function should return an object with these two properties. A sample object is given below.

const person = {
    name: "akshay",
    age: 23,
    address: {
      street: "B8, Block B, Industrial Area.",
      city: "Sector 62, Noida",
      state: "Uttar Pradesh",
    }
  };

  function extractdata(obj){
       const{name,address:{street}} = obj
       return {name ,street}
  }
  console.log(extractdata(person));
  
