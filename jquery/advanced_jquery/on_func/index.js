$(document).ready(function(){
    $('button').click(function(){
        $('div').append('<h3>you clicked me!</h3>')
    });
    $(document).on('mouseover', 'h3', function(){
    $(this).css('color', 'pink')
    });
})

//document .on() looks for clicks  and once something is clicked it'll look got dynamically rendered content