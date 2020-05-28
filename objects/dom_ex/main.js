let body = document.body;
body.innerHTML('Hello');

let bod = document.body;
for(let x = 0; x<10; x++){
    bod.innerHTML += "<p>This has gone through the loop completely" +x+ "times</p>"
}

let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
for(let x  = 0; x<paragraphs.length; x++){
    console.log(paragraphs[x].addEventListener);
    paragraphs[x].addEventListener('click', function(){
        this.style.background='blue;'
    });
}