// why use recursion

for(let x =0; x<100; x++){

}

//countdown write a recursive function that recieves some num as an input and prints values down to zero.

// as long as num is not 0, print and reduce number

function countdown(num){
    if(num>0){
        console.log(num);
        return countdown(num-1);
    }
    return 0;
}

//countdown(78);

//loop array: Write a recursive dfunction to print all values in an inputted array.

//let x = 0;
function loopArray(arr, x =0){
    // stay inbound of the array
    if(x<arr.length){
        console.log(arr[x]);
        x++;
        loopArray(arr, x);
    }
    return arr;
}

loopArray([1,2,34,5,6,77])