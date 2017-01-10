    $(document).ready(function(){
        
		var pull = $('#pull');
        menu = $('nav ul');

		$(pull).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});
		
		$(window).resize(function(){
			var w = $(this).width();

			if(w > 800 && menu.is(':hidden')) {
				menu.removeAttr('style');
			}
		});

		$('li').on('click', function(e) {				
			var w = $(window).width();
			if(w < 800 ) {
				menu.slideToggle();
			}
		});

		$('.panel').height($(window).height());  
        
    });
    
    function contactform(){
    var myForm  = document.getElementById("contactform");
	myForm.addEventListener("submit",validateForm)
    }
		
    function validateForm(event){
    var formValid = true;
    var myForm = document.getElementById("contactform"); 

    if (myForm.firstName.value == "") {
        formValid = false;
        document.getElementById("firstNameRequiredError").style.display = "block";
		document.getElementById("dot").style.backgroundColor = "red";
		document.getElementById("ex").style.display = "none";
		document.getElementById("ex").style.display = "inline";
        event.preventDefault();
    } 
	else {
		document.getElementById("tick").style.display = "none";
        document.getElementById("tick").style.display = "inline";
		document.getElementById("ex").style.display = "none";
		document.getElementById("dot").style.backgroundColor = "";
    }
	    if (myForm.lastName.value == "") {
        formValid = false;
        document.getElementById("lastNameRequiredError").style.display = "block";
		document.getElementById("dot2").style.backgroundColor = "red";
		document.getElementById("ex2").style.display = "none";
		document.getElementById("ex2").style.display = "inline";
        event.preventDefault();
    } 
	else {
		document.getElementById("tick2").style.display = "none";
        document.getElementById("tick2").style.display = "inline";
		document.getElementById("ex2").style.display = "none";
		document.getElementById("dot2").style.backgroundColor = "";
    }
    if (myForm.email.value == "") {
        formValid = false;
        document.getElementById("EmailRequiredError").style.display = "block";
		document.getElementById("dot3").style.backgroundColor = "red";
		document.getElementById("ex3").style.display = "none";
		document.getElementById("ex3").style.display = "inline";
        event.preventDefault();
    } 
	else {
		document.getElementById("tick3").style.display = "none";
        document.getElementById("tick3").style.display = "inline";
		document.getElementById("ex3").style.display = "none";
		document.getElementById("dot3").style.backgroundColor = "";
    }
	if (myForm.message.value == "") {
        formValid = false;
        document.getElementById("messageRequiredError").style.display = "block";
		document.getElementById("dot4").style.backgroundColor = "red";
		document.getElementById("ex4").style.display = "none";
		document.getElementById("ex4").style.display = "inline";
        event.preventDefault();
    } 
    
	else{

        document.getElementById("tick4").style.display = "none";
        document.getElementById("tick4").style.display = "inline";
		document.getElementById("ex4").style.display = "none";
		document.getElementById("dot4").style.backgroundColor = "";
	}
   }
  