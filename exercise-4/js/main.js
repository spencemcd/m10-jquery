// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html File
$(function() {
  // Animate your div with id my-div to these new set of properties:
      // height of 300
      // width of 500
      // opacity of .5
// When the transition finishes, fade out your paragraphs and your circle.
	$('#my-div').animate({
		height: '300',
		width: '500',
		opacity: '.5'
	}, 1500, function() {
		$('p').fadeOut(500);
		$('circle').fadeOut(500);
	});
  

});
