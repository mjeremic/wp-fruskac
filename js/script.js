$(function() {


    //menu
    $('.nav-icon').on('click',function(){
        $('.menus').slideToggle();
        $('div.m-hamburger').toggleClass('m-clicked');
    });

    var width = $(document).width();
    var p = window.location.pathname;
    if (width < 1200) {
        $('header').removeClass('scroll-down');
    }else{
        $("header .menus div.primary-menu ul li").css("width",$("header .menus div.primary-menu ul").width() / 6);
        if(p.indexOf("/en/") > -1 || p.indexOf("/ru/") > -1 || p.indexOf("/cn/") > -1) {
            $('header').addClass('lang');
            $("header.scroll-down.lang div.primary-menu ul li:nth-child(4)").css("margin-left","32px!important");
        }
    }




    var trigger = false;
    $(window).scroll(function() {
        var width = $(document).width();


        var lastPathSegment = p.substr(p.lastIndexOf('/') + 1);



        if (lastPathSegment == '' || lastPathSegment == 'index.php' || lastPathSegment == 'index.html') {

            var offsetTop = -$(this).scrollTop();
            if ($(this).scrollTop() < 265 && width > 1200) {
                $('header').css('top',offsetTop);

            }

            if (width > 1200) {
                if ($(this).scrollTop() > 260) {
                    if (trigger == false) {
                        $('header').addClass('scroll-down').css('top','-100px').animate({'top' : '0px'}, 800);
                        $('div.language').css('display','none');
                        $("header .menus div.primary-menu ul li").css("width",$("header .menus div.primary-menu ul").width() / 7);
                        $("header.scroll-down div.primary-menu ul li:nth-child(4)").css("margin-left",$("header .menus div.primary-menu ul").width() / 7);
                        $("header.scroll-down div.logo div.logo-img img").css("left",($(".logo-img").width() / 2)  - $(".desc-logo").width() );
                        trigger = true;
                    }
                } else {
                    $('header').removeClass('scroll-down');
                    $('div.language').css('display','block');
                    $("header .menus div.primary-menu ul li").css("width",$("header .menus div.primary-menu ul").width() / 6);
                    $("header div.primary-menu ul li:nth-child(4)").css("margin-left", "0px");
                    trigger = false;
                }
                // if(p.indexOf("/en/") > -1 || p.indexOf("/ru/") > -1 || p.indexOf("/cn/") > -1) {
                //     $('header').addClass('lang');
                //     $("header.scroll-down.lang div.primary-menu ul li:nth-child(4)").css("margin-left","32px!important");
                // }
            } else {
                if ($(this).scrollTop() > 1){
                    $('header').removeClass('scroll-down');
                }else{
                    $('header').removeClass('scroll-down');
                }
            }
        } else {
            if (width > 1200) {
                if ($(this).scrollTop() > 320) {
                    if (trigger == false) {
                        $('header').addClass('scroll-down').css('top','-100px').animate({'top' : '0px'}, 800);
                        // $('body').css('padding-top','263px');
                        $('div.language').css('display','block');
                        $("header .menus div.primary-menu ul li").css("width",$("header .menus div.primary-menu ul").width() / 7);
                        $("header.scroll-down div.primary-menu ul li:nth-child(4)").css("margin-left",$("header .menus div.primary-menu ul").width() / 7);
                        $("header.scroll-down div.logo div.logo-img img").css("left",($(".logo-img").width() / 2)  - $(".desc-logo").width() );
                        trigger = true;
                    }
                } else {
                    $('header').removeClass('scroll-down');
                    // $('body').css('padding-top','0px');
                    $('div.language').css('display','block');
                    $("header .menus div.primary-menu ul li").css("width",$("header .menus div.primary-menu ul").width() / 6);
                    $("header div.primary-menu ul li:nth-child(4)").css("margin-left", "0px");
                    trigger = false;
                }
                // if(p.indexOf("/en/") > -1 || p.indexOf("/ru/") > -1 || p.indexOf("/cn/") > -1) {
                //     $('header').addClass('lang');
                //     $("header.scroll-down.lang div.primary-menu ul li:nth-child(4)").css("margin-left","32px!important");
                // }
            } else {
                if ($(this).scrollTop() > 1){
                    $('header').removeClass('scroll-down');
                }else{
                    $('header').removeClass('scroll-down');
                }
            }
        }
        if (navigator.userAgent.match(/(iPhone)/)) {
            var iPhoneHeight = $(window).height();
            $('body  #video').css('height', iPhoneHeight);
            $('body  #video img').css('height', iPhoneHeight);
            $('body  #video').css('min-height', iPhoneHeight);
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

        // $('#video').height($('#video video').height());
    });


    //mapa-vinogradi
    //init pan
    $(function() {

        var width = $(document).width();
        if (width > 768) {
            var zoom_max = '450';
        } else {
            var zoom_max = '1300';
        }
        $('#flat').smoothZoom({
            button_SIZE: 22,
            button_ALIGN: "bottom right",
            zoom_OUT_TO_FIT: "NO",
            button_AUTO_HIDE: "YES",
            button_AUTO_HIDE_DELAY: 2,
            pan_LIMIT_BOUNDARY: "YES",

            /******************************************
             Enable Responsive settings below if needed.
             Max width and height values are optional.
             ******************************************/
            responsive: true,
            responsive_maintain_ratio: true,
            max_WIDTH: '',
            max_HEIGHT: '',

            zoom_MAX: zoom_max,
            zoom_MIN: '-1',


            animation_SPEED: 0.1
        });




        //hive loader when image is loaded
        var img=document.getElementById('flat');
        var func=function(){
            $('.cover').hide();
        };
        if(img.complete){
            func.call(img);
        }
        else{
            img.onload=func;
        }



        //monitor the image height so it can fit to screen on zoom out  < 0
        setInterval(function(){
            var zoomData = $('#flat').smoothZoom('getZoomData');


            var widthW = $(window).width();

            if (widthW > 1200) {
                var minus = '';
                if (widthW > 1920) {
                    minus = 270;
                }

                if (widthW <= 1920 && widthW > 1200) {
                    minus = 220
                }


                if ($('#flat').height() - minus <= $('#us').height()) {
                    $('#us > div > div > div.noSel > div:nth-child(3)').trigger('mouseup');
                    $('#us > div > div > div.noSel > div:nth-child(3)').css('pointer-events', 'none').stop();
                } else {
                    $('#us > div > div > div.noSel > div:nth-child(3)').css('pointer-events', 'all');
                }
            }

        }, 1);


    });



    $(window).resize(function () {
        if($(window).width() < 1200) {
            location.reload();
        }
    });






    //map

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





