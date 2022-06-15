/*
    script for scorpion cars website
    auther : fawaz alhafiz
    version : 1.0
*/

 /*  ----------------------------------jquery for showing filters results in the search section ------------------- */

 $(document).ready(function() { // make sure the document is done downloaded
    // alert("fawaz");
    $(".filter_type").click(function() {
        $(this).siblings("ul").toggleClass("active"); // taeget the list with the class "active"
    });

    $(".filter_item ul li").click(function() {
        var text = $(this).text(); // get the text from the list item which is pressed
        $(this).parent().siblings(".filter_type").text(text);// select the "filter type" div to show the text on
        $(".filter_item ul").removeClass("active");
    });
}) ;