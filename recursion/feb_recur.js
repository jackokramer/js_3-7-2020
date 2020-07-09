//why use recursion

for(let x = 0; x<50; x++){

}

//countdown write a recursive function that receives a number and prints all the vlaues down to zero

//as long as num = 0, print num and reduce num

function countdown(num){
    if(num>0){
        console.log(num);
        return countdown(num-1)
    }
    return 0;
}

countdown(11);

function CountDown(){
    for(let x =50; x>0; x--){
    }
    return;
}

CountDown();

/// function Loop array: write a recursive function to print all values in an inputted array.

function loopArray(arr, x=0){
    // stay inbounds of  the array
    if(x<arr.length){
        console.log(arr[x]);
        x++;
        loopArray(arr,x);
    }
    return arr;
}

loopArray([2,4,6,8,10])
// solution variable needs to be  declared outside the function or as a parameter