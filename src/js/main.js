"use strict";

import '../sass/style.scss';

AOS.init();

// Link self Page Animation Scroll
$(document).ready(function () {
    $("#back-top").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 2500, function () {
                window.location.hash = hash;
            });
        }
    });
});

// Got to Top
$(document).ready(function () {
    // hide #back-top first
    $("#back-top").hide();
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1500);
            return false;
        });
    });

});


// Date Pickers
$('#homeFrom').datepicker(
    {
        autoclose: true
    }
);
$('#homeTo').datepicker(
    {
        autoclose: true
    }
);


