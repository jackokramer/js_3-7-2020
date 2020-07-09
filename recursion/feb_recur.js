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

//flood fill

let canvas2D = [[3,2,3,4,3],
                [2,3,3,4,0],
                [7,3,3,5,3],
                [6,5,3,4,1],
                [1,2,3,3,3]];

console.log(`Begining with: ${canvas2D}`)
//parameters: canvas, startPoint, 

/* center point (start)
canvas2D[2][2]
[3,4]
canvas[start[0]]
*/
function floodFill(canvas, start, newColor){
    let oldColor = canvas[start[0]][start[1]];
    canvas[start[0]][start[1]]=newColor;
    //left movement
    if(start[1]>=0){
        if(canvas[start[0]][start[1]-1] == oldColor){
            floodFill(canvas, [start[0], start[[1]-1]], newColor)
        }
    }
    //right movement
    if(start[1]+1< canvas[0].length){
        if(canvas[start[0]][start[1]+1] == oldColor){
            floodFill(canvas, [start[0], start[[1]+1]], newColor)
        }
    }
    //down movement
    if(start[0]+1< canvas.length){
        if(canvas[start[0]+1][start[1]] == oldColor){
            floodFill(canvas, [start[0]+1, start[1]], newColor)
        }
    }
    //up movement
    if(start[0]-1 >= canvas.length){ // equal gives you the first value
        if(canvas[start[0]-1][start[1]] == oldColor){
            floodFill(canvas, [start[0]-1, start[1]], newColor)
        }
    }
    return canvas
}

console.log(floodFill(canvas2D, [2,2], 9))