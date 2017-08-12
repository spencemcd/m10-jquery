/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */
$(function(){
	$('button').click(function() {
		var select = $('#selector').val();
		var content = $('#newContent').val();

		switch($(this).attr('id')){
			case 'change-content':
				$(select).html(content);
				break;
			case 'add-at-end':
				$(select).append(content);
				break;
			case 'add-at-start':
				$(select).prepend(content);
				break;
			case 'insert-before':
				$(select).before(content);
				break;
			case 'move-after':
				$(select).insertAfter(content);
				break;
			case 'surround-class':
				$(select).wrap('<div class="' + content + '"></div>');
				break;
			case 'hide-text':
				$(select).each(function(){
					if($(this).text().length > 12){
						$(this).wrap('<div class="hidden"></div>');
					}
				});
				break;
			case 'remove-word':
				$(select + ":contains('" + content + "')").remove();
				break;
			default:
				break;

		}
	});

});
