// 1. when we click an image, show the lightbox
// 2. we want to grab the image that's just being clicked, and show it inside the modal
// 3. when we click the close button, hide the modal
// 4. our link doesn't follow the default href
 

$('.photos a').on("click", function() {
  
  var currentImage = $(this).html() 
  
  // here we grab the modal and set it to our 
  // clicked image
  $('.modal-content').html(currentImage)
  
  $('.modal').fadeIn(500)
  
  // block the default action of following the href attribute
  return false
})


$('.modal-close, .modal-background').on('click', function(){
    $('.modal').fadeOut(500)
    return false
})