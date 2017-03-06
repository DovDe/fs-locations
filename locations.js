$(document).ready(function(){
  
  // checking the intial window size to figure out if the carousel needs to be loaded
  // and if the sub nav bar needs to be hidden
 if (window.matchMedia('(min-width: 769px)').matches)  {
         
    // do functionality on screens larger than 768px
      $(".carousel-container").load('html/carousel.html');  
         
        }else {
          
       $('.subnav').hide();
          
        }
  
  
  
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
            
          }
        }
  
}); 
  
  
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
  
var iFrame = $('#googleCal').contents().find("html");
var xFrame = iFrame.children().html();
console.log(iFrame);
  console.log(xFrame);
  

//   $.ajax({
// 		url: $("iframe#googleCal").attr("src"),
// 		type: 'GET',
// 		dataType: 'html'
// 	}).done(function(html) {
// 		console.log("PART 2:: ");
// 		console.log(html);
// 	});
  
  
  var $iFrameContents = $('iframe').contents(),
    $entryContent   = $iFrameContents.find('div.entry-content');
         
$iFrameContents.find('html').replaceWith($entryContent);
});


    






  
  


