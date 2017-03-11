$(document).ready(function(){
  
//------------------------carousel sizing and loading-----------------  
  
  
  
  // checking the intial window size to figure out if the carousel needs to be loaded
  // and if the sub nav bar needs to be hidden
 if (window.matchMedia('(min-width: 991px)').matches)  {
         
    // do functionality on screens larger than 768px
      $(".carousel-container").load('html/carousel.html');  
    

        }else {
          
     
          
        } //close if match media
  
  
  
  // here I am checking for any resizing of the window
 $( window ).resize(function() {
   
       if (window.matchMedia('(min-width: 991px)').matches)  {
         
    // do functionality on screens smaller than 768px
       $(".carousel-container").load('html/carousel.html');

        } else {          
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

  
  var monthsOfYear= ['January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'];
    
  var dayOfWeek = [
        'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
      ];

// get todays date   
  
var today = new Date();
var todaysDay = today.getDay();
 var todaysDayName= dayOfWeek[todaysDay];

var todaysMonth = monthsOfYear[today.getMonth()];

  var todaysYear= today.getFullYear();
  
  var todaysDateNumber= today.getDate();


  // loading current date
  var dateLoadHeader = $("<h3 class='col-xs-6'></h3>").text("Current showing date:");   
  var todaysDateLoad = $('<h3 class="col-xs-6 text-left"></h3>').text(todaysDayName+" "+todaysMonth+" "+todaysDateNumber+" "+todaysYear);
  
  // append todays date
                          
  $('.visible-location').append(dateLoadHeader);                      
  $('.visible-location').append(todaysDateLoad);

 
     // changing datepicker changes html content
    
    $("#datepicker").on("change",function(){
     var selected = $('input').val();  
    
      // this part is for the selected date
      
      var selectedDay =  new Date(selected);
      
      var day =(selectedDay.getUTCDate());
 
      var month=(selectedDay.getUTCMonth());

      var year = (selectedDay.getUTCFullYear());

     
      
      
      var selectedWeekDay = selectedDay.getUTCDay(); 
      
      var selectedWeekDayName = dayOfWeek[selectedWeekDay];
      console.log(selectedWeekDayName);
      
      var selectedMonth = monthsOfYear[month];
      console.log(selectedMonth);
      
      // write out selected date
   var selectedDateLoad = $('<h3 class="col-xs-6 text-left"></h3>').text(selectedWeekDayName+" "+selectedMonth+" "+day+" "+year);
     
     // empty out locations divs
      
  $('.visible-location').empty()    
     
  // checking day of week
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
     
     // loading new content                     
  $('.visible-location').append(dateLoadHeader);                      
  $('.visible-location').append(selectedDateLoad);     
  
    });

  
 // on load the current date is automatically loaded 
  
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
 }else if (todaysDay===6) {
   $(".map-container").load('html/weekdays/saturday.html');
 }
         

   
  
 
  
}); //close document ready


    




  
  


