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
}