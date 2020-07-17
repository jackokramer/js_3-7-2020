function newYears(num){
    // base case 
    if(num === 0){
        console.log('Happy New Year')
        return;
    }
    //recursive call
    console.log(num);
        newYears(num-1);
}

newYears(5);

/* FACTORIAL 
pick a number  4*3*2*1 = 24
*/

function factorial(num){
    //base case used so it doesn't enter an infinite loop
    if(num === 1){
        return 1
    } else{
    return num * factorial(num-1)
    }
}

console.log(factorial(9))

/**
 * non recusive
 */

 function factorialNon(num){
     let fact = 1;
     for(let x = 0; x<=num; x++){
         fact*=x;
     }
     return fact;
 }


/**
 * Recursive binary search
 * 
 * given a sorted array and value, recursively determine whether the value is the array.
 rBinarySearch = ([1,3,4,5,2], 2) = True
 rBinarySearch = ([1,2,3,4,7,9], 5) = False
 */
 // Return Boolean. True / False

 let sortedArray = [1,3,4,5,22,112,3,43,27];

function rBinarySearch(arr, targ){
    // base case
    //if(arr.length === 0) return false;

    let middleIndex = Math.floor(arr.length/2);
    let leftArr = arr.slice(0, middleIndex);
    let rightArr = arr.slice(middleIndex+1);

        //recursive case
    if(targ < arr[middleIndex]){
        return rBinarySearch(leftArr, targ);
    } else if (targ > arr[middleIndex]){
        return rBinarySearch(rightArr, targ)
    } else {
        return true;
    }
}

console.log(rBinarySearch(sortedArray, 5))

/**
 * Recursive fibonacci
 * write rFib(num). Recursively compute and return numth fibonacci value. As earlier  treat the first tow (num=0, num=1).
 * rfib(2) =1 (0+1)
 * rfib(3) =1 (1+1)
 */

function rFib(num){
    //base case
    if(num === 1 || num ===2)return 1;
    //recursive case
    return rFib(num -1) + rFib(num-2);
}

console.log(rFib(10))