$(document).ready(function(){
  
//------------------------carousel and subnav sizing and loading-----------------  
  
  // checking the intial window size to figure out if the carousel needs to be loaded
  // and if the sub nav bar needs to be hidden
 if (window.matchMedia('(min-width: 769px)').matches)  {
         
    // do functionality on screens larger than 768px
      $(".carousel-container").load('html/carousel.html');  
         
        }else {
          
       $('.subnav').hide();
          
        } //close if match media
  
  
  
  // here I am checking for any resizing of the window
 $( window ).resize(function() {
   
       if (window.matchMedia('(min-width: 769px)').matches)  {
         
    // do functionality on screens smaller than 768px
       $(".carousel-container").load('html/carousel.html');
             $('.subnav').show();    
        
        } else {
         $('.subnav').hide(); 
          
          if ($(".carousel-container")) {
           $("#myCarousel").remove(); 
            
          } //close inner if
        }   //close else
   
   
}); // close resize function
  
  
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^end carousel and subnav sizing and loading^^^^^^^^^^^^^^^^^^^^^^^  
  
// ---------this section is code for the google calendar API for the futer it works but needs a lot of refining----------------  
//  formatGoogleCalendar.init({
//   calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/206falafel@gmail.com/events?key=AIzaSyA53EZSYkkFTgtuMmazeqJo1Jco8MiV4YQ',
//   past: false,
//   upcoming: true,
//   pastTopN: -1,
//   upcomingTopN: 1000,
//   recurringEvents: true,
//   itemsTagName: 'li',
//   upcomingSelector: '#events-upcoming',
//   pastSelector: '#events-past',
//   upcomingHeading: '<h2>Upcoming events</h2>',
//   pastHeading: '<h2>Past events</h2>',
//   format: ['*date*', ': ', '*summary*', ' — ', '*description*', ' in ', '*location*']
// }); 

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^end of future google calendar code^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  
  //--------------------- load locations code----------------------------------
  
         $(".map-container").load('html/location-info.html');

  
  
}); //close document ready


    






  
  


