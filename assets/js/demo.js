$(document).ready(function() {

    "use strict";

    //Page loader
    if ($('.pageloader').length) {

        $('.pageloader').toggleClass('is-active');

        $(window).on('load', function() {
            var pageloaderTimeout = setTimeout( function() {
                $('.pageloader').toggleClass('is-active');
                $('.infraloader').toggleClass('is-active')
                clearTimeout( pageloaderTimeout );
            }, 700 );
        })
    }

    //Navbar Clone
    if ($('#navbar-clone').length) {
        $(window).scroll(function() {    // this will work when your window scrolled.
            var height = $(window).scrollTop();  //getting the scrolling height of window
            if(height  > 50) {
                $("#navbar-clone").addClass('is-active');
            } else{
                $("#navbar-clone").removeClass('is-active');
            }
        });
    }

    //Mobile menu toggle
    if ($('.navbar-burger').length) {
        $('.navbar-burger').on("click", function(){
            $('.navbar-burger').toggleClass('is-active');
            if ($('.navbar-menu').hasClass('is-active')) {
                $('.navbar-menu').removeClass('is-active');
                $('.navbar').removeClass('is-dark-mobile');
            } else {
                $('.navbar-menu').addClass('is-active');
                $('.navbar').addClass('is-dark-mobile');
            }
        });
    }

    //Typed js
    var typed = new Typed('.typed-hero', {
        strings: ["Hello, Iam Minakawaii ^2000", "Premium UI Kit ^2000", "For Ecommerce ^2000"],
        typeSpeed: 45,
        loop: true,
        loopCount: Infinity,
        backSpeed: 20,
    });

    //Initialize Feather Icons
    feather.replace();

    // Scroll to hash
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .on('click', function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 550, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    if ($('.is-title-reveal, .is-feature-reveal ').length) {
        //Scroll reveal definitions
        // Declaring defaults
        window.sr = ScrollReveal();

        // Simple reveal
        sr.reveal('.is-title-reveal', {
            origin: 'bottom',
            distance: '20px',
            duration: 600,
            delay: 100,
            rotate: { x: 0, y: 0, z: 0 },
            opacity: 0,
            scale: 1,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            container: window.document.documentElement,
            mobile: true,
            reset: false,
            useDelay: 'always',
            viewFactor: 0.2,

        });

        // Revealing features
        sr.reveal('.is-feature-reveal', {
            origin: 'bottom',
            distance: '20px',
            duration: 600,
            delay: 100,
            rotate: { x: 0, y: 0, z: 0 },
            opacity: 0,
            scale: 1,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            container: window.document.documentElement,
            mobile: true,
            reset: true,
            useDelay: 'always',
            viewFactor: 0.2,

        }, 160);
    }


    //Canvas Hero animation
    var windowXArray = [],
        windowYArray = [];

    for (var i = 0; i < $(window).innerWidth(); i++) {
        windowXArray.push(i);
    }

    for (var i = 0; i < $(window).innerHeight(); i++) {
        windowYArray.push(i);
    }

    function randomPlacement(array) {
        var placement = array[Math.floor(Math.random()*array.length)];
        return placement;
    }


    var canvas = oCanvas.create({
        canvas: '#canvas',
        background: 'transparent',
        fps: 60
    });

    setInterval(function(){

        var rectangle = canvas.display.ellipse({
            x: randomPlacement(windowXArray),
            y: randomPlacement(windowYArray),
            origin: { x: 'center', y: 'center' },
            radius: 0,
            fill: '#fcfcfc',
            opacity: 1
        });

        canvas.addChild(rectangle);

        rectangle.animate({
            radius: 10,
            opacity: 0
        }, {
            duration: '1000',
            easing: 'linear',
            callback: function () {
                this.remove();
            }
        });

    }, 250);

    $(window).resize(function(){
        canvas.width = $(window).innerWidth();
        canvas.height = $(window).innerHeight();
    });

    $(window).resize();

})
