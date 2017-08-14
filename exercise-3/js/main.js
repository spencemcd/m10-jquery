// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html File
$(function() {
  // Select all <p> elements and assign a click event that removes the clicked element (recall `this`)
  $('p').click(function(){
	  $(this).remove();
  });
  // Select the <circle>, and when it's clicked, turn it red
  // Each time the <circle> is clicked, change its radius from 10 to 40	
  $('circle').click(function(){
	$(this).attr('style','fill:red');
	if($(this).attr('r') == 40){
		$(this).attr('r', 10);
	} else {
		$(this).attr('r', 40);
	}
  });
  
  // Assign a mouseenter event to the <rect> element that makes it have an opacity of .5
  $('rect').mouseenter(function(){
	  $(this).attr('opacity', .5);
  });
  // Assign a mouseleave event to the <rect> element that makes it have an opacity of 1
  $('rect').mouseleave(function(){
	$(this).attr('opacity', 1);
  });
});
