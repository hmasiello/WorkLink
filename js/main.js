//$.ready makes sure DOM is loaded before anything happens 
$( document ).ready(function(){


	//event prevent default 
	$('#theform').submit(function(e) {
	  e.preventDefault();
	
	//CONTACT US PAGE 
	//validate & answer to antispam 

		//name 
		var nameElement = $('#name');
		var nameValue = nameElement.val();

		if ( nameValue == '') {
			alert('Please enter a name');
			return; 
		}

		//email
		var emailElement = $('#email');
		var emailValue = emailElement.val();

		if ( emailValue == '') {
			alert ('Please enter an email address');
			return; 
		}

		//message 
		var messageElement = $('#msg');
		var messageValue = messageElement.val()

		if (messageValue == '') {
			alert ('Please enter a message');
			return;
		}

		//antispam 
		var antispamElement = $('#antispam');
		var antispamValue = antispamElement.val()

		if (antispamValue != '4'){ 
			alert ('Try again!');
			return;
		}
	
		//successful submit 
		alert ('Thanks for submitting the form, someone will be in touch with you soon!')


	//SUCCESS STORIES 
	//slider show more show less

		var readMore = $('.readmore a')
		var paragraphHide = $('p.hide')
		var readLess = $('.readless')

		$('readMore').click(function() {
			$('paragraphHide').slideDown();
			$('readMore').hide();
		});

		$('readLess').click(function() {
			$('paragraphHide').slideUp();
			$('readMore').show();	
		})

	});

})

