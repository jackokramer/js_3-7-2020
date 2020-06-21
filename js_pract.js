// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPost(arr){
    let positive = 0;
    for(let x = 0; arr.length > x; x++){
        if(arr[x]>0){
            positive ++;
        }
    }
    arr[arr.length -1] = positive;
    return arr;
}

//console.log(countPost(2,2,1,-2,-7,-11,2));

// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArr(arr){
    for(let x = 0; arr.length/2>x; x++){
        let temp = arr[x];
        arr[x] = arr[arr.length -1-x];
        arr[arr.length -1-x] = temp;
    }
    return arr;
}

//console.log(reverseArr([2,5,19, 23, 9]));

//Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outlookNeg(arr){
    let newArr =[]
    for(let x = 0; x<arr.length; x++){
        if(arr[x]>0){
            arr[x]= arr[x]*-1;
        }
        newArr.push(arr[x])
    }
    return newArr;
}
//console.log(outlookNeg([-1,2,56,21,2,3,2]));

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function alwaysHung(arr){
    for(let x = 0; arr.length>x; x++){
        if(arr[x] == 'food'){
            console.log('This taste`s good')
        } else {
            console.log('I`m hungry')
        }
    }
    return arr;
}

//console.log(alwaysHung(['grow', 2, 4, 'food', false]));

// alternative
//function hungry(arr){
// let gotFood= false;
//for(let x = 0; x< arr.length; x++){
//    if(arr[x] == 'food'){
    // console.log('this tastes good');
    //gotFood = true;
//      }
//  }   
// if(gotFood== false){
    //console.log('I`m hungry')
//}
//return arr
//}

//Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLength(arr){
    for(let x = arr.length-1; x > 0; x--){
        arr[x] = arr[x-1].length;
    }
    return arr;
}

//console.log(previousLength(['hello', 'vertigo', 'I can', 'feel']));

//// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function alwaysTired(arr){
    let always = false;
    for(let z =0; z< arr.length; z++){
        if(arr[z]== 'food'){
            console.log('delicious')
            always = true;
        } else{
            console.log('I`m hungry')
            always = true;
        }
    }
    return arr;
}

//console.log(alwaysTired(['sleep', 'nap', 'dood', 'food']));

// //Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLength(arr){
    for(let x = arr.length-1; x>0; x--){
        arr[x]= arr[x-1].length;
    }
    return arr;
}

// increment in seconds Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

//function incrementInSeconds(arr){
//    let count = 0
 //   for(let x = 0; arr.length>x; x++){
 //       if(arr[x]%2 === 1){
 //           console.log(arr[x]);
 //           count++
 //       }
  //  }
//    return arr;
//}


function incrementInSeconds(arr){
    for(let x = 0; arr.length>x; x+2){
        arr[x] = arr[x]+2
    }
    for(let x = 0; arr.length>x; x++){
        console.log(arr[x]);
    }
    return arr;
}
//console.log(incrementInSeconds([1,2,4,2,3,5]));

//Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function printOneReturnAnother(arr){
    console.log(arr.length-2);
    for(let x = 0; arr.length>x; x++){
        if(arr[x]%2 == 1){
            return arr[x];
        }
    }
}

console.log(printOneReturnAnother([1,2,4,1,2,45,31,98,221]))

//Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArr(arr){
    for(let x = 0; arr.length/2>x; x++){
        let temp = arr[x];
        arr[x] = arr[arr.length-1-x];
        arr[arr.length-1-x] = temp;
    }
    return arr
}

console.log(reverseArr([1,2,3,1,5,22,90,239, 342]))

