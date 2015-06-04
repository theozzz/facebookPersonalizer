//alert("Hello from your Chrome extension!")
 
 
 chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      //var firstHref = $("a[href^='http']").eq(0).attr("href");
      alert('you clicked');
      $('#blueBarNAXAnchor').css({'background' : '#FFFF99'}); //navigation bar
      $('._5vb_, #contentCol').css({'background-color' : '#A0A0A0'}); // main container
      $('._1ayn').css({'color' : 'black'}); //color font nav bar
      $(".jewelButton").css({'background-image': 'url(http://img11.hostingpics.net/pics/622712testfb.png)'}); //CHANGE HEADER ICO
      //$('._5vb_').css({'background-color': 'red'}); //side of  the main container
      //$('#contentCol').css({'background-color': 'red'}); //middle of the main container
    }
  }
);