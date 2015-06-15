//alert("Hello from your Chrome extension!")
//var firstHref = $("a[href^='http']").eq(0).attr("href");
//$('._5vb_').css({'background-color': 'red'}); //side of  the main container
//$('#contentCol').css({'background-color': 'red'}); //middle of the main container

/*****************************************************************
 *
 *
 *  INIT ALL VARIABLES
 *
 ****************************************************************/

//Element selector
var navigationBar = $('#blueBarNAXAnchor');
var fullTheme = $('._5vb_, #contentCol');
var headerIco = $(".jewelButton, ._5cop ._59fb, ._50__ ");
var fontColorNavBar = $('._1ayn');
var homeNotifAvailable = $("._5ahz");
var topLeftMenu = $('.litestandClassicWelcomeBox.fbxWelcomeBoxSmall a');
var contentLeftMenu = $('._bui ._5afe');
var nbNotifLeftMenu = $('._55y4._55y4 ._5afe .count .countValue');
var titleLeftMenu = $('.homeSideNav .navHeader a, ._55y4 .homeSideNav .navHeader, ._50f8');


//Sprite declaration
var darkGraySprite = 'http://img11.hostingpics.net/pics/829430graysprite.png';
var purpleLifeSprite = 'http://img11.hostingpics.net/pics/951911purpleoriginsprite.png';
var greenForestSprite = 'http://img11.hostingpics.net/pics/786227greenoriginsprite.png';
var redBloodSprite = 'http://img11.hostingpics.net/pics/687192redoriginsprite.png';
var goldSprite = 'http://img11.hostingpics.net/pics/458075yellownegatesprite.png';

var redBloodSprite2 = 'http://img11.hostingpics.net/pics/797712redoriginsprite.png';
var purpleLifeSprite2 = 'http://img11.hostingpics.net/pics/431495purpleoriginsprite.png';
var greenForestSprite2 = 'http://img11.hostingpics.net/pics/380894greenoriginsprite.png';
var goldSprite2 = 'http://img11.hostingpics.net/pics/160661yelloworiginsprite.png';

$( document ).ready(function() {
    setTimeout('',10);
    var isActivelocalStorage = localStorage.getItem('theme');
    if (isActivelocalStorage) {
        if (isActivelocalStorage !== "") {
            changeTheme(isActivelocalStorage);
        }
    }
    isActivelocalStorage = localStorage.getItem('icons');
    if (isActivelocalStorage) {
        if (isActivelocalStorage !== "") {
            changeIcons(isActivelocalStorage);
        }
    }
    isActivelocalStorage = localStorage.getItem('bgcol');
    if (isActivelocalStorage) {
        if (isActivelocalStorage !== "") {
            changeBgCol(isActivelocalStorage);
        }
    }
    isActivelocalStorage = localStorage.getItem('navbar');
    if (isActivelocalStorage) {
        if (isActivelocalStorage !== "") {
            changeNavBar(isActivelocalStorage);
        }
    }
});

function changeNavBar(color){
    navigationBar.css({'background' : color}); //navigation bar
    localStorage['navbar'] = color;


}

function changeBgCol(color){
    fullTheme.css({'background' :  color});
    localStorage['bgcol'] = color;
}

