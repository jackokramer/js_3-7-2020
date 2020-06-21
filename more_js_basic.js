//Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swapTowardCenter(arr){
    let poop = [];
    for(let z = 0; arr.length>z; z++){
        arr[x] = arr.length -1;
        arr[arr.length-1] = arr[x];
        arr.length - x-x;
    }
}

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
    }
    return news
}