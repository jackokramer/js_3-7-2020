// looping

for(let x =  0; x<20; x++){
    console.log('hello ' + x)
}


/// calling a function
// recursion exmaple

function sayHelloNum(number){ // to avoid inifinite loops add conditionals
    console.log('hello earl!')
    console.log("I've invoked the function")
    //sayHello() // recursion can be like groundhog day stack overflow
    if(number === 0){
        return true
    } else {
        sayHelloNum(number-1)
    }
}

sayHelloNum(10)


//flood fill optional

//diagonally related pixels not considered adjacent

// given a 2D canvas of:

canvas = [[3,1,4,2,2],
        [1,2,4,7,8],
        [4,2,1,5,6],
        [5,2,1,8,6],
        [4,1,2,8,5] ]

// START POINT //

start = [2,2];

// new color of 
color = 9;

canvas = [[3,1,4,9,9],
            [1,9,4,7,8],
            [4,9,1,5,6],
            [4,9,1,8,6],
            [4,1,9,8,5] ]

//if newColor[start] is not color
//  change it into color
// if canvas to the right is not color
// canvas to the [right ] into color
//      call floodfill, where canvas right is the start
// if canvas to the left is not color
//      call flood fill, canvas [left] to the start
// if canvas [up] is not color
//      call floodfill, canvas [up] as start
// if canvas[down] is not color 
//      call floodfill, canvas[down] as start


/// asyncrhonous calls happening simultaneously

function floodFill(canvas, start, color){
    // print start point
    upNdown = start[0];
    left_n_Right = start[1];
    console.log(canvas[upNdown][left_n_Right], 'this is the current color')
    console.log(color, 'this is the new color')
    if (canvas[upNdown][left_n_Right] !== color){
        canvas[upNdown][left_n_Right] = color;
    }
    // checking to the right
    if(canvas[upNdown][left_n_Right+1]!== color && left_n_Right+1 < canvas[upNdown].length){
        return floodFill(canvas, [upNdown, left_n_Right+1], color)
    }
    //checking to the left
    if(canvas[upNdown][left_n_Right-1]!== color && left_n_Right-1 >= 0){
        return floodFill(canvas, [upNdown, left_n_Right-1], color)
    }
    //check above
    if(canvas[upNdown-1[left_n_Right] !== color && upNdown-1 >=0]){
        return floodFill(canvas, [upNdown-1, left_n_Right], color)
    }
    //check under
    if(canvas[upNdown+1][left_n_Right]!== color && upNdown+1 <canvas.length){
        return floodFill(canvas, [upNdown+1, left_n_Right], color)
    }
    return canvas
}


console.log(floodFill(canvas, start, color));