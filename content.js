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
var fontColorNavBar = $('._1ayn');
var headerIco = $(".jewelButton");

//Sprite declaration
var darkGraySprite = 'http://img11.hostingpics.net/pics/829430graysprite.png';
var purpleLifeSprite = 'http://img11.hostingpics.net/pics/951911purpleoriginsprite.png';
var greenForestSprite = 'http://img11.hostingpics.net/pics/786227greenoriginsprite.png';
var redBloodSprite = 'http://img11.hostingpics.net/pics/687192redoriginsprite.png';


chrome.runtime.onMessage.addListener(

    function(request, sender, sendResponse) {
        console.log(request.action);
        if( request.message === "clicked_browser_action" ) {
            navigationBar.css({'background' : '#FFFF99'}); //navigation bar
            fullTheme.css({'background-color' : '#A0A0A0'}); // main container
            fontColorNavBar.css({'color' : 'black'}); //color font nav bar
            headerIco.css({'background-image': 'url(http://img11.hostingpics.net/pics/622712testfb.png)'}); //CHANGE HEADER ICO
        }

        if (request.action === "CHANGE_THEME") {
            if (request.colorCode === 'green'){
                navigationBar.css({'background' : 'OliveDrab'}); //navigation bar
                fullTheme.css({'background-color' : 'greenyellow'}); // main container
                fontColorNavBar.css({'color' : 'black'});
                headerIco.css({'background-image': 'url(' + greenForestSprite + ')'});
            }

            if (request.colorCode === 'red'){
                navigationBar.css({'background' : 'red'}); //navigation bar
                fullTheme.css({'background-color' : 'firebrick'}); // main container
                fontColorNavBar.css({'color' : 'black'}); //color font nav bar
                headerIco.css({'background-image': 'url(' + redBloodSprite + ')'});
            }
            if (request.colorCode === 'gray'){
                navigationBar.css({'background' : '#FFFF99'}); //navigation bar
                fullTheme.css({'background-color' : '#A0A0A0'}); // main container
                fontColorNavBar.css({'color' : 'black'}); //color font nav bar
                headerIco.css({'background-image': 'url(' + darkGraySprite + ')'});
            }

            if (request.colorCode === 'purple'){
                navigationBar.css({'background' : '#FFFF99'}); //navigation bar
                fullTheme.css({'background-color' : '#A0A0A0'}); // main container
                fontColorNavBar.css({'color' : 'black'}); //color font nav bar
                headerIco.css({'background-image': 'url(' + purpleLifeSprite + ')'});
            }
        }

        if (request.action === 'CHANGE_ICONS') {
            if (request.colorCode === 'green'){
                headerIco.css({'background-image': 'url(' + greenForestSprite + ')'});
            }
            if (request.colorCode === 'purple'){
                headerIco.css({'background-image': 'url(' + purpleLifeSprite + ')'});
            }
            if (request.colorCode === 'red'){
                headerIco.css({'background-image': 'url(' + redBloodSprite + ')'});
            }
            if (request.colorCode === 'darkGray'){
                headerIco.css({'background-image': 'url(' + darkGraySprite + ')'});
            }
        }


        if (request.action === 'CHANGE_NAVBAR') {
            if (request.colorCode === 'green'){
                navigationBar.css({'background' : '#FFFF99'}); //navigation bar
            }
            if (request.colorCode === 'purple'){
                navigationBar.css({'background' : '#FFFF99'}); //navigation bar
            }
            if (request.colorCode === 'red'){
                navigationBar.css({'background' : '#FFFF99'}); //navigation bar
            }
            if (request.colorCode === 'darkGray'){
                navigationBar.css({'background' : '#A9A9A9'}); //navigation bar
            }
        }

        if( request.action === "COLOR_PAGE" ) {

        navigationBar.css({'background' : '#FFFF99'}); //navigation bar
        fullTheme.css({'background-color' : '#A0A0A0'}); // main container
        fontColorNavBar.css({'color' : 'black'}); //color font nav bar
        headerIco.css({'background-image': 'url(http://img11.hostingpics.net/pics/622712testfb.png)'}); //CHANGE HEADER ICO
        //$('._5vb_').css({'background-color': 'red'}); //side of  the main container
        //$('#contentCol').css({'background-color': 'red'}); //middle of the main container
        }
    }
);