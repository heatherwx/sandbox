/**
 * Created by hmccullo on 12/1/15.
 */



/$(document).ready(function(){
    $("#startButton").click(function(){
        $(this).button('complete');
        $(this).removeClass('btn');
        $(this).removeClass('btn-success');
        $(this).removeClass('btn-lg');
        $(this).addClass('parr-question');
        $(this).collapse('parr-question-buttons');
    });
});

/**
 * Toggles between abbreviated and extended views

$(document).ready(function() {
    if ($("div.span7").height() > 90) {
        $("div.span7").addClass("viewLess");
        $("div.span7").html($("div.span7").html() + "<a href=\"javascript:toggleAbstract()\">Show More</a><div class=\"gradient\"></div><div class=\"cover\"></div>");
    } else {
        $("div.span7").removeClass("viewLess");
        $("div.span7").html($("div.span7").html().split("<a href")[0]);
    }
});

function toggleAbstract() {
    if ($("div.span7").hasClass("viewLess")) {
        $("div.span7").css("height", "auto");
        var targetHeight = $("div.span7").height();
        $("div.span7").css("height", "190px");
        $("div.span7").animate({
            height: targetHeight
        }, 300, function() {
            $("div.span7").removeClass("viewLess");
            $("div.span7").addClass("viewMore");
            $("div.span7 a").html("Show Less");
        });
    } else {
        $("div.span7").animate({
            height: '190px'
        }, 300, function() {
            $("div.span7").removeClass("viewMore");
            $("div.span7").addClass("viewLess");
            $("div.span7 a").html("Show More");
        });
    }
}*/