$(document).ready(function(){
    $(`form`).submit(function(){
        alert(`you're submitting me`);
        console.log($(this).serialize())
        return false ///doesn't allow the page to refresh or redirect
    })
    $('.btn').click(function(){
        $(`#form1`).submit() // .submit() works in two ways 1 as a listner 2) used to hard submit
    })
    $('.myDiv').click(function(){
        $('.myDiv').siblings('p').hide();
    })
})