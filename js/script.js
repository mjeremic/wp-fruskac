$(function() {


    //menu
    $('.nav-icon').on('click',function(){
        $('.menus').slideToggle();
        $('div.m-hamburger').toggleClass('m-clicked');
    });

    var width = $(document).width();
    if (width < 1200) {
        $('header').removeClass('scroll-down');
    }


    var trigger = false;
    $(window).scroll(function() {
        var width = $(document).width();

        var p = window.location.pathname;
        var lastPathSegment = p.substr(p.lastIndexOf('/') + 1);

        if (lastPathSegment == '' || lastPathSegment == 'index.php') {

            var offsetTop = -$(this).scrollTop();
            if ($(this).scrollTop() < 265 && width > 1200) {
                $('header').css('top',offsetTop);
            }

            if (width > 1200) {
                if ($(this).scrollTop() > 260) {
                    if (trigger == false) {
                        $('header').addClass('scroll-down').css('top','-100px').animate({'top' : '0px'}, 800);
                        // $('.single').addClass('scroll-padding');
                        $('div.language').css('display','none');
                        trigger = true;
                    }
                } else {
                    $('header').removeClass('scroll-down');
                    $('div.language').css('display','block');
                    // $('.single').removeClass('scroll-padding');
                    trigger = false;
                }
            } else {
                if ($(this).scrollTop() > 1){
                    $('header').removeClass('scroll-down');
                    // $('.single').addClass('scroll-padding');
                }else{
                    $('header').removeClass('scroll-down');
                    // $('.single').removeClass('scroll-padding');
                }
            }
        } else {
            if (width > 1200) {
                if ($(this).scrollTop() > 320) {
                    if (trigger == false) {
                        $('header').addClass('scroll-down').css('top','-100px').animate({'top' : '0px'}, 800);
                        // $('body').css('padding-top','263px');
                        // $('.single').addClass('scroll-padding');
                        $('div.language').css('display','none');
                        trigger = true;
                    }
                } else {
                    $('header').removeClass('scroll-down');
                    // $('body').css('padding-top','0px');
                    // $('.single').removeClass('scroll-padding');
                    $('div.language').css('display','block');
                    trigger = false;
                }
            } else {
                if ($(this).scrollTop() > 1){
                    $('header').removeClass('scroll-down');
                    // $('.single').addClass('scroll-padding');
                }else{
                    $('header').removeClass('scroll-down');
                    // $('.single').removeClass('scroll-padding');
                }
            }
        }
        if (navigator.userAgent.match(/(iPhone)/)) {
            var iPhoneHeight = $(window).height();
            $('body #content #video').css('height', iPhoneHeight);
            $('body #content #video img').css('height', iPhoneHeight);
            $('body #content #video').css('min-height', iPhoneHeight);
        }
    });

    //map
    $(window).resize(function () {
        var rwidth = $(document).width();
        if (rwidth < 1200) {
            $('header').removeClass('scroll-down');
            $(".menus").css("display", "none");
        }else{
            $(".menus").css("display", "block");
        }
        console.log(rwidth);
        // if ($(window).width() > 768) {
        //     $('.details').height($('.details').first().width());
        //     //$('.featured').removeAttr('style');
        // }
        //
        // if($(window).width() > 767  && $(window).width() < 992 ){
        //     $('.featured').height($('.featured').width() *  1.32);
        // }
        //
        // if($(window).width() < 768 ){
        //     $('.featured').height(($('.featured').width()+25) *  1.28);
        // }
        //
        // if($(window).width() > 992) {
        //     if($('.featured.col-lg-8').length > 0) {
        //         $('.featured.col-lg-8').attr('style', $('.featured.col-lg-8').attr('style').replace(/height:[^;]+/g, ''));
        //     }
        // }
        //
        // if($(window).width() < 1200) {
        //     $('.details-featured').height($('.details-wrap').height() + 100);
        //     $('#video').height($('#video video').height());
        // }
        //
        // if($(window).width() > 1200) {
        //     $('.details-featured').removeAttr('style');
        // }

        // $('#video').height($('#video video').height());
    });







    var mapOptions = {
        center: new google.maps.LatLng(45.214152, 19.616121),
        zoom: 14,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        fullscreenControl: false,
        // panControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#181818"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1b1b1b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8a8a8a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#373737"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3c3c3c"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
                    }
                ]
            }
        ]
    };


    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(new google.maps.LatLng(45.214152, 19.616121));
    });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(45.214152, 19.616121),
        map: map,
        //icon: '/images/logo.png',
        title: 'In vino veritas, in aqua sanitas'
    });
});



$(function () {
    var mapOptions = {
        center: new google.maps.LatLng(45.214152, 19.616121),
        zoom: 14,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        fullscreenControl: false,
        // panControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#181818"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1b1b1b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8a8a8a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#373737"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3c3c3c"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
                    }
                ]
            }
        ]
    };


    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(new google.maps.LatLng(45.214152, 19.616121));
    });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(45.214152, 19.616121),
        map: map,
        //icon: '/images/logo.png',
        title: 'In vino veritas, in aqua sanitas'
    });
});
