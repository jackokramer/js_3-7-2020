// reduce array
//const array = [“test1”, “test2”, “test3” ];
//Return newObject = { 0: “test1”,
//    1: “test2”,
//    2: “test3” };

const array1 = [{
    0:'My',
    1:'Name', 
    2: "is", 
    3: "Jack"}
];
const reducer = (accumlator, currentValue) => accumlator + currentValue;

console.log(array1.reduce(reducer));

for(let x = 0; array1.length>x; x++){
    console.log(array1[x]);
}