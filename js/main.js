//$.ready makes sure DOM is loaded before anything happens 
$( document ).ready(function(){

	//CONTACT US PAGE
	//event prevent default 
	$('#theform').submit(function(e) {
	  e.preventDefault();
	
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

	});

	//SUCCESS STORIES 
		//slider show more show less

		//JULIO
		$('.readmoreJulio a').click(function(e) {
		$('p.hideJulio').slideDown();
		e.preventDefault();
		$('.readmoreJulio a').hide();
		});

		$('.readlessJulio').click(function(e) {
		$('p.hideJulio').slideUp();
		e.preventDefault();
		$('.readlessJulio').hide();	
		$('.readmoreJulio a').show();
		});


		//ANN
		$('.readmoreAnn a').click(function(e) {
		$('p.hideAnn').slideDown();
		e.preventDefault();
		$('.readmoreAnn a').hide();
		});

		$('.readlessAnn').click(function(e) {
		$('p.hideAnn').slideUp();
		e.preventDefault();
		$('.readlessAnn').hide();	
		$('.readmoreAnn a').show();
		});

		//SAM
		$('.readmoreSam a').click(function(e) {
		$('p.hideSam').slideDown();
		e.preventDefault();
		$('.readmoreSam a').hide();
		});

		$('.readlessSam').click(function(e) {
		$('p.hideSam').slideUp();
		e.preventDefault();
		$('.readlessSam').hide();	
		$('.readmoreSam a').show();
		});

		//var readMore = $('.readmore a')
		//var paragraphHide = $('p.hide')
		//var readLess = $('.readless')

		//$(readMore).click(function(e) {
		//$(paragraphHide).slideDown();
		//e.preventDefault();
		//$(this).hide();
		//});

		//$(readLess).click(function(e) {
		//$(paragraphHide).slideUp();
		//e.preventDefault();
		//$(this).hide();	
		//});

})

