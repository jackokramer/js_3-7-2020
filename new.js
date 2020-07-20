//Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function incrementInSec(arr){
    for(let x = 1; arr.length>x; x+=2){
        arr[x] = arr[x]+1;
        }
        for(let x = 0; arr.length>x; x++){
            console.log(arr[x]);
        }
        return arr;
    }
//console.log(incrementInSec([1,2,3,4,5,6]))

//Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLengths(arr){
    for(let x = arr.length-1; x>0; x--){
        arr[x] = arr[x-1].length;
        }
        return arr;
    }

//console.log(previousLengths(["hello", "dojo", "awesome"]))

//Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr){
    let newArr = [];
    for(let x = 0; x<arr.length; x++){
        newArr.push(arr[x]+7);
    }
    return newArr;
}

//console.log(addSeven([2,4,7,8,19]))
//Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArr(arr){
    for(let v = 0; arr.length/2>v; v++){
        temp = arr[v]
        arr[v] = arr[arr.length -1-v];;
        arr[arr.length -1-v] = temp;
    }
    return arr;
}

console.log(reverseArr([3,2,1,4,43,33]))

//Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function printOneReturn(arr){
    console.log(arr[arr.length-2]);
    for(let x = 0; arr.length>x; x++){
        if(arr[x]%2 === 1){
            return arr[x];
        }
    }
}


//Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(arr){
    let newArr = []
    for(let x = 0; arr.length>x; x++){
        newArr.push(arr[x]*2)
    }
    return newArr;
}

//Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr){
    let count = 0
    for(let x = 0; x<arr.length; x++){
        if(arr[x]>0){
            count ++
        }
        arr[arr.length-1] == count
    }
    return arr;
}

//Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function evensAndOdds(arr){
    let evens = 0;
    let odds = 0;
    for(let x = 0; x<arr.length; x++){
        if(arr[x]%2 ===1){
            odd++;
        } else {
            even++;
            odds = 0
        }
        if(odd === 3){
            console.log(`that's odd`)
            odd == 0;
        }
        if(even === 3){
            console.log(`even more so...`)
            even == 0;
        }
    }
}

//Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function negaTive(arr){
    let newArr = [];
    for(let x = 0; arr.length>x; x++){
        if(arr[x]>0){
        newArr.push(arr[x]*-1)
        }
    }
    return newArr
}

//console.log(negaTive([1,-3,5,9]))

//Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function alwaysHungry(arr){
    let gotFood = false;
    for(let x = 0; arr.length>x; x++){
        if(arr[x] === 'food'){
            console.log('Delicious')
            gotFood = true;
        } 
        if(gotFood == false){
            console.log(`I'm hungry like the wolf.`)
        }
    }
    return arr;
}

console.log(alwaysHungry([1,3,'hungry', 'food', true,]))
//Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swapTowardCenter(arr){
    for(let x = 0; arr.length/2>x ; x+=2){
        let temp = arr[x] 
        arr[x] = arr[arr.length-1-x];
        arr[arr.length -1 - x] = temp;
    }
    return arr;
}

console.log(swapTowardCenter([1,2,3,4,5,6]))

//Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleArray(arr, num){
    let newArr = [];
    for(let x = 0; arr.length>x; x++){
        newArr.push(arr[x]*num)
    }
    return newArr;
}

console.log(scaleArray([1,2,3,6],7))