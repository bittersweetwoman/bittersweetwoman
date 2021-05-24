/*
	Catalyst by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

const header = document.getElementById('header');

const modal = document.getElementById('slider-modal');
const modalButton = document.getElementById('excerpt-button');
  
const inner = document.getElementsByClassName('carousel-inner');
const children = inner[0].children;

const left = document.getElementById('left-carousel-control');
const right = document.getElementById('right-carousel-control');

const close = document.getElementById('close-modal');

let i = 0;

console.log(children[i])

// let max = children.length - 1;

modalButton.addEventListener('click', e => {
    modal.style.display = 'flex';
    header.style.display = 'none';
    children[i].style.display = 'block';
    
})

right.addEventListener('click', e => {
    if(i < 4){
        children[i].style.display = 'none';
        i++
        children[i].style.display = 'block';
    }else {
        children[i].style.display = 'none';
        i = 0;
        children[i].style.display = 'block';
    }
})

left.addEventListener('click', e => {
    if(i > 0 ){
        children[i].style.display = 'none';
        i--
        children[i].style.display = 'block';
    }
    else{
        children[i].style.display = 'none';
      i = 4;
      children[i].style.display = 'block';
    }
})

close.addEventListener('click', e => {
    modal.style.display = 'none';
    header.style.display = '';


})

console.log(inner[0].children); 




(function($) {

    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        wide: ['1281px', '1680px'],
        normal: ['981px', '1280px'],
        narrow: ['737px', '980px'],
        mobile: ['481px', '736px'],
        mobilep: [null, '480px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 5);
    });

    // Dropdowns.
    $('#nav > ul').dropotron({
        alignment: 'right'
    });

    // Nav Panel.

    // Title Bar.
    $(
            '<div id="navButton">' +
            '<a href="#navPanel" class="toggle"></a>' +
            '</div>'
        )
        .appendTo($body);

    // Panel.
    $(
            '<div id="navPanel">' +
            '<nav>' +
            $('#nav').navList() +
            '</nav>' +
            '</div>'
        )
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'left',
            target: $body,
            visibleClass: 'navPanel-visible'
        });

    // Banner.
    var $banner = $('#banner');

    if ($banner.length > 0) {

        // Parallax background.
        if (browser.name != 'ie' &&
            browser.name != 'edge' &&
            !browser.mobile) {

            var originalPosition = $banner.css('background-position');

            breakpoints.on('<=normal', function() {

                $window.off('scroll.px');
                $banner.css('background-position', originalPosition);

            });

            breakpoints.on('>normal', function() {

                $banner.css('background-position', 'center 0px');

                $window.on('scroll.px', function() {
                    $banner.css('background-position', 'center ' + (parseInt($window.scrollTop()) * -0.5) + 'px');
                });

            });

        }

	}
	
	// var $three = $('#three');

	// var $img = 


})(jQuery);

// const doc = document;

// const img = 