function changeTheme(color){

    if (color == 'green') {
        $('a._55ln').on('click', function(){
            setTimeout(function(){
                $( "*" ).each(function( index ) {

                    if ($(this).hasClass('fbNubFlyoutTitlebar')) {
                        $(this).css({'background': '#007730', 'border': '1px solid #00B74A'});
                    }
                });

            },1);

        });
        $('._3v_l').on('click', function(){
            setTimeout(function(){
                $( "*" ).each(function( index ) {

                    if ($(this).hasClass('fbNubFlyoutTitlebar')) {
                        $(this).css({'background': '#007730', 'border': '1px solid #00B74A'});
                    }
                });

            },1);
        });
        $( "*" ).each(function( index ) {
            if ($(this).hasClass('fbNubFlyoutTitlebar')) {
                $(this).css({'background': '#007730', 'border': '1px solid #00B74A'});
            }
            if ($(this).css('background-image') == 'url(https://fbstatic-a.akamaihd.net/rsrc.php/v2/ys/r/y92sOHsDDYv.png)'
                || $(this).css('background-image') == 'url('+ purpleLifeSprite +')' ||  $(this).css('background-image') == 'url('+ redBloodSprite +')'
                ||  $(this).css('background-image') == 'url('+ goldSprite +')') {
                $(this).css({'background-image': 'url(' + greenForestSprite + ')'});
            }
            if ($(this).css('background-image') == 'url(https://fbstatic-a.akamaihd.net/rsrc.php/v2/yY/r/bjXM1WQM67C.png)'
                || $(this).css('background-image') == 'url('+ purpleLifeSprite2 +')' ||  $(this).css('background-image') == 'url('+ redBloodSprite2 +')'
                ||  $(this).css('background-image') == 'url('+ goldSprite2 +')') {
                $(this).css({'background-image': 'url(' + greenForestSprite2 + ')'});
            }

        });
        navigationBar.css({'background' : '#007730'}); //navigation bar
        fullTheme.css({'background-color' : '#00B74A'}); // main container
        fontColorNavBar.css({'color' : '#63DB93'});
        homeNotifAvailable.css({'background': '#00B74A'});
        topLeftMenu.css({'color': 'white'});
        contentLeftMenu.css({'color': 'white'});
        nbNotifLeftMenu.css({'color': 'black'});
        titleLeftMenu.css({'color':'#007730'});
        removeItemLS();
        localStorage['theme'] = 'green';

    }

    if (color == 'red'){
        $('a._55ln').on('click', function(){
            setTimeout(function(){
                $( "*" ).each(function( index ) {

                    if ($(this).hasClass('fbNubFlyoutTitlebar')) {
                        $(this).css({'background': '#D90707', 'border': '1px solid #FF7373'});
                    }
                });

            },1);

        });
        $('._3v_l').on('click', function(){
            setTimeout(function(){
                $( "*" ).each(function( index ) {

                    if ($(this).hasClass('fbNubFlyoutTitlebar')) {
                        $(this).css({'background': '#D90707', 'border': '1px solid #FF7373'});
                    }
                });

            },1);
        });
        $( "*" ).each(function( index ) {
            if ($(this).hasClass('fbNubFlyoutTitlebar')) {
                $(this).css({'background': '#D90707', 'border': '1px solid #FF7373'});
            }
            if ($(this).css('background-image') == 'url(https://fbstatic-a.akamaihd.net/rsrc.php/v2/ys/r/y92sOHsDDYv.png)'
                || $(this).css('background-image') == 'url('+ purpleLifeSprite +')' ||  $(this).css('background-image') == 'url('+ greenForestSprite +')'
                ||  $(this).css('background-image') == 'url('+ goldSprite +')') {
                    $(this).css({'background-image': 'url(' + redBloodSprite + ')'});
            }
            if ($(this).css('background-image') == 'url(https://fbstatic-a.akamaihd.net/rsrc.php/v2/yY/r/bjXM1WQM67C.png)'
                || $(this).css('background-image') == 'url('+ purpleLifeSprite2 +')' ||  $(this).css('background-image') == 'url('+ greenForestSprite2 +')'
                ||  $(this).css('background-image') == 'url('+ goldSprite2 +')') {

                    $(this).css({'background-image': 'url(' + redBloodSprite2 + ')'});
            }

        });
        navigationBar.css({'background': '#D90707'}); //navigation bar
        fullTheme.css({'background-color': '#FF7373'}); // main container
        fontColorNavBar.css({'color': '#FF7373'}); //color font nav bar
        //   headerIco.css({'background-image': 'url(' + redBloodSprite + ')'});
        homeNotifAvailable.css({'background': '#FF7373'});
        topLeftMenu.css({'color': 'white'});
        contentLeftMenu.css({'color': 'white'});
        nbNotifLeftMenu.css({'color': 'black'});
        titleLeftMenu.css({'color':'#A60000'});
        removeItemLS();
        localStorage['theme'] = 'red';
    }

    if (color == 'purple'){
        $('a._55ln').on('click', function(){
            setTimeout(function(){
                $( "*" ).each(function( index ) {

                    if ($(this).hasClass('fbNubFlyoutTitlebar')) {
                        $(this).css({'background': '#270672', 'border': '1px solid #8D6DD7'});
                    }
                });

            },1);

        });
        $('._3v_l').on('click', function(){
            setTimeout(function(){
                $( "*" ).each(function( index ) {

                    if ($(this).hasClass('fbNubFlyoutTitlebar')) {
                        $(this).css({'background': '#270672', 'border': '1px solid #8D6DD7'});
                    }
                });

            },1);
        });
        $( "*" ).each(function( index ) {
            if ($(this).hasClass('fbNubFlyoutTitlebar')) {
                $(this).css({'background': '#270672', 'border': '1px solid #8D6DD7'});
            }
            if ($(this).css('background-image') == 'url(https://fbstatic-a.akamaihd.net/rsrc.php/v2/ys/r/y92sOHsDDYv.png)'
                || $(this).css('background-image') == 'url('+ goldSprite +')' ||  $(this).css('background-image') == 'url('+ greenForestSprite +')'
                ||  $(this).css('background-image') == 'url('+ redBloodSprite +')') {
                $(this).css({'background-image': 'url(' + purpleLifeSprite + ')'});
            }
            if ($(this).css('background-image') == 'url(https://fbstatic-a.akamaihd.net/rsrc.php/v2/yY/r/bjXM1WQM67C.png)'
                || $(this).css('background-image') == 'url('+ goldSprite2 +')' ||  $(this).css('background-image') == 'url('+ greenForestSprite2 +')'
                ||  $(this).css('background-image') == 'url('+ redBloodSprite2 +')') {
                $(this).css({'background-image': 'url(' + purpleLifeSprite2 + ')'});
            }

        });
        navigationBar.css({'background' : '#270672'}); //navigation bar
        fullTheme.css({'background-color' : '#8D6DD7'}); // main container
        fontColorNavBar.css({'color' : '#7247D7'}); //color font nav bar
        homeNotifAvailable.css({'background': '#8D6DD7'});
        topLeftMenu.css({'color': 'white'});
        contentLeftMenu.css({'color': 'white'});
        nbNotifLeftMenu.css({'color': 'black'});
        titleLeftMenu.css({'color':'#270672'});
        removeItemLS();
        localStorage['theme'] = 'purple';
    }

    if (color == 'gold'){
        $('a._55ln').on('click', function(){
            setTimeout(function(){
                $( "*" ).each(function( index ) {

                    if ($(this).hasClass('fbNubFlyoutTitlebar')) {
                        $(this).css({'background': '#BF8F30', 'border': '1px solid #FFAA00'});
                    }
                });

            },1);

        });
        $('._3v_l').on('click', function(){
            setTimeout(function(){
                $( "*" ).each(function( index ) {

                    if ($(this).hasClass('fbNubFlyoutTitlebar')) {
                        $(this).css({'background': '#BF8F30', 'border': '1px solid #FFAA00'});
                    }
                });

            },1);
        });

        $( "*" ).each(function( index ) {

            if ($(this).hasClass('fbNubFlyoutTitlebar')){
                $(this).css({ 'background' : '#BF8F30','border':'1px solid #FFAA00'});
            }

            if ($(this).css('background-image') == 'url(https://fbstatic-a.akamaihd.net/rsrc.php/v2/ys/r/y92sOHsDDYv.png)'
                || $(this).css('background-image') == 'url('+ purpleLifeSprite +')' ||  $(this).css('background-image') == 'url('+ greenForestSprite +')'
                ||  $(this).css('background-image') == 'url('+ redBloodSprite +')') {
                $(this).css({'background-image': 'url(' + goldSprite + ')'});
            }
            if ($(this).css('background-image') == 'url(https://fbstatic-a.akamaihd.net/rsrc.php/v2/yY/r/bjXM1WQM67C.png)'
                || $(this).css('background-image') == 'url('+ purpleLifeSprite2 +')' ||  $(this).css('background-image') == 'url('+ greenForestSprite2 +')'
                ||  $(this).css('background-image') == 'url('+ redBloodSprite2 +')') {
                $(this).css({'background-image': 'url(' + goldSprite2 + ')'});
            }

        });
        navigationBar.css({'background' : '#BF8F30'}); //navigation bar
        fullTheme.css({'background-color' : '#FFAA00'}); // main container
        fontColorNavBar.css({'color' : '#FFD073'});
        homeNotifAvailable.css({'background': '#FFD073'});
        topLeftMenu.css({'color': 'white'});
        contentLeftMenu.css({'color': 'white'});
        nbNotifLeftMenu.css({'color': 'black'});
        titleLeftMenu.css({'color':'#A66F00'});
        removeItemLS();
        localStorage['theme'] = 'gold';
    }

}


