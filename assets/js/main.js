
 
 
 // function for the anchor for possible downward page jump tab to animate down to the connect form
// not sure why it is throwing errors the funciton is working as intended
 $(document).ready(function){
    $("a.scrollLink").click(function(event){
      event.preventDefault();
      $("html.body").animate({scrollTop: $($(this).
        attr("href")).offset().top}, 500);
    })
  }