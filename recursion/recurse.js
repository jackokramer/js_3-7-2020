// recursion refers to function that calls itself. In essence its a different way of looping.
// 1) Needs a base case. -> where does the looping stop.
// ex. loop through an array: for(var x = 0; x<array.length; x++)
// 2) some way to increment or move closer to the base case
// 3) the recursive call
function myfunc(){
    myfunc(); // you can rewrite a function to showcase a loop.
}

// recursive sigma the addition of numbers in sequence. - The addition of values in sequence. 
// ex: sigma(5) = 5+4+3+2+1 =15
// ex: sigma(6) = 5+4+3+2+1 =21
// does not work for numbers that are negative.
// decimals get truncated or floored meaning they round out.
// factorial is multiplication * rather than addition. 


// FOR LOOP EX

function forSig(val){
    var sum = 0;
    for(var x = val; x>0; x--){
        sum += x;
    }
    return sum;
}

//console.log(forSig(7));

function recurSigma(val){
    val = Math.floor(val);// handles cases of decimals
    if (val <=0){// handles cases of negatives
        return 0;
    }
    if(val === 1){ // trick is to add one aproaches looping from an iterative perspective.
        return 1 // base case to stop loop
    }
    return val + recurSigma(val - 1); // recursive call with forward movement to base case.
}

//console.log(recurSigma(9));
//console.log(recurSigma(8));

function binarySearch(sortarr, val, start =0, end = sortarr.length-1){ // binary search means to look in the middle of the array rather than the entire
    if (val < sortarr[start] || val > sortarr[end]){
        return false;
    }
    var midInd = Math.floor((start+end)/2);
    if(sortarr[midInd]== val){
        return true;
    }
    else if(sortarr[midInd]>val){
        return binarySearch(sortarr, val, start, end= midInd - 1);
    } else {
        return binarySearch(sortarr, val, start=midInd +1, end);
    }
}

var sortarr = [1,4,5,6,7,8,20,23,26];
console.log(binarySearch(sortarr,3));
console.log(binarySearch(sortarr,11));
