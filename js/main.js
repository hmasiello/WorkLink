//$.ready makes sure DOM is loaded before anything happens 
$( document ).ready(function(){

	//event prevent default 
	$('.form').submit(function(event) {
	  event.preventDefault();
	});

	//validate 
	jQuery.validator.setDefaults({
  	debug: true,
  	success: "valid"
	});
	$('#theform').validate({
		rules: {
			'name': {
				required: true,
				minlength: 4
			}
		}
	})

	//answer to #antispam
	$

})

