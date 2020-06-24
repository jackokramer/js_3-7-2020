/*let num = 3;
let x = 0

while(x<num){
    console.log('projects and algos 2020');
    x++;
}
*/
//recursion is no different basically calls itself in a function

/*
function boastPA(){
    console.log("projects and algos are a pain");
    boastPA();
}
*/
//boastPA(); // same as an undefined while loop

//recursive code is great beacuase it requires a lot less code.


function newYears(num){
    // base case
    if(num === 0){
        console.log("happy new years");
        return;
    }
    console.log(num);
    newYears(num -1);
}

newYears(5);

//factorial 4 = 1*2*3*4=24

function factorial(number){
    // base case
    if(number ===1){
        return 1;
    }
    //recursive case
    return number * factorial(number-1);
}

console.log(factorial(5));

// differnce between without using recursion
function factor(nums){
    let fact = 1;
    for(let x = 0; x<=nums; x++){
        fact *=x;
    }
    return fact;
}

/*
fact(5) =  5xfact(4)
fact(4) =  4xfact(3)
fact(3) =  3xfact(2)
fact(2) =  2xfact(1)
fact(1) =  1
*/


/* RECURSIVE BINARY SEARCH
Given a sorted array and value, determine if the value is found within the array.

ex: rBinarySearch([1,2,3,5,77], 4)= false;
ex2: rBinarySearch([1,2,3,5,77], 5)= true;
*/

let sortedArray = [1,2,3,55,21,29,30, 56];

//return Boolean. true/false

function searchBinary(arr, targ){
    // base case
    //if(arr.length === 0)
    //    return false;
    //recursive case;
    console.log(arr.length);
    let middleIndex = Math.floor(arr.length/2);
    //console.log(middleIndex);
    let leftArr = arr.slice(0, middleIndex);
    //console.log(leftArr);
    let rightArr = arr.slice(middleIndex);
    //console.log(rightArr)
    //recursive case
    if(targ < arr[middleIndex]){
        return searchBinary(leftArr, targ);
    } else if(targ > arr[middleIndex]){
        return searchBinary(rightArr, targ);
    } else {
        return true;
    }
}

//console.log(searchBinary(sortedArray, 4));

/* 
Recursive Fibonnaci
rfib(2) = 1(0+1);

rfib(3) = 2(1+1);

rfib(4) = 3(1+2);


*/

function fibonacci(a){
    //base case
    if(a ===1 || a ===2 )
        return 1;

    //recurse case
    return fibonacci(a-1) +  fibonacci(a-2);
}

console.log(fibonacci(6));