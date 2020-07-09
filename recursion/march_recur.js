//Function review

/*
function aRecursion(times){
    //base case
    if(times>0){
        console.log('times')
        aRecursion(times-1);
    }
}
aRecursion(10);
*/

function sumOfNumbers(num){
    // num:5 => 5+4+3+2+1
    let sum = 0;
    while(num>0){
        sum += num;
        num--;
    }
    return sum;
}
console.log(sumOfNumbers(5));

function rSigma(num){
    if(num<1){
        return 0;
    }
    return num + rSigma(num-1)
}

let result = rSigma(3);


//size
function size(){
    let sum = 0;
    let current = this.head;
    while(current){
        sum +=1;
        current = current.next;
    }
    return sum
}

console.log(size(10))
/*
function add(x,y){
    return x+y;
}

function doesMath(){
    console.log(`We're doing math now...`)
    let result = add(1,1);
    console.log(`adding 1 + 1`);
    console.log(result);
}

doesMath();

*/

function displayArrayValues(arr, x=0){
    if(x >= arr.length){
        return;
    }
        console.log(arr[x])
        displayArrayValues(arr, x+1);
}

displayArrayValues([2,4,6,8])