// Playing with objects 

let users = [{name: 'Peter', age:51}, {name: 'Molly', age:27}, {name:'Shannon', age:32}, {name:'Sasha', age:25}]

console.log(users[2].age);

console.log(users[3].name);

for(let x = 0; users.length > x; x++){
    console.log(users[x].name, '-', users[x].age);
}