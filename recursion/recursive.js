// recursion refers to a function calling itself - different way of looping iterrative
// Three things
// 1) base case - where does the looping stop
// ex: loop through the array: for(var t = 0; arr.length>t; t++)
// 2) some way to increment or decrement to the base case
// 3) recursive call

//sigma addition of values in sequence
// ex: sigma(6) => 6+5+4+3+2+1= 21
// doesn't work for negative values. Decimals need a floor edor truncated value
function forSigma(arr){
    var sum  = 0
    for(var x = arr; x>0; x--){
        sum+=x;
    }
    return sum;
}

console.log(forSigma(7));

function rSigma(arr){
    if(arr == 1){
        return 1;
    }
    return arr + rSigma(arr-1);
}

console.log(rSigma(6));

function rSigmaUp(arr, sum=0){
}


//while(true){
    //do something
    //have somewhere to stop
//}

//binary search -- lets go to the middle of the array. rather than looping through the whole thing. Don't do iteratively.

function binarySearch(sortarr, val, startInd = 0, endInd = sortarr.length-1){
    if(val<sortarr[startInd] || val>sortarr[endInd], startInd>endInd){
        return false;
    }
    let midInd = Math.floor((startInd+endInd)/2);
    if(sortarr[midInd] == val){
        return true;
    }
    else if(sortarr[midInd]>val){
        return binarySearch(sortarr, val, startInd, endInd = midInd -1);
    }
    else{
        return binarySearch(sortarr, val, startInd=midInd+1, endInd);
    }
}

let sortedArray = [1,2,3,5,7,17]
console.log(binarySearch(sortedArray,9));