var camp = {};
camp = {
    name:'Coursera',
    number_of_students: 30,
    instructors: ['devin', 'klay', 'stephan'],
    location: {
        city: 'San Jose',
        state: 'California',
        zipcode: 95032
    } 
}
console.log(camp.name, camp.number_of_students);
console.log(camp.location, camp.instructors)

camp.snacks = ['figbars', 'bagels', 'popcorn', 'apples'];

console.log(camp.snacks)

camp.number_of_students = 50;
camp.location.city = "San Diego";
camp.location.zipcode = 'unknown';

console.log(camp.location, camp.number_of_students);


/// Donut example

let glazed_Donuts = [
    {
        frosting: 'glazed',
        style: 'ring',
        type: 'old fashioned',
        age: '46',
        time: 'minutes'
    },
    {
        frosting: 'glazed',
        style: 'hole',
        type: 'regular',
        age: '10',
        time: 'minutes'
    },
    {
        frosting: 'glazed',
        style: 'ring',
        type: 'new school',
        age: '30',
        time: 'seconds'
    }
]

let purchase;

if((glazed_Donuts[0].age < 25 && glazed_Donuts[0].time == 'minutes') || glazed_Donuts[0].time =='seconds'){
    //shop owner
    purchase = glazed_Donuts[0];
}
else {
    console.log('Sorry its been out a but longer')
}


var numOfPurch = 0;
for(let donut in glazed_Donuts){
    console.log(glazed_Donuts[donut].type);
    if((glazed_Donuts[donut].age < 25 && glazed_Donuts[donut].time == 'minutes') || glazed_Donuts[donut].time == 'seconds')
    {
        numOfPurch++
    } else{
        console.log('not this one...')
    }
}
console.log(numOfPurch);