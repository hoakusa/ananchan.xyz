function gotoSection(section) {
    $('html, body').animate({
        scrollTop: $(section).offset().top
    }, 500);
}

$(document).ready(function(){
});
