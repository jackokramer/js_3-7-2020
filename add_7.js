// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr){
    var newArr = [];
    for (var x = 0; arr.length > x; x++){
            newArr.push(arr[x]+7)
    }
    return newArr;
}

// // Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverse(arr){
    for(var x = 0 ; arr.length/2 ; x++){
        var temp = arr[x];
        arr[x] = arr[arr.length -1-x];
        arr[arr.length -1-x] = temp;
    }
    return arr;
}

console.log(reverse([2,35,12,5,7,11,20]));

//// Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].

function previousLengths(arr){
    //var string = '';
    for(var x = arr.length-1; x>0; x--){
        //if(string = count.arr[x]){
            arr[x] = arr[x-1].length;
    }
    return arr;
}
//console.log(previousLengths(['car','messi', 'ibrahimovic', 'benzema']));

//Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr){
    var count= 0;
    for(var x = 0; arr/length>x; x++){
        if(arr[x]>0){
            count++;
        }
    }
    arr[arr.length-1] = count;// this part
    return arr;
}