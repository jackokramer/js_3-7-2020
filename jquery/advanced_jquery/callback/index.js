function attach_handlers(){
    $('.alert').click(function(){
        alert(`you clicked me.....`)
    });
}

$(document).ready(function(){
    attach_handlers();
    $('.new_butt').click(function(){
        $(`.butts`).append(`<button class ='alert'> I'm a dynamivally generated butt</button>`)
        attach_handlers(); // called directly after the function runs
    })
    // a call back is nothing more than callig a function at some time from withnin another function
})