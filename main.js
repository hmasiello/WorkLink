//$.ready makes sure DOM is loaded before anything happens 
$( document ).ready(function(){




}



<div class="form"> 
				<form action="/my-handling-form-page" method="post">
			    <div>
			        <label for="name">Name:</label><br>
			        <input type="text" id="name" placeholder="First and last name"/>
			    </div>
			    <div>
			        <label for="mail">Email:</label><br>
			        <input type="email" id="mail" placeholder="Your email address"/>
			    </div>
			    <div>
			        <label for="msg">Message:</label><br>
			        <textarea id="msg" placeholder="Your message"></textarea>
			    </div>
			    <div> 
			    	<label for="antispam">What is 2+2?</label><br>
			    	<input type="number" id="antispam" placeholder="Answer" />
				<div>
        			<button type="submit" class="button">Send message</button>
    			</div>
			</form>