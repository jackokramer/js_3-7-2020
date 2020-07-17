/*function aRcursion(times){
    if(times > 0){
        console.log('times')
        aRcursion(times-1);// manipulate the paramter in the function 
    } // needs a condition on when to run
}
aRcursion(10);
*/

function sumOfNumbers(num){
    // sigma  num = 5+4+3+2+1
    let sum  = 0;
    while(num>0){
        sum += num;
        num --;
    }
    return sum
}
console.log(sumOfNumbers(3));

function rSigma(num){
    if(num<=1){
        return num;
    }
    return num + rSigma(num-1);
}

let result = rSigma(7)

console.log(result)

function displayArrVal(arr, x=0){ // recursion using the function within the function
    if(x >= arr.length){
        return;
    }
    console.log(arr[x])
    displayArrVal(arr, x+1);
    }

console.log(displayArrVal([2,4,5,75,4,12]))

// iterative may work better here. but good to try recursive