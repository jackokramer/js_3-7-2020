//doublevision

function doubleVision(arr){
    let newArra = []
    for(let x = 0; arr.length>x; x++){
        newArra.push(arr[x]*2);
    }
    return newArra;
}

/// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function printlowReturnHigh(arr){
    let low = arr[0]
    let high = arr[0]
    for(let p = 1; arr.length>p; p++){
        if(arr[p]<low){
        low = arr[p];
        } else if(arr[p]>high){
        high = arr[p];
    }
    console.log(low);
    return high;
    }
}
console.log(printlowReturnHigh([1,3,42,3,6,3]));

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubs(arr){
    let news = []
    for(let x = 0; arr.length>x; x++){
            news.push(arr[x]*2);
        }

    return news
    }

//Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPostives(arr){
    let post = 0
    for(let x = 0; arr.length>x; x++){
        if(arr[x]>0){
            post++
        }
    }
    arr[arr.length -1] = post;
    return arr;
}

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swapsTowards(arr){
    for(let x = 0; arr.length/2>x; x+2){
        let temp = arr[x];
        arr[x] = arr[arr.length-1-x];
        arr[arr.length-1-x] = temp;
    }
}

// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleArray(arr, num){
    let newNums = [];
    for(let y = 0; arr.length>y; y++){
        newNums = arr[y]*num;
    }
    return newNums
}

console.log(scaleArray([1,3,4,5,3], 2))

//Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function alwaysHungy(arr){
    let gotfood = false;
    for(let x = 0; arr.length>x; x++){
        if(arr[x]=='food'){
            console.log('delicious')
            gotfood = true
        } else if(arr[x] !== 'food'){
            console.log('I`m hungry.');
            gotfood = false
        }
    }
    return arr;
}