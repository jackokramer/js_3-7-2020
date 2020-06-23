//push front given an array and an additional value, insert the value at the beginning of an array. Do this withoyt a built in system.

function pushFrony(arr, val){
    for(let x = arr.length; x>=0; x--){
        //push all each value in array over once
        arr[x] = arr[x-1];
        console.log(arr);
    }
    arr[0]=val;
    return arr;
}

console.log(pushFrony([2,3,1,3,4], 66))

//popfront

function popFront(arr){
    console.log(arr);
    //let returnval = arr[0];
    for(let x = 0; arr.length>x; x++){
        arr[x] = arr[x+1];
        console.log(arr);
    }
    arr.length-=1;//arr.pop(x)
    return arr;
}

console.log(popFront([12,4,2,1,26]))

// Insert At given an array, index, and additional value, insert the value into the array at a given index. Do this without a built in array method.

function insertAt(arr,idx, val){
    console.log(arr);
    for(let x = arr.length; x> idx; x--){
        arr[x] = arr[x-1];
        console.log(arr);
    }
    arr[idx] = val;
    return arr;
}

console.log(insertAt([1,35,6,3,2],6,5))

//Remove at given an array remove a and return the array.

function removeAt(arr, idx){
    console.log(arr);
    let returnVal=  arr[idx];
    for(let y = idx; y < arr.length; y++){
        arr[y] = arr[y+1];
        console.log(arr);
    }
    arr.pop();
    console.log(arr);
    return returnVal;
}

console.log(removeAt([1,3,5,6],1))