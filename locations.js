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
  
 
  // current day value for loading correct day into page.
var today = new Date();
var todaysDay = today.getUTCDay();
  
  // loading current date
   var todaysDateLoad = $("<p></p>").text(" " + today);   
  $('.visible-location').append(todaysDateLoad);
  
  
 if(todaysDay === 0){
   $(".map-container").load('html/weekdays/sunday.html');
 }else if (todaysDay===1) {
   $(".map-container").load('html/weekdays/monday.html');
 }else if (todaysDay ===2){
   $(".map-container").load('html/weekdays/tuesday.html');
 }else if (todaysDay===3) {
   $(".map-container").load('html/weekdays/wednesday.html');
 }else if (todaysDay===4) {
   $(".map-container").load('html/weekdays/thursday.html');
 }else if (todaysDay===5) {
   $(".map-container").load('html/weekdays/friday.html');
 }else{
   $(".map-container").load('html/weekdays/saturday.html');
 }
         



 
     
    
    $("#datepicker").on("change",function(){
     var selected = $('input').val();        
    var selectedDay =  new Date(selected);
    var selectedWeekDay = selectedDay.getUTCDay(); 
      
            
    if(selectedWeekDay === 0){
   $(".map-container").load('html/weekdays/sunday.html');
 }else if (selectedWeekDay===1) {
   $(".map-container").load('html/weekdays/monday.html');
 }else if (selectedWeekDay ===2){
   $(".map-container").load('html/weekdays/tuesday.html');
 }else if (selectedWeekDay===3) {
   $(".map-container").load('html/weekdays/wednesday.html');
 }else if (selectedWeekDay===4) {
   $(".map-container").load('html/weekdays/thursday.html');
 }else if (selectedWeekDay===5) {
   $(".map-container").load('html/weekdays/friday.html');
 }else{
   $(".map-container").load('html/weekdays/saturday.html');
 }
    });

  
}); //close document ready


    






  
  