function changeIcons(color){
    if (color === 'green'){
        $( "*" ).each(function( index ) {
            if ($(this).css('background-image') == 'url(https://fbstatic-a.akamaihd.net/rsrc.php/v2/ys/r/y92sOHsDDYv.png)'
                || $(this).css('background-image') == 'url('+ purpleLifeSprite +')' ||  $(this).css('background-image') == 'url('+ redBloodSprite +')'
                ||  $(this).css('background-image') == 'url('+ goldSprite +')') {
                $(this).css({'background-image': 'url(' + greenForestSprite + ')'});
            }
            if ($(this).css('background-image') == 'url(https://fbstatic-a.akamaihd.net/rsrc.php/v2/yK/r/s_xQA9txOOz.png)'
                || $(this).css('background-image') == 'url('+ purpleLifeSprite2 +')' ||  $(this).css('background-image') == 'url('+ redBloodSprite2 +')'
                ||  $(this).css('background-image') == 'url('+ goldSprite2 +')') {
                $(this).css({'background-image': 'url(' + greenForestSprite2 + ')'});
            }

        });
        localStorage['icons'] = 'green';
    }

    if (color=== 'purple'){
        $( "*" ).each(function( index ) {
            if ($(this).css('background-image') == 'url(https://fbstatic-a.akamaihd.net/rsrc.php/v2/yq/r/7lRgXhS3Alc.png)'
                || $(this).css('background-image') == 'url('+ goldSprite +')' ||  $(this).css('background-image') == 'url('+ greenForestSprite +')'
                ||  $(this).css('background-image') == 'url('+ redBloodSprite +')') {
                $(this).css({'background-image': 'url(' + purpleLifeSprite + ')'});
            }
            if ($(this).css('background-image') == 'url(https://fbstatic-a.akamaihd.net/rsrc.php/v2/yK/r/s_xQA9txOOz.png)'
                || $(this).css('background-image') == 'url('+ goldSprite2 +')' ||  $(this).css('background-image') == 'url('+ greenForestSprite2 +')'
                ||  $(this).css('background-image') == 'url('+ redBloodSprite2 +')') {
                $(this).css({'background-image': 'url(' + purpleLifeSprite2 + ')'});
            }

        });
        localStorage['icons'] = 'purple';
    }

    if (color === 'red'){
        $( "*" ).each(function( index ) {
            if ($(this).css('background-image') == 'url(https://fbstatic-a.akamaihd.net/rsrc.php/v2/ys/r/y92sOHsDDYv.png)'
                || $(this).css('background-image') == 'url('+ purpleLifeSprite +')' ||  $(this).css('background-image') == 'url('+ greenForestSprite +')'
                ||  $(this).css('background-image') == 'url('+ goldSprite +')') {
                $(this).css({'background-image': 'url(' + redBloodSprite + ')'});
            }
            if ($(this).css('background-image') == 'url(https://fbstatic-a.akamaihd.net/rsrc.php/v2/yK/r/s_xQA9txOOz.png)'
                || $(this).css('background-image') == 'url('+ purpleLifeSprite2 +')' ||  $(this).css('background-image') == 'url('+ greenForestSprite2 +')'
                ||  $(this).css('background-image') == 'url('+ goldSprite2 +')') {
                $(this).css({'background-image': 'url(' + redBloodSprite2 + ')'});
            }

        });
        localStorage['icons'] = 'red';
    }

    if(color === 'gold'){
        $( "*" ).each(function( index ) {

            if ($(this).css('background-image') == 'url(https://fbstatic-a.akamaihd.net/rsrc.php/v2/ys/r/y92sOHsDDYv.png)'
                || $(this).css('background-image') == 'url('+ purpleLifeSprite +')' ||  $(this).css('background-image') == 'url('+ greenForestSprite +')'
                ||  $(this).css('background-image') == 'url('+ redBloodSprite +')') {
                $(this).css({'background-image': 'url(' + goldSprite + ')'});
            }
            if ($(this).css('background-image') == 'url(https://fbstatic-a.akamaihd.net/rsrc.php/v2/yK/r/s_xQA9txOOz.png)'
                || $(this).css('background-image') == 'url('+ purpleLifeSprite2 +')' ||  $(this).css('background-image') == 'url('+ greenForestSprite2 +')'
                ||  $(this).css('background-image') == 'url('+ redBloodSprite2 +')') {
                $(this).css({'background-image': 'url(' + goldSprite2 + ')'});
            }

        });
        localStorage['icons'] = 'gold';

    }

}

function removeItemLS(){
    localStorage.removeItem('bgcol');
    localStorage.removeItem('navbar');
    localStorage.removeItem('icons');

}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        if( request.message === "clicked_browser_action" ) {
            navigationBar.css({'background' : '#FFFF99'}); //navigation bar
            fullTheme.css({'background-color' : '#A0A0A0'}); // main container
            fontColorNavBar.css({'color' : 'black'}); //color font nav bar
            headerIco.css({'background-image': 'url(http://img11.hostingpics.net/pics/622712testfb.png)'}); //CHANGE HEADER ICO
        }

        if (request.action === "CHANGE_THEME") {
                changeTheme(request.colorCode);

        }

        if (request.action === 'CHANGE_ICONS') {
            changeIcons(request.colorCode);
        }

        if (request.action === 'CHANGE_NAVBAR') {
            colorCode = '#' + request.colorCode;
            changeNavBar(colorCode);
        }

        if (request.action === 'CHANGE_BGCOL') {
            colorCode = '#' + request.colorCode;
            changeBgCol(colorCode);

        }

    }
);