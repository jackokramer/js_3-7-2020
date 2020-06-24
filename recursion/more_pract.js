// why use recursion

for(let x = 0; x<100; x++){

}

/*COUNTDOWN 
Write a recursive function that receives num as an input and prints all values down to zero

//Base case : as long as num is not zero print num
//reduce Num working backwards
*/

function countDown(num){
    //Base case
    if(num>0){
        console.log(num);
        countDown(num-1);
    }
    return 0
}

//countDown(99)

/**LOOP ARRAY 
 * Write a recursive function to print all values in an inputted array.
 * 
*/
//let x = 0;

function loopArray(arr, x=0){
    // stay inbounds of the array
    if(x< arr.length){
        console.log(arr[x])
        x++;
        loopArray(arr, x);
    }
    return arr;
}

//loopArray(['hi',2,4,6,9])

/**FLOOD FILL 
 * VIEW as pixels in a 2d array
 * Piels represent different colors
 * Change pixels to different colors
 */

 let canvas2d = [[3,2,1,4,4],
                [2,3,3,8,1],
                [3,3,1,4,4],
                [2,3,3,4,5],
                [7,2,3,3,3]];
console.log(`Begining with: ${canvas2d}`)

canvas2d[2][2]
[2,2]
//canvas2d[start[0]]
//parameters: canvas, startPoint, newColor
function floodFill( canvas, start, newColor){
    let oldColor = canvas[start[0]] [start[1]];
    canvas[start[0]][start[1]]=newColor;
    //MOVE TO THE LEFT
    if(start[1]-1>= 0){
        if(canvas[start[0]] [start[1]-1] == oldColor){
            floodFill(canvas, [start[0], start[1]-1], newColor)
        }
    }
    //MOVE TO THE RIGHT
    if(start[1]+1< canvas[0].length){
        if(canvas[start[0]] [start[1]+1] == oldColor){
            floodFill(canvas, [start[0], start[1]+1], newColor)
        }
    }
    //MOVE DOWNWARDS
    if(start[0]+1< canvas.length){
        if(canvas[start[0]+1] [start[1]] == oldColor){
            floodFill(canvas, [start[0]+1, start[1]], newColor)
        }
    }
    //UPWARD MOVEMENT
    if(start[0]+1>= 0){
        if(canvas[start[0]-1] [start[1]] == oldColor){
            floodFill(canvas, [start[0]-1, start[1]], newColor)
        }
    }
    return canvas

}

console.log(floodFill(canvas2d, [3,4], 9))