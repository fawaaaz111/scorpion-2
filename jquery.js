/*
    script for scorpion cars website
    auther : fawaz alhafiz
    version : 1.0
    language : jquery
*/

/*  ---------------------showing filters results in the search section ------------------- */

$(document).ready(function() { // make sure the document is done downloaded

    // show and hide the filter menu
    $(".filter_type").click(function() {
        $(this).siblings("ul").toggleClass("active"); // target the list with the class "active"
    });

    $(".filter_item ul li").click(function() {
        var text = $(this).text(); // get the text from the list item which is pressed
       
        $(this).parent().siblings(".filter_type").text(text);// select the "filter type" div to show the text on
        $(this).parent().removeClass("active"); // remove the class "active" from the pressed list item menu 
    });

}) ;