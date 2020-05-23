// looping

for(let x =  0; x<20; x++){
    console.log('hello ' + x)
}


/// calling a function

function sayHello(){
    console.log('hello earl!')
    console.log("I've invoked the function")
    sayHello() // recursion can be like groundhog day stack overflow
    return 10
}

sayHello()


//flood fill optional