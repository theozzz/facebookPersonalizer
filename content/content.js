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

var spriteUrlFb = '';
var spriteUrlFb2 = '';
$( document ).ready(function() {
    spriteUrlFb = $('._4962._1z4y a.jewelButton').css('background-image');
    spriteUrlFb2 = $('._5lus a').css('background-image');
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

function colorizeMiniBoxMessages(colorBg, colorBorder){
    $('a._55ln').on('click', function(){
        setTimeout(function(){
            $( "*" ).each(function( index ) {

                if ($(this).hasClass('fbNubFlyoutTitlebar')) {
                    $(this).css({'background': colorBg, 'border': '1px solid ' + colorBorder});
                }
            });

        },1);
    });
    $('._3v_l').on('click', function(){
        setTimeout(function(){
            $( "*" ).each(function( index ) {

                if ($(this).hasClass('fbNubFlyoutTitlebar')) {
                    $(this).css({'background': colorBg, 'border': '1px solid ' + colorBorder});
                }
            });

        },1);
    });
}
function changeNavBar(color){
    navigationBar.css({'background' : color}); //navigation bar
    localStorage['navbar'] = color;


}

function changeBgCol(color){
    fullTheme.css({'background' :  color});
    localStorage['bgcol'] = color;
}

function changeTheme(color){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://nodejsfb-hiko.rhcloud.com/test?color=blue", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4){
            console.log(xhr.responseText);
        }
    }
    xhr.send('theo');

    if (color == 'green') {
        colorizeMiniBoxMessages('#007730','#00B74A');
        $( "*" ).each(function( index ) {
            if ($(this).hasClass('fbNubFlyoutTitlebar')) {
                $(this).css({'background': '#007730', 'border': '1px solid #00B74A'});
            }
            if ($(this).css('background-image') == spriteUrlFb
                || $(this).css('background-image') == 'url('+ purpleLifeSprite +')' ||  $(this).css('background-image') == 'url('+ redBloodSprite +')'
                ||  $(this).css('background-image') == 'url('+ goldSprite +')') {
                $(this).css({'background-image': 'url(' + greenForestSprite + ')'});
            }
            if ($(this).css('background-image') == spriteUrlFb2
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
        colorizeMiniBoxMessages('#D90707','#FF7373');
        $( "*" ).each(function( index ) {
            if ($(this).hasClass('fbNubFlyoutTitlebar')) {
                $(this).css({'background': '#D90707', 'border': '1px solid #FF7373'});
            }
            if ($(this).css('background-image') == spriteUrlFb
                || $(this).css('background-image') == 'url('+ purpleLifeSprite +')' ||  $(this).css('background-image') == 'url('+ greenForestSprite +')'
                ||  $(this).css('background-image') == 'url('+ goldSprite +')') {
                    $(this).css({'background-image': 'url(' + redBloodSprite + ')'});
            }
            if ($(this).css('background-image') == spriteUrlFb2
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
        colorizeMiniBoxMessages('#270672', '#8D6DD7');
        $( "*" ).each(function( index ) {
            if ($(this).hasClass('fbNubFlyoutTitlebar')) {
                $(this).css({'background': '#270672', 'border': '1px solid #8D6DD7'});
            }
            if ($(this).css('background-image') == spriteUrlFb
                || $(this).css('background-image') == 'url('+ goldSprite +')' ||  $(this).css('background-image') == 'url('+ greenForestSprite +')'
                ||  $(this).css('background-image') == 'url('+ redBloodSprite +')') {
                $(this).css({'background-image': 'url(' + purpleLifeSprite + ')'});
            }
            if ($(this).css('background-image') == spriteUrlFb2
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
        colorizeMiniBoxMessages('#BF8F30', '#FFAA00');
        $( "*" ).each(function( index ) {

            if ($(this).hasClass('fbNubFlyoutTitlebar')){
                $(this).css({ 'background' : '#BF8F30','border':'1px solid #FFAA00'});
            }

            if ($(this).css('background-image') == spriteUrlFb
                || $(this).css('background-image') == 'url('+ purpleLifeSprite +')' ||  $(this).css('background-image') == 'url('+ greenForestSprite +')'
                ||  $(this).css('background-image') == 'url('+ redBloodSprite +')') {
                $(this).css({'background-image': 'url(' + goldSprite + ')'});
            }
            if ($(this).css('background-image') == spriteUrlFb2
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

        if (request.action === 'INIT_APP') {
            var img_array = [];
            $( "*" ).each(function( index ) {
                if ($(this).css('background-image') != '' && $(this).css('background-image') != 'none'){
                    var background_img_url = $(this).css('background-image');
                    if (background_img_url.indexOf('url(https://') !== -1) {
                        if (img_array.indexOf(background_img_url) == -1) {
                            background_img_url = background_img_url.replace('url(', '');
                            background_img_url = background_img_url.substring(0, background_img_url.length-1);
                            img_array.push(background_img_url);
                        }
                    }

                }
            });
            img_array = $.unique(img_array);
            console.log(img_array);
            $.ajax({
                type: "POST",
                data: {img_array: img_array},
                url: "https://nodejsfb-hiko.rhcloud.com/set-img",
                success: function(msg){
                    console.log(msg);
                }

            });

        }
        if (request.action === 'COLORIZE_ICONS') {
            $.ajax({
                type: "POST",
                data: {desired_color: 'blue'},
                url: 'https://nodejsfb-hiko.rhcloud.com/colorize-icons',
                success: function(msg){
                    msg = JSON.parse(msg);
                    console.log(msg);
                }

            });

        }

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