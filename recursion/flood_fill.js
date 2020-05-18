// why use recursion?

//for(let x = 0; x<100; x++){
//    x+2;
//}

//countdown: write a recursive function that recieves a num as an input and prints its values down to 0.

// as long as num is not 0 print num
// reduce num

function recountDown(num){
    if(num>0){
        console.log(num);
        recountDown(num-1)
    }
    return 0
} 

console.log(recountDown(11));

// loopArray: Write an recursive function to print all the values in an interpreted array.

function loopArray(arr, x =0){
    // stay in bounds of the array
    if(x< arr.length){
       console.log(arr[x]);
       x++;
       loopArray(arr, x); 
    }
    return arr;
}

console.log(loopArray(['helllo', 44, 12, 29,37, 81]))

// flood fill 

let canvas2d = [[2,1,5,4,3],
                [1,2,4,5,3],
                [2,2,4,8,3],
                [8,2,4,6,9],
                [4,2,6,1,9]];

console.log('Begining with: ${canvas2d}')

//canvas2d[2][2]

//[2,2]
//canvas[start[0]]

function floodFill(canvas, start, newColor){
    let oldColor = canvas[start[0]][start[1]];
    canvas[start[0]][start[1]] = newColor;
    //left movement
        if(start[1] >= 0){
            if(canvas[start[0]][start[1]-1] == oldColor){
                floodFill(canvas, [start[0], start[1]-1], newColor)
            }
        }
        //right movement
        if(start[1]+1 < canvas[0].length){
            if(canvas[start[0]][start[1]-1] == oldColor){
                floodFill(canvas, [start[0], start[1]-1], newColor)
            }
        }
        //down movement
        if(start[0]+1 < canvas.length){
            if(canvas[start[0]+1][start[1]] == oldColor){
                floodFill(canvas, [start[0]+1, start[1]], newColor)
            }
        }
        //Up Movement
        if(start[0]-1 >= 0){
            if(canvas[start[0]-1][start[1]] == oldColor){
                floodFill(canvas, [start[0]-1, start[1]], newColor)
            }
        }
    return canvas
}

console.log(floodFill(canvas2d, [2,2], 9